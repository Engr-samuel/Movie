<template>

  <!-- <main>
    <div
      class="background-img"
      v-if="movie"
      :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path} )` }"
    >

        <div class="overlay"></div>

        <navbar-vue class="nav"> </navbar-vue>
        <div v-if="movie" class="container mt-5">
          <h1 class="text-white my-5">{{ movie.original_title }}</h1>
        </div>
  </div>
  </main> -->


  <section class="hero-section">
   <transition name="fade">
      <div class="hero-background"  v-if="movie"
      :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path} )` }"></div>
    </transition>
    <div class="hero-overlay"></div>
   <navbar-vue></navbar-vue>

    <div class="hero-details" v-if="movie">
        <div class="content container">
          <h1 class="hero-header mb-3 text-left display-3"><span>{{ movie.original_title}} </span></h1>
        </div>
      </div>
  </section>






 <div class="container">
  <div class="content-two  my-5">
   <div class="container">
    <div class="row head">
      <!-- Movie Details Section-->
      <div class="col-lg-6">
        <h1>Details</h1>
      </div>
      <div class="col-lg-6">
        <h1>Storyline</h1>
      </div>
    </div>
   </div>
      <div class="row my-1 g-5">
      <!-- Movie Details Section-->
      <div class="col-lg-6">
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <span>Country</span>
            <span v-for="country in production_countries" :key="country.id">{{ country.name }}</span>
          </li>
          <li class="list-group-item my-4 d-flex justify-content-between align-items-start">
            <span>Language</span>
            <span v-if="language">{{ language[0].english_name }}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <span>Release Date</span>
            <span>{{ formattedDate }}</span>
          </li>
          <li class="list-group-item mt-4 d-flex justify-content-between align-items-start">
           <span>Genres</span>
           <span v-if="genres">{{ `${genres[0].name}, ${genres[1].name}` }}</span>
          </li>
        </ul>
      </div>
      <div class="col-lg-6">
        <p>{{ movie.overview }}</p>
      </div>
    </div>
  </div>
 </div>


 
</template>

<script>
import axios from 'axios'
import navbarVue from '../components/navbar.vue'
import MoviesVue from '../components/Movies.vue'
import { format } from 'date-fns'

export default {
  components: {navbarVue, MoviesVue},

  data() {
    return {
      movie: {},
      images: null,
      production_countries: null,
      language: null,
      genres: null
    }
  }, 

  mounted() {
    this.fetchMovie()
    this.fetchImages()
  },

computed: {
   formattedDate() {
    const releaseDate = this.movie.release_date;
    const date = new Date(`${releaseDate}T00:00:00Z`);
    const timezoneOffset = date.getTimezoneOffset();
    const adjustedDate = new Date(date.getTime() - timezoneOffset * 60 * 1000);

    return format(adjustedDate, "MMMM d, yyyy");
   } 

  },

  methods: {
    fetchMovie() {
      const api_key = 'e322ec768a4787f47c3a2896362e2b67'
      const id = this.$route.params.id
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
      axios.get(url) 
        .then((response) => {
            this.movie = response.data
            this.production_countries = response.data.production_countries
            this.language = response.data.spoken_languages
            this.genres = response.data.genres
        })
        .catch((err) => {
          console.log('error fetching movie:', err);
        })

    },


    fetchImages() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
      const id = this.$route.params.id
      const url = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}`

      axios
        .get(url)
        .then((response) => {
          this.images = response.data.backdrop
        })

        .catch((error) => {
          console.error('Error fetching movies:', error)
        })
    },
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  height: 80vh;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
  /* filter: blur(4px); Add blur effect */
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.57); /* Add overlay color and opacity */
  z-index: -1;
}

.hero-details {
  padding-top: 10%;
  text-align: center;
  color: #fff;
}

.hero-details .content {
  position: absolute;
  bottom: 0;
  margin-bottom: 2rem;

}

.hero-details .content h1 {
  font-weight: 600;
  font-size: 50px;
  text-transform: uppercase;
  color: #fff;
}

.content-two h1 {
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
}

.content-two .head {
  border-bottom: 2px solid green;
}

.content-two .list-group-item {
  background: none;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  color: #c6c2c2;
  padding: 0px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  background-color: rgba(0, 0, 0, 0.705); /* Add overlay color and opacity */
  z-index: -1;
}
</style>