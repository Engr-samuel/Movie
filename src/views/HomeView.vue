<script>
import axios from 'axios'
import FooterVue from '../components/Footer.vue'
import Header from '../components/Header.vue'
import Movies from '../components/Movies.vue'
import { Icon } from '@iconify/vue'

// https://api.themoviedb.org/3/trending/movie/day?api_key=e322ec768a4787f47c3a2896362e2b67
// https://api.themoviedb.org/3/tv/popular?api_key=e322ec768a4787f47c3a2896362e2b67

export default {
  data() {
    return {
      trendingMovies: [],
      tvShows: [],
      scienceFiction: [],
      romance: [],
      comedy:[]
    }
  },

  components: {
    Header,
    FooterVue,
    Movies,
    Icon
  },

  mounted() {
    this.fetchMovies()
    this.fetchTvShows()
    this.fetchSciFi()
    this.fetchRomanticMovies()
    this.fetchComedy()
  },

  computed: {
    limitedTvShows() {
      return this.tvShows.slice(0, 3)
    },

    limitedSciFi(){
      return this.scienceFiction.slice(0, 6)
    },

    limitedRomance(){
      return this.romance.slice(0, 6)
    },

      limitedComedy(){
      return this.comedy.slice(0, 6)
    },
  },

  methods: {
    fetchMovies() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
      const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`

      axios
        .get(url)
        .then((response) => {
          this.trendingMovies = response.data.results
        })
        .catch((error) => {
          console.error('Error fetching movies:', error)
        })
    },

      fetchSciFi() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=878`

      axios
        .get(url)
        .then((response) => {
          this.scienceFiction = response.data.results
        })
        .catch((error) => {
          console.error('Error fetching movies:', error)
        })
    },

    fetchTvShows() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
      const url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`

      axios
        .get(url)
        .then((response) => {
          this.tvShows = response.data.results
        })
        .catch((error) => {
          console.error('Error fetching movies:', error)
        })
    },

      fetchRomanticMovies() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
       const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749`

      axios
        .get(url)
        .then((response) => {
          this.romance = response.data.results
        })
        .catch((error) => {
          console.error('Error fetching movies:', error)
        })
    },

      fetchComedy() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
       const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`

      axios
        .get(url)
        .then((response) => {
          this.comedy = response.data.results
        })
        .catch((error) => {
          console.error('Error fetching movies:', error)
        })
    },


  showMovieDetail(id){
    return this.$router.push({path: `/movie/details/${id}`, params: {id}});
  },
    getImageUrl(posterPath) {
      if (posterPath) {
        return `https://image.tmdb.org/t/p/w500${posterPath}`
      } else {
        return 'placeholder-image-url.jpg' // Replace with your placeholder image URL
      }
    },

    scrollRight() {
      const container = this.$refs.mediaContainer
      container.scrollLeft += 100 // Adjust the scroll amount as per your preference
    },

    scrollLeft() {
      const container = this.$refs.mediaContainer
      container.scrollLeft -= 100 // Adjust the scroll amount as per your preference
    }
  }
}
</script>

<template>
  <main>
    <Header />
    <Movies />

    <!-- <div class="container">
      <div class="row g-5">
        <div class="col-md-8">
          <div class="container mt-5">
            <div class="mb-3 rounded">
              <h4 class="text-white">Today Specials</h4>
            </div>
            <div class="media-scroll my-5">
              <div class="media-container" ref="mediaContainer">
                <div class="media-item" v-for="movie in trendingMovies" :key="movie.id" @click="showMovieDetail(movie.id)">
                  <div class="card" style="width: 15rem">
                    <img
                      :src="getImageUrl(movie.poster_path)"
                      :alt="movie.title"
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <button class="scroll-button1" @click="scrollRight">
                <Icon icon="mingcute:right-fill" color="white" />
              </button>
              <button class="scroll-button2" @click="scrollLeft">
                <Icon icon="mingcute:left-fill" color="white" />
              </button>
            </div>
          </div>

          <div class="container mt-5">
            <div class="mb-3 rounded">
              <h4 class="text-white">Last Week Specials</h4>
            </div>
            <div class="media-scroll my-5">
              <div class="media-container" ref="mediaContainer">
                <div class="media-item" v-for="movie in trendingMovies" :key="movie.id">
                  <div class="card" style="width: 15rem">
                    <img
                      :src="getImageUrl(movie.poster_path)"
                      :alt="movie.title"
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <button class="scroll-button1" @click="scrollRight">
                <Icon icon="mingcute:right-fill" color="white" />
              </button>
              <button class="scroll-button2" @click="scrollLeft">
                <Icon icon="mingcute:left-fill" color="white" />
              </button>
            </div>
          </div>


          <div class="container mt-5">
            <div class="mb-3 rounded">
              <h4 class="text-white">Epic Sci-Fi</h4>
            </div>
            <div class="media-scroll my-5">
              <div class="media-container" ref="mediaContainer">
                <div class="media-item" v-for="movie in limitedSciFi" :key="movie.id" @click="showMovieDetail(movie.id)">
                  <div class="card" style="width: 15rem">
                    <img
                      :src="getImageUrl(movie.poster_path)"
                      :alt="movie.title"
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <button class="scroll-button1" @click="scrollRight">
                <Icon icon="mingcute:right-fill" color="white" />
              </button>
              <button class="scroll-button2" @click="scrollLeft">
                <Icon icon="mingcute:left-fill" color="white" />
              </button>
            </div>
          </div>


          <div class="container mt-5">
            <div class="mb-3 rounded">
              <h4 class="text-white">Romantic Movies for Every Mood</h4>
            </div>
            <div class="media-scroll my-5">
              <div class="media-container" ref="mediaContainer">
                <div class="media-item" v-for="movie in limitedRomance" :key="movie.id" @click="showMovieDetail(movie.id)">
                  <div class="card" style="width: 15rem">
                    <img
                      :src="getImageUrl(movie.poster_path)"
                      :alt="movie.title"
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <button class="scroll-button1" @click="scrollRight">
                <Icon icon="mingcute:right-fill" color="white" />
              </button>
              <button class="scroll-button2" @click="scrollLeft">
                <Icon icon="mingcute:left-fill" color="white" />
              </button>
            </div>
          </div>

          <div class="container mt-5">
            <div class="mb-3 rounded">
              <h4 class="text-white">Comedy Corner</h4>
            </div>
            <div class="media-scroll my-5">
              <div class="media-container" ref="mediaContainer">
                <div class="media-item" v-for="movie in limitedComedy" :key="movie.id">
                  <div class="card" style="width: 15rem">
                    <img
                      :src="getImageUrl(movie.poster_path)"
                      :alt="movie.title"
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <button class="scroll-button1" @click="scrollRight">
                <Icon icon="mingcute:right-fill" color="white" />
              </button>
              <button class="scroll-button2" @click="scrollLeft">
                <Icon icon="mingcute:left-fill" color="white" />
              </button>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="position-sticky" style="top: 2rem">
            <div class="mb-3 rounded my-5">
              <h4 class="text-white">Popular Tv Shows</h4>
            </div>

            <div>
              <ul class="list-unstyled">
                <li v-for="movie in limitedTvShows" :key="movie.id" @click="showMovieDetail(movie.id)">
                  <a
                    class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                    <img
                      :src="getImageUrl(movie.poster_path)"
                      :alt="movie.title"
                      class="img-fluid tvshow-img"
                    />
                    <div class="col-lg-8">
                      <h6 class="mb-0">{{ movie.name }}</h6>
                      <small class="text-body-secondary">{{ movie.first_air_date }}</small>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div class="p-4">
              <h4 class="fst-italic">Archives</h4>
              <ol class="list-unstyled mb-0">
                <li><a href="#">March 2021</a></li>
                <li><a href="#">February 2021</a></li>
                <li><a href="#">January 2021</a></li>
                <li><a href="#">December 2020</a></li>
                <li><a href="#">November 2020</a></li>
                <li><a href="#">October 2020</a></li>
                <li><a href="#">September 2020</a></li>
                <li><a href="#">August 2020</a></li>
                <li><a href="#">July 2020</a></li>
                <li><a href="#">June 2020</a></li>
                <li><a href="#">May 2020</a></li>
                <li><a href="#">April 2020</a></li>
              </ol>
            </div>

            <div class="p-4">
              <h4 class="fst-italic">Elsewhere</h4>
              <ol class="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <FooterVue />
  </main>
</template>


<style scoped>
.media-scroll {
  width: 100%;
  overflow-x: hidden;
  position: relative;
  margin-top: 50px;
}

.media-container {
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* Hide scrollbar in IE */
  scrollbar-width: none; /* Hide scrollbar in Firefox and Webkit */
}

.media-container::-webkit-scrollbar {
  display: none; /* Hide scrollbar in Webkit */
}

.media-item {
  /* Styling for each media item */
  margin-right: 10px;
}

.scroll-button1 {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  padding: 8px 12px;
  border: none;
  background-color: #680000;
  color: #fff;
  cursor: pointer;
}

.scroll-button2 {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  padding: 8px 12px;
  border: none;
  background-color: #680000;
  cursor: pointer;
}

.card {
  border: none;
}

.tvshow-img {
  width: 120%;

  object-fit: contain;
}
</style>