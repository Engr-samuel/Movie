<template>
  <section class="hero-section">
   <transition name="fade">
      <div class="hero-background" :style="backgroundStyle" v-if="movieLoaded"></div>
    </transition>
    <div class="hero-overlay"></div>
   <navbar-vue></navbar-vue>

    <div class="hero-details" v-if="movieLoaded && movie">
     <div class="main-content">
       <div class="age">
        <span>15+</span>
      </div>

     <div class="row">
      <div class="col-lg-6 col-md-12 ">
        <div class="content text-left container">
           <!-- <p><strong>Genres:</strong> {{ genres[0].name }}</p> -->

           <div class="tags d-flex">
            <span class="badge text-bg-success py-2 d-none d-md-block d-lg-block" >{{ movieGenres }}</span>
            <!-- <span class="badge text-bg-warning py-2 mx-1">{{ genres[1].name }}</span>
            <span class="badge text-bg-success py-2">{{ genres[2].name }}</span> -->
           </div>
           <h1>{{ movie.title }}</h1>
           <p class="d-none d-md-block d-lg-block">{{ truncatedOverview }}</p>

           <div class="d-flex small-details">
             <p style="padding-right: 5px"><Icon icon="ic:outline-star" color="gold" width="15" /> {{movie.vote_average}}</p>
           <p style="color: gray">Release Date: {{ formattedReleaseDate }}</p>
           </div>
           <span class="d-block d-md-none d-lg-none" style="font-size: 12px; font-weight: 600; color: #f2f2f2">{{ movieGenres }}</span>
          <div class="d-flex my-3 details-button">
             <Icon icon="gala:add" color="white" width="35" class="d-block d-md-block d-lg-none"/>
             <button class="btn bg-white text-dark px-4 play"><Icon icon="ion:play-sharp" width="25"/> Play</button>
             <Icon icon="quill:info" color="white" width="35" class="d-block d-md-block d-lg-none"/>
             <button class="btn bg-secondary text-white mx-2 more-info d-none d-md-none d-lg-block"><Icon icon="ic:outline-info" color="white" width="25" style="padding-right: 2px" />More info</button>
          </div>
        </div>
      </div>
      <div class="col-lg-6  col-md-4">
        <div class="jumbotron" style="width: 18rem">
          <img
                :src="getImageUrl(movie.poster_path)"
                :alt="movie.title"
                class="img-fluid d-none d-md-none d-lg-block"
              />
        </div>
      </div>
     </div>
     </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { Icon } from '@iconify/vue'
import { format, intervalToDuration } from 'date-fns';
import navbarVue from './navbar.vue';

export default {
  components: {
    Icon,
    navbarVue
  },

  data() {
    return {
      movie: {},
      backgroundStyle: {},
      movieLoaded: false,
      genres: [],
      isNavbarScrolled: false,
    }
  },
  created() {
    this.fetchGenres();
    this.fetchMovieAndBackground()
    this.updateMovieAndBackground()
    window.addEventListener('scroll', this.handleScroll);
    console.log(this.movieGenres);
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },

   computed: {
    truncatedOverview() {
      const maxLength = 150; // Adjust the maximum number of characters here
      if (this.movie.overview.length > maxLength) {
        return this.movie.overview.slice(0, maxLength) + '...';
      } else {
        return this.movie.overview;
      }
    },

    formattedRuntime() {
      if (this.movie && this.movie.runtime) {
        const { hours, minutes } = intervalToDuration({
          start: 0,
          end: this.movie.runtime * 60 * 1000, // Convert minutes to milliseconds
        });
        return `${hours}h ${minutes}m`;
      }
      return '';
    },

     formattedReleaseDate() {
      const releaseDate = new Date(this.movie.release_date);
      return format(releaseDate, 'EEEE, MMMM d, yyyy');
     
    },

    answer(){
      console.log(this.movieGenres);
    },

    movieGenres() {
      return this.genres
        .filter(genre => this.movie.genre_ids.includes(genre.id))
        .map(genre => genre.name)
        .join(', ');
    },
  },

  methods: {
    fetchMovieAndBackground() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
      const movieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`

      axios
        .get(movieUrl)
        .then((response) => {
          const movies = response.data.results
          const randomIndex = Math.floor(Math.random() * movies.length)
          this.movie = movies[randomIndex]
          this.fetchBackgroundImage()
        })
        .catch((error) => {
          console.error('Error fetching movie:', error)
        })
    },

    fetchGenres() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67';
      const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

      axios.get(genresUrl)
        .then(response => {
          this.genres = response.data.genres;
        })
        .catch(error => {
          console.error('Error fetching genres:', error);
        });
    },


    fetchBackgroundImage() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
      const backdropPath = this.movie.backdrop_path
      const imageUrl = `https://image.tmdb.org/t/p/original${backdropPath}?api_key=${apiKey}`
      this.backgroundStyle = {
        'background-image': `url(${imageUrl})`
    };
     this.movieLoaded = true;
    },


    updateMovieAndBackground() {
      // Update movie and background every 5 minutes
      setInterval(() => {
        this.movieLoaded = false;
        this.fetchMovieAndBackground();
      }, 5 * 6 * 1000);
    },

    getImageUrl(posterPath) {
      if (posterPath) {
        return `https://image.tmdb.org/t/p/w500${posterPath}`
      } else {
        return 'placeholder-image-url.jpg' // Replace with your placeholder image URL
      }
    },

    handleScroll() {
      const scrollPosition = window.scrollY || window.pageYOffset;
      this.isNavbarScrolled = scrollPosition > 0;
    },
  }
}
</script>

<style scoped>


nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  transition: background-color 0.3s;
  z-index: 2;
}

.navbar-scrolled {
  background-color: #000000;
  border-bottom: 1px solid green;
}

nav ul li a {
  color: #e8dddd !important;
  font-size: 12px;
  font-weight: 700;
  padding-right: 35px;
}

nav .navbar-brand {
  color: #21c903;
  font-size: 22px;
  font-weight: 600;
}

.age {
  position: absolute;
  top: 50%;
  right: 0;
  background: #e8dddd85;
  padding: 5px;
  border-left: 3px solid green;
}

.age span {
  font-size: 14px;
  padding-right: 20px;
  color: #ffffff;
  font-weight: 700;
}

.add-list {
  position:fixed;
  top: 50%;
  z-index: 9999 !important;
  right: 0;
  background: #00000085;
  padding: 5px;
  border-left: 3px solid green;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.hero-section {
  position: relative;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
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
  filter: blur(8px); /* Add blur effect */
}


@media screen and (max-width: 990px){
  h1 {
  font-size: 28px !important;
  font-weight: bold;
  margin-bottom: 16px;
  text-transform: uppercase;
  text-align: center !important;
}

.age {
  position: absolute;
  top: 50%;
  right: 0;
  background: #e8dddde6 !important;
  padding: 5px;
  border-left: 3px solid green;
}

p {
  font-size: 12px;
  text-align: left;
  font-weight: 600;
  text-align: center !important;
}
  .hero-section {
  position: relative;
  overflow: hidden;
   height: 60vh;
}
  .hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
 
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: blur(0px); /* Add blur effect */
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.394) !important; /* Add overlay color and opacity */
  z-index: -1;
}
.content {
   margin-top: 20%;
   padding: 20px !important;

}
.tags {
   display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.small-details {
  display: flex;
  justify-content: center;
}

.details-button {
   display: flex;
  justify-content: center;
}

.hero-details {
  position: relative;
  z-index: 0;
  text-align: center;
  color: #fff;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
}

@media screen and (max-width: 480px) {
  .content {
   margin-top: 50% !important;
   padding: 30px !important;
}

p {
  color: #e7e7e7 !important;
}
}


.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.705); /* Add overlay color and opacity */
  z-index: -1;
}

.hero-details {
  position: relative;
  z-index: 0;
  text-align: center;
  color: #fff;
}



.content {
   margin-top: 20%;
   padding: 80px;
}

.content .tags .badge {
  border-radius: 0%;
}

.content .play, .more-info {
  font-weight: 600;
  border-radius: 3px !important;
}

.jumbotron img {
  margin-left: 60%;
  margin-top: 50%;
}

h1, p {
 
}

h1 {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 16px;
  text-transform: uppercase;
  text-align: left;
}

p {
  font-size: 12px;
  text-align: left;
  font-weight: 600;
}
</style>
