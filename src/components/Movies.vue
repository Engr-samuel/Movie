<template>
  <div class="hero">
    <div class="head  border-bottom py-2">
      <h1 class="text-white"></h1>

      <header class="d-flex flex-wrap justify-content-center mb-4 d-none d-md-block d-lg-block">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
          <span class="fs-4 text-white text-left"
            ><Icon icon="iconamoon:trend-up" color="white" /> Trends Now</span
          >
        </a>

        <ul class="nav nav-pills d-none d-md-flex d-lg-flex">
          <li class="nav-item">
            <a href="#" class="nav-link" aria-current="page"
              ><Icon icon="mdi:fire" color="gray" /> Popular</a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"><Icon icon="ic:round-star" color="gray" /> Premieres</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"
              ><Icon icon="ic:baseline-add" color="gray" /> Recently Added</a
            >
          </li>
        </ul>
      </header>

      <header>
        <div class="text-left container">
            <span class="fs-4 text-white text-left" style="font-weight: 600"
            >Trends Now</span
          >
        </div>
      </header>
    </div>

    <div class="container">
      <div class="media-scroll my-5">
        <div class="media-container" ref="genreContainer">
          <div class="genre-item" v-for="genre in genres" :key="genre.id">
            <span
              class="badge rounded-pill px-4 py-2"
              style="background-color: red; font-size: 13px"
              >{{ genre.name }}</span
            >
          </div>
        </div>
        <button class="scroll-button3" @click="scrollGenreRight">
          <Icon icon="mingcute:right-fill" color="white" />
        </button>
        <button class="scroll-button4" @click="scrollGenreLeft">
          <Icon icon="mingcute:left-fill" color="white" />
        </button>
      </div>
    </div>
    <div class="media-scroll my-5">
      <div class="media-container" ref="mediaContainer">
        <div
          class="media-item"
          v-for="movie in movies"
          :key="movie.id"
          @click="showMovieDetail(movie.id)"
        >
          <div class="card" style="width: 14rem">
            <img
              :src="getImageUrl(movie.poster_path)"
              :alt="movie.title"
              class="img-fluid card-img"
            />
            <p class="text-truncate title">{{ movie.original_title }}</p>
            <div class="d-flex justify-content-between">
              <small class="text-truncate date">{{ movie.release_date }}</small>
              <small style="color: gold" class="vote">
                <Icon icon="bi:star-fill" color="gold" class="" /> {{ movie.vote_average }}</small
              >
            </div>
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


</template>

<script>
import axios from 'axios'
import { Icon } from '@iconify/vue'
export default {
  components: {
    Icon
  },
  data() {
    return {
      movies: [],
      genres: []
    }
  },

  mounted() {
    this.fetchMovies()
    this.fetchGenres()
  },
  methods: {
    fetchMovies() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`

      axios
        .get(url)
        .then((response) => {
          this.movies = response.data.results
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

    getImageUrl(posterPath) {
      if (posterPath) {
        return `https://image.tmdb.org/t/p/w300${posterPath}`
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
    },

    scrollGenreRight() {
      const container = this.$refs.genreContainer
      container.scrollLeft += 100 // Adjust the scroll amount as per your preference
    },

    scrollGenreLeft() {
      const container = this.$refs.genreContainer
      container.scrollLeft -= 100 // Adjust the scroll amount as per your preference
    }
  }
}
</script>

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
  margin-right: 30px;
}

@media screen and (max-width: 480px) {
  
.media-item {
  /* Styling for each media item */
  margin-right: 15px;
}

.card {
  width: 8rem !important;
}

.title, .vote, .date{
  font-size: 14px;
}
}

.genre-item {
  /* Styling for each media item */
  margin-right: 10px;
}

.genre-item .badge:hover {
  background: #fff !important;
  color: #000;
  cursor: pointer;
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

.scroll-button3 {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  padding: 8px 12px;
  border: none;
  background-color: #121111b5;
  color: #fff;
  cursor: pointer;
}

.scroll-button4 {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  padding: 8px 12px;
  border: none;
  background-color: #121111b5;
  cursor: pointer;
}

.card {
  border: none;
  background: none;
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