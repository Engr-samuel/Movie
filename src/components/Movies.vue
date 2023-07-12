<template>
            <div class="big-screen my-5 container-fluid">

            <div class="d-flex justify-content-between">
              <h1>My Watchlist</h1> 
              <nav class="page">
                        <ul class="pagination pagination-sm">
                          <li class="page-item prev-nav" :class="{ disabled: currentPage === 1 }">
                            <a class="page-link" href="#" @click.prevent="fetchPreviousPage"><Icon icon="ooui:previous-ltr" color="white" width="10" /></a>
                          </li>
                          <li class="page-item" v-for="page in paginationRange" :key="page" :class="{ active: page === currentPage }">
                            <a class="page-link item-link" href="#" @click.prevent="fetchMovies(page)">{{ page }}</a>
                          </li>
                          <li class="page-item next-nav" :class="{ disabled: currentPage === totalPages }">
                            <a class="page-link" href="#" @click.prevent="fetchNextPage"><Icon icon="ooui:previous-rtl" color="white" width="10" /></a>
                          </li>
                        </ul>
                </nav>
            </div>
              <Carousel v-bind="settings" :breakpoints="breakpoints">
            
                <Slide v-for="movie in movies" :key="movie.id" >
                  <div class="card" style="width: 8rem">
                    <img :src="getImageUrl(movie.poster_path)" @click="showMovieDetail(movie.id)" :alt="movie.title" class="img-fluid w-100" />
                  </div>
                </Slide>

                <template #addons>
                  <Navigation class="controls" />
                </template>
              </Carousel>

   

              <div class="d-flex justify-content-between mt-4">
                <h1>Trending Movies</h1>
                <span class="explore px-3">Explore All <Icon icon="ep:right" color="gray" width="15" /></span>
              </div>
              <Carousel :itemsToShow="4" :wrapAround="true" :transition="500" class="">
                <Slide v-for="movie in topRated" :key="movie.id" class="item">
                  <div class="card" style="width: 8rem">
                    <img :src="getImageUrl(movie.poster_path)" :alt="movie.title" class="img-fluid w-100" />
                  </div>
                </Slide>

                <template #addons>
                  <Navigation />
                </template>
              </Carousel>


              <div class="d-flex justify-content-between mt-4">
                <h1>Top Tv Shows</h1>
                <span class="explore px-3">Explore All <Icon icon="ep:right" color="gray" width="15" /></span>
              </div>
              <Carousel :itemsToShow="4" :wrapAround="true" ref="scrollContent">
                <Slide v-for="movie in movies" :key="movie.id" class="item">
                  <div class="card" style="width: 8rem">
                    <img :src="getImageUrl(movie.poster_path)" :alt="movie.title" class="img-fluid w-100" />
                  </div>
                </Slide>

                <template #addons>
                  <Navigation />
                </template>
              </Carousel>



             <div class="d-flex justify-content-between mt-4">
                <h1>Games</h1>
                <span class="explore px-3">Explore All <Icon icon="ep:right" color="gray" width="15" /></span>
              </div>
              <Carousel :itemsToShow="4" :wrapAround="true" :transition="500" class="">
                <Slide v-for="game in games" :key="game.id" class="item">
                  <div class="card" style="width: 8rem">
                    <h6>game.title</h6>
                    <img :src="game.game_url" :alt="movie.title" class="img-fluid w-100" />
                  </div>
                </Slide>

                <template #addons>
                  <Navigation />
                </template>
              </Carousel>


              <div class="d-flex justify-content-between mt-4">
                <h1>Block Buster Sci-Fi</h1>
                <span class="explore px-3">Explore All <Icon icon="ep:right" color="gray" width="15" /></span>
              </div>
              <Carousel :itemsToShow="4" :wrapAround="true" :transition="500" class="">
                <Slide v-for="movie in scienceFiction" :key="movie.id" class="item">
                  <div class="card" style="width: 8rem">
                    <img :src="getImageUrl(movie.poster_path)" :alt="movie.title" class="img-fluid w-100" />
                  </div>
                </Slide>

                <template #addons>
                  <Navigation />
                </template>
              </Carousel>



                <div class="d-flex justify-content-between mt-4">
                <h1>Romantic Specials</h1>
                <span class="explore px-3">Explore All <Icon icon="ep:right" color="gray" width="15" /></span>
              </div>    
              <Carousel :itemsToShow="4" :wrapAround="true" :transition="500" class="">
                <Slide v-for="movie in romance" :key="movie.id" class="item">
                  <div class="card" style="width: 8rem">
                    <img :src="getImageUrl(movie.poster_path)" :alt="movie.title" class="img-fluid w-100" />
                  </div>
                </Slide>

                <template #addons>
                  <Navigation />
                </template>
              </Carousel>



                <div class="d-flex justify-content-between mt-4">
                <h1>Laugh Out Loud</h1>
                <span class="explore px-3">Explore All <Icon icon="ep:right" color="gray" width="15" /> </span>
              </div>
              <Carousel :itemsToShow="4" :wrapAround="true" :transition="500" class="">
                <Slide v-for="movie in comedy" :key="movie.id" class="item">
                  <div class="card" style="width: 8rem">
                    <img :src="getImageUrl(movie.poster_path)" :alt="movie.title" class="img-fluid w-100" />
                  </div>
                </Slide>

                <template #addons>
                  <Navigation />
                </template>
              </Carousel>



                <div class="d-flex justify-content-between mt-4 ">
                <h1>Top Action Movies</h1>
                <span class="explore px-3">Explore All <Icon icon="ep:right" color="gray" width="15" /></span>
              </div>
              <Carousel :itemsToShow="4" :wrapAround="true" :transition="500" class="mb-5" style="margin-bottom: 50px">
                <Slide v-for="movie in scienceFiction" :key="movie.id" class="item">
                  <div class="card" style="width: 8rem">
                    <img :src="getImageUrl(movie.poster_path)" :alt="movie.title" class="img-fluid w-100" />
                  </div>
                </Slide>

                <template #addons>
                  <Navigation />
                </template>
              </Carousel>
            </div>

</template>

<script>
import axios from 'axios'
import { Icon } from '@iconify/vue'
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
export default defineComponent({
  name: 'Autoplay',
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),
  components: {
    Icon,
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  data() {
    return {
      movies: [],
      genres: [],
      trendingMovies: [],
      tvShows: [],
      scienceFiction: [],
      romance: [],
      comedy: [],
      topRated: [],
      games: [],
      currentPage: 1,
      totalPages: null,
      maxVisiblePages: 5
    }
  },


  computed: {
    posterHeight() {
      const containerWidth = 200
      const aspectRatio = 2 / 3

      return containerWidth * aspectRatio
    },

      paginationRange() {
      const range = [];
      const start = Math.max(1, this.currentPage - Math.floor(this.maxVisiblePages / 2));
      const end = Math.min(start + this.maxVisiblePages - 1, this.totalPages);

      for (let i = start; i <= end; i++) {
        range.push(i);
      }

      return range;
    }
  },

  created() {
        this.fetchMovies(this.currentPage)
  },

  mounted() {

    this.fetchGenres()
    this.fetchTvShows()
    this.fetchSciFi()
    this.fetchComedy()
    this.fetchRomanticMovies()
    this.fetchTopRated()
    this.fetchGames()
  },
  methods: {
  fetchPreviousPage() {
    if (this.currentPage > 1) {
      this.fetchMovies(this.currentPage - 1);
    }
  },

  fetchNextPage() {
    if (this.currentPage < this.totalPages) {
      this.fetchMovies(this.currentPage + 1);
    }
  },

    fetchMovies(page) {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  
      axios.get(url, {
        params: {
          page: page
        }
      })
      .then((response) => {
        this.movies = response.data.results
        this.currentPage = response.data.page;
        this.totalPages = response.data.total_pages;
      })
        .catch((error) => {
          console.error('Error fetching movies:', error)
          alert('Error fetching movie, check network connection')
        })
    },


      fetchGames() {

      axios.get('https://www.freetogame.com/api/games?platform=pc')
      .then((response) => {
        this.games = response.data
      })
        .catch((error) => {
          console.error('Error fetching games:', error)
          alert('Error fetching games, check network connection')
        })
    },

    fetchTopRated() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&with_genres=878`

      axios
        .get(url)
        .then((response) => {
          this.topRated = response.data.results
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
      const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`

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
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16`

      axios
        .get(url)
        .then((response) => {
          this.comedy = response.data.results
        })
        .catch((error) => {
          console.error('Error fetching movies:', error)
        })
    },

    fetchGenres() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
      const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`

      axios
        .get(url)
        .then((response) => {
          this.genres = response.data.genres
        })
        .catch((error) => {
          console.error('Error fetching movies:', error)
        })
    },

    showMovieDetail(id) {
      return this.$router.push({ path: `/movie/details/${id}`, params: { id } })
    },

    showTvDetail(id) {
      return this.$router.push({ path: `/tv/details/${id}`, params: { id } })
    },

    getImageUrl(posterPath) {
      if (posterPath) {
        return `https://image.tmdb.org/t/p/w1280${posterPath}`
      } else {
        return 'placeholder-image-url.jpg' // Replace with your placeholder image URL
      }
    },

    goToGenre(id) {
      return this.$router.push({ path: `/genre/${id}`, params: { id } })
    },

    scrollRight() {
      const scrollContent = this.$refs.scrollContent
      scrollContent.scrollBy({
        left: 100, // Adjust the scroll distance as needed
        behavior: 'smooth' // Enable smooth scrolling
      })
    }
  }
})
</script>

<style scoped>

h1 {
  font-size: 20px;
  color: #fff;
  padding-top: 0px;
  padding-bottom: 0px ;
  font-family: Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif;
  font-weight:600;
}
.item {
  padding: 0px;
}

.prev-nav, .next-nav {

  border-radius: 200px;
  background-color: none !important;
}

li.page-item.prev-nav.disabled {
  background: none !important;
}

.page-link {
    background: none !important;
    border: none;
}

.page-item {

 
}

.page-item .active {
  background: none !important;
}

.item-link{
  border-radius: 100px;
  margin-right: 5px;
  width: 30px;
  height: 30px;
  text-align: center;
  background: none !important;
  border: none;
}
.page-link .active:hover {
  background: none !important;
  color: #fff !important;
}

.pagination > li.active > a, .pagination > li > a:hover {
  background: green !important;
  color: #fff !important;
}

.pagination > li.active > a, .pagination > li > a:focus {
  background: green !important;
  border: none !important;
}




.carousel__slide {
  scroll-snap-stop: auto;
  flex-shrink: 1;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateZ(0);
  padding: 5px;

}

.carousel__icon {
  width: var(--vc-icn-width);
  height: var(--vc-icn-width);
  fill: currentColor;
  display: none;
}

.carousel__icon:hover {
  display: block;
}

.explore {
  color: gray;
  font-size: 12px;
  padding-top: 0px;
  cursor: pointer;
  font-weight: 600;
}
.explore:hover {
  color: rgb(7, 108, 43) !important;
 
}




.header-2 {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
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
  margin-right: 30px;
}

.scroll-button {
  position: absolute;
  top: 50%;

  transform: translateY(-50%);
  padding: 8px 12px;
  border: none;
  background-color: transparent;
  outline: none;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}
/* .scroll-button .left {
    left: 10px;
}

.scroll-button .right {
    right: 10px;
} */

@media screen and (max-width: 480px) {
  .media-item {
    /* Styling for each media item */
    margin-right: 5px;
  }

  .media-scroll {
    width: 100%;
    overflow-x: hidden;
    position: relative;
    margin-top: 10px;
  }

  .card {
    width: 6rem !important;
  }

  .card img {
    width: 6rem !important;
  }

  .title,
  .vote,
  .date {
    font-size: 14px;
  }

  .first-head {
    margin-top: -20%;
    position: relative;
    z-index: 1 !important;
  }

  .scroll-button1,
  .scroll-button2,
  .scroll-button3,
  .scroll-button4 {
    display: none;
  }
}

.genre-item {
  /* Styling for each media item */
  margin-right: 5px;
}

.genre-item .badge:hover {
  background: #fff !important;
  color: #000;
  cursor: pointer;
}

.image-container {
  width: 100%;
  height: calc(200px * (9 / 16));
}

.media-item img {
  width: 100%;
  height: 100%;
}

.card {
  border: none;
  background: none;
  width: 100%;
}

.card p {
  color: #fff;
  font-weight: 600;
}
.head a {
  font-size: 30px;
  font-weight: 600;
}

li a {
  color: #848181 !important;
  font-size: 15px !important;
}
</style>