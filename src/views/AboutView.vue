<template>
<h1>H!</h1>
 <div class="horizontal-scroll-container"  ref="scrollContent">

  <div class="container-fluid" >
       <div class="scroll-content" >
      <div class="scroll-item" v-for="movie in movies" :key="movie.id">
        <div class="card" style="width: 14rem">
            <img
              :src="getImageUrl(movie.poster_path)"
              :alt="movie.title"
              class="img-fluid card-img"
            />
    <div class="card-body d-none d-md-block d-lg-block">
              <p class="text-truncate title">{{ movie.original_title }}</p>
            <div class="d-flex justify-content-between">
              <small class="text-truncate date">{{ movie.release_date }}</small>
              <small style="color: gold; font-size: 12px; padding-right: 20px" class="vote">
                <Icon icon="bi:star-fill" color="gold" class="" /> {{ movie.vote_average }}</small
              >
            </div>
          </div>
          </div>
      </div>
    </div>
  </div>
 
    
    <button class="scroll-button right" @click="scrollRight">
      Scroll Right
    </button>
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
          alert('Error fetching movie, check network connection')
        })
    },

 scrollRight() {
      const scrollContent = this.$refs.scrollContent;
      scrollContent.scrollBy({
        left: 100, // Adjust the scroll distance as needed
        behavior: 'smooth' // Enable smooth scrolling
      });
    },

        getImageUrl(posterPath) {
      if (posterPath) {
        return `https://image.tmdb.org/t/p/original${posterPath}`
      } else {
        return 'placeholder-image-url.jpg' // Replace with your placeholder image URL
      }
    }

  }
}
</script>

<style>
.horizontal-scroll-container {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  position: relative;
}

.scroll-content {
  display: inline-block;
}

.scroll-item {
  display: inline-block;
  width: 200px; /* Adjust item width as needed */
  height: 200px; /* Adjust item height as needed */
  background-color: #ccc;
  margin-right: 10px;
}

/* Hide the scroll bar */
.horizontal-scroll-container::-webkit-scrollbar {
  display: none;
}

.scroll-button {
  position: fixed;
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


.scroll-button.right {
    right: 10px;
}
</style>
