<template>
  <div class="container mt-5">
    <div class="media-scroll my-5">
      <div class="media-container" ref="mediaContainer">
        <div class="media-item" v-for="movie in movies" :key="movie.id" @click="showMovieDetail(movie.id)">
         

          <div class="card" style="width: 15rem">
            <img :src="getImageUrl(movie.poster_path)" :alt="movie.title" class="img-fluid" />
          </div>
        </div>
      </div>
      <button class="scroll-button1" @click="scrollRight"><Icon icon="mingcute:right-fill" color="white" /></button>
      <button class="scroll-button2" @click="scrollLeft"><Icon icon="mingcute:left-fill" color="white" /></button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {Icon} from '@iconify/vue'
export default {
    components: {
        Icon
    },
  data() {
    return {
      movies: []
    }
  },

  mounted() {
    this.fetchMovies()
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

<style>
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
</style>