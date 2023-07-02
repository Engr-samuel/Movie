<script>
import axios from 'axios'
import FooterVue from '../components/Footer.vue'
import Header from '../components/Header.vue'
import { Icon } from '@iconify/vue'

export default {
  data() {
    return {
      movies: [],
      cast: [],
      videoKey: null,
      studios: null,
      images: null
    }
  },

  components: {
    Header,
    FooterVue,
    Icon
  },

  mounted() {
    this.fetchMovies()
    this.fetchCast()
    this.fetchVideos()
    this.fetchImages()
    this.fetchRecommendations()
  },

  computed: {
    limitedCast() {
      return this.cast.slice(0, 5)
    },

    formattedRuntime() {
      const hours = Math.floor(this.movies.runtime / 60)
      const minutes = this.movies.runtime % 60
      return `${hours}h ${minutes}m`
    }
  },

  methods: {
    fetchMovies() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
      const id = this.$route.params.id
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`

      axios
        .get(url)
        .then((response) => {
          this.movies = response.data
        })
        .catch((error) => {
          console.error('Error fetching movies:', error)
        })
    },

    fetchVideos() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
      const id = this.$route.params.id
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`

      axios
        .get(url)
        .then((response) => {
          const video = response.data.results

          if (video.length > 0) {
            this.videoKey = video[1].key
          }
        })
        .catch((error) => {
          console.error('Error fetching movies:', error)
        })
    },

    fetchImages() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
      const id = this.$route.params.id
      const url = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}`

      axios
        .get(url)
        .then((response) => {
          this.images = response.data.posters
        })

        .catch((error) => {
          console.error('Error fetching movies:', error)
        })
    },

    fetchRecommendations() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
      const id = this.$route.params.id
      const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`

      axios
        .get(url)
        .then((response) => {
          this.recommendations = response.data.results
        })

        .catch((error) => {
          console.error('Error fetching movies:', error)
        })
    },

    fetchCast() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
      const id = this.$route.params.id
      const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`

      axios
        .get(url)
        .then((response) => {
          this.cast = response.data.cast
        })
        .catch((error) => {
          console.error('Error fetching movies:', error)
        })
    },

    getLogoPath(logoPath) {
      return `https://image.tmdb.org/t/p/original${logoPath}`
    }
  }
}
</script>

<template>
  <main class="d-none -d-md-none d-lg-block">
    <!-- <Header /> -->
    <div
      class="background-img"
      v-if="movies"
      :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path} )` }"
    >
      <nav class="navbar navbar-expand" aria-label="Second navbar example">
        <div class="container">
          <router-link class="navbar-brand" to="/"
            ><Icon icon="mingcute:arrow-left-fill" color="white" width="40" class="p-2 mt-1"
          /></router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample02"
            aria-controls="navbarsExample02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample02">
            <ul class="navbar-nav me-auto">
              <!-- <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li> -->
            </ul>
            <div class="">
              <Icon icon="akar-icons:search" color="white" width="20" class="head-add" />

              <router-link class="navbar-brand" to="/"
                ><Icon icon="clarity:user-solid" color="white" width="20" class="head-add"
              /></router-link>
            </div>
          </div>
        </div>
      </nav>
      <div class="container content">
        <div class="row">
          <div class="col-lg-8">
            <h1 class="p-5 pb-2 display-3">{{ movies.original_title }}</h1>
            <div class="d-flex">
              <button
                class="btn btn-md play-btn bg-white text-black px-4 ml-0 mt-0"
                style="margin: 3rem; margin-right: 0.5rem"
              >
                <Icon icon="ion:play-sharp" color="black" width="30" /> <span>Play</span>
              </button>

              <Icon
                icon="fluent:add-20-regular"
                color="white"
                width="40"
                class="bg-dark p-2 mt-1 add"
              />

              <Icon
                icon="typcn:thumbs-ok"
                color="white"
                width="40"
                class="bg-dark p-2 mt-1 m-2 add"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="movies">
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-7">
            <div class="container">
              <div class="top d-flex">
                <h6 class="title" style="color: green; font-weight: 600">
                  {{ movies.release_date }}
                </h6>
                <h6 style="padding-left: 10px" class="text-secondary">{{ formattedRuntime }}</h6>
                <h6 style="padding-left: 10px" class="text-secondary">
                  {{ movies.status }} <Icon icon="mingcute:check-fill" color="green" />
                </h6>
                <h6
                  class="title text-secondary"
                  style="padding-left: 10px"
                  v-if="movies.adult == false"
                >
                  <Icon icon="uil:18-plus" color="green" />
                </h6>
              </div>

              <div class="item my-4">
                <span class="text-white" style="font-weight: 700">Avalable in: </span>
                <span
                  v-for="lang in movies.spoken_languages"
                  :key="lang.id"
                  class="text-secondary"
                  style="font-size: 13px; font-weight: 600"
                  >{{ lang.english_name + ', ' }}
                </span>
              </div>
              <h3 class="title text-white">{{ movies.tagline }}</h3>
              <p class="pt-3 text-secondary">{{ movies.overview }}</p>

              <div v-if="videoKey">
                <iframe
                  :src="'https://www.youtube.com/embed/' + videoKey"
                  class="iframe"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>

          <div class="col-lg-5 mt-3">
            <div class="item">
              <span class="text-white" style="font-weight: 600">Cast:</span>
              <span
                v-for="person in limitedCast"
                :key="person.id"
                class="text-secondary"
                style="font-size: 13px; font-weight: 600"
                >{{ person.name + ', ' }}
              </span>
            </div>

            <div class="item mt-4">
              <span class="text-white" style="font-weight: 600">Genres:</span>
              <span
                v-for="genre in movies.genres"
                :key="genre.id"
                class="text-secondary"
                style="font-size: 13px; font-weight: 600"
                >{{ genre.name + ', ' }}
              </span>
            </div>

            <div class="item mt-4">
              <span class="text-white" style="font-weight: 600">Genres:</span>
              <span
                v-for="lang in movies.spoken_languages"
                :key="lang.id"
                class="text-secondary"
                style="font-size: 13px; font-weight: 600"
                >{{ lang.english_name + ', ' }}
              </span>
            </div>

            <div class="bg-white mt-4">
              <!-- <img :src="getLogoPath(studio)" alt="" class="img-fluid"> -->
              <div class="row">
                <div
                  class="col-lg-3 col-md-3 col-3 py-3 px-4"
                  v-for="studio in movies.production_companies"
                  :key="studio.id"
                >
                  <img
                    :src="'https://image.tmdb.org/t/p/original/' + studio.logo_path"
                    alt=""
                    class="img-fluid studio d-flex"
                  />
                </div>
              </div>
            </div>

            <!-- <div class="row">
              <div class="col-lg-3" v-for="image in images" :key="image.id">
                <img :src="'https://image.tmdb.org/t/p/original/' + image.file_path " class="img-fluid" alt="">
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <h3 class="text-white">More Like This</h3>

      <div class="row row-cols-md-4 row-cols-lg-6">
        <div class="col" v-for="movie in recommendations" :key="movie.id">
          <img
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
            class="img-fluid mt-3"
            alt=""
          />
        </div>
      </div>
    </div>

    <FooterVue />
  </main>

  <main class="d-block d-md-block d-lg-none">
    <nav class="navbar navbar-expand bg-black" aria-label="Second navbar example">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"
          ><Icon icon="mingcute:arrow-left-fill" color="white" width="40" class="p-2 mt-1"
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample02"
          aria-controls="navbarsExample02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample02">
          <ul class="navbar-nav me-auto">
            <!-- <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li> -->
          </ul>
          <div class="">
            <Icon icon="akar-icons:search" color="white" width="20" class="head-add" />

            <router-link class="navbar-brand" to="/"
              ><Icon icon="clarity:user-solid" color="white" width="20" class="head-add"
            /></router-link>
          </div>
        </div>
      </div>
    </nav>

     <div v-if="videoKey">
                <iframe
                  :src="'https://www.youtube.com/embed/' + videoKey"
                  class="iframe2"
                  frameborder="0"
                  allowfullscreen
                ></iframe>

                <div v-if="movies">
                  <h1 class="text-white p-2 title" style="font-weight: 600; font-size: 2opx">{{ movies.original_title }}</h1>
                </div>

                <div class="top d-flex p-2">
                <h6 class="title text-success" style="color: ; font-weight: 600">
                  {{ movies.release_date }}
                </h6>
                <h6 style="padding-left: 10px" class="text-secondary">{{ formattedRuntime }}</h6>
                <h6 style="padding-left: 10px" class="text-secondary">
                  {{ movies.status }} <Icon icon="mingcute:check-fill" color="white" />
                </h6>
                <h6
                  class="title text-secondary"
                  style="padding-left: 10px"
                  v-if="movies.adult == false"
                >
                  <Icon icon="uil:18-plus" color="red" />
                </h6>
              </div>

              <div class="bt p-2">
                <button class="btn bg-white text-black" style="width: 100%; font-weight: 600; border-radius: 4px"> <Icon icon="ion:play-sharp" color="black" width="20" /> Play</button>

                <button class="btn bg-dark mt-1 text-white" style="width: 100%; font-weight: 600; border-radius: 4px"> <Icon  icon="material-symbols:download" color="white" width="20" /> Download</button>
              </div>

              <div class="overview">
                <p class="p-2 text-secondary" style="font-size: 14px">{{ movies.overview }}</p>
                <div class="item p-2 pt-0">
              <span class="text-white" style="font-weight: 600; font-size: 12px;">Starring: </span>
              <span
                v-for="person in limitedCast"
                :key="person.id"
                class="text-secondary"
                style="font-size: 12px; font-weight: 600"
                >{{ person.name + ', ' }}
              </span>
            </div>
              </div>
      </div>

       <div class="container mt-3">
      <h3 class="text-white pb-3" style="border-bottom: 3px solid red">More Like This</h3>

      <div class="row">
        <div class="col-4" v-for="movie in recommendations" :key="movie.id">
          <img
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
            class="img-fluid mt-3"
            alt=""
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
nav {

}

.head-add {
  margin-top: -15px;
  margin-left: 20px;
}

.iframe {
  width: 100%;
  height: 100%;
}

.iframe2 {
  width: 100%;
  height: 250px;
}
.background-img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 500px;
  position: relative;
}

.background-img::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 500px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.824), rgba(0, 0, 0, 0));
  pointer-events: none;
  filter: blur(10px);
}

.content {
  position: absolute;
  bottom: 0;
  margin-bottom: 30px;
  z-index: 1;
}

.content h1 {
  font-weight: 700;
  color: #ffffff;
}

.play-btn {
  border-radius: 5px;
  font-weight: 600;
}

.add {
  border-radius: 100px;
  border: 2px solid #f2f2f2;
}

.studio {
  width: 100px;
  height: 50px;
  object-fit: contain;
  margin: 0px;
}


@media only screen and (min-width: 768px) {
  
}
</style>