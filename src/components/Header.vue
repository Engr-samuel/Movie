<template>
 <div class="hero d-none d-md-none d-lg-block" :style="{ backgroundImage: 'url(' + randomBackdropPath + ')' }">
  <div class="overlay"></div>
      <nav class="navbar navbar-expand-lg navbar-dark py-3 d-none d-md-none d-lg-block border-danger border-bottom " aria-label="Second navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">STAR-FILMS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample02">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">Action</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Comedy</a>
          </li>
            <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Romance</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Drama</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="#">Tv Shows</a>
          </li>
        </ul>
        <form role="search">
          <!-- <span class="pb-2 myaccount">MyAccount</span> -->
          <!-- <button class="btn login"><span class="mb-5"><Icon icon="carbon:user" /> Login</span></button> -->
        </form>
      </div>
    </div>
  </nav>

    <nav class="navbar navbar-expand navbar-dark py-1 d-block d-md-block d-lg-none" aria-label="Second navbar example">
    <div class="container">
     <Icon icon="ri:menu-line" color="white" width="25"/> <a class="navbar-brand" href="#">STAR-FILMS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample02">
         <ul class="navbar-nav me-auto">
          <!-- <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">Action</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Comedy</a>
          </li>
            <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Romance</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Drama</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="#">Tv Shows</a>
          </li> -->
        </ul> 
        <form role="search">
          <Icon icon="tabler:heart" color="white" width="25" style="margin-right: 15px" />
         <Icon icon="carbon:user" width="25" color="white" />
        </form>
      </div>
    </div>
  </nav>
   <div class="content">


  <div v-if="randomMovie" class="container d-none d-md-block d-lg-block">
     <div class="inside container" >
       <div class="row">
        <div class="col-lg-7 col-12">
          <span>
            <Icon icon="bi:star-fill" color="gold" class="mb-2" />
          <span style="padding-top: 20px;">{{ randomVote}}</span></span>
          <h1 class="title">{{ randomMovie }}</h1>
       <p class="overview">{{ randomOverview }}</p>

       <div class="button">
       <button class="btn bg-white text-black px-4" style=" font-weight: 600; border-radius: 4px"> <Icon icon="ion:play-sharp" color="black" width="20" /> Play</button>

       <button class="btn bg-secondary text-black px-4" style=" font-weight: 600; border-radius: 4px; margin-left: 10px"> <Icon icon="ic:outline-info" color="black" width="20" /> More info</button>
       </div>
        </div>
       </div>
     </div>
  </div>

    <div v-if="randomMovie" class="d-block d-md-none d-lg-none" >
     <div class="insider" >
          <!-- <h1 class="title text-center">{{ randomMovie }}</h1> -->
       <div class="button text-center">
       <button class="btn bg-white text-black px-4" style=" font-weight: 600; border-radius: 4px"> <Icon icon="ion:play-sharp" color="black" width="20" /> Play</button>

       <button class="btn bg-secondary text-black px-4" style=" font-weight: 600; border-radius: 4px; margin-left: 10px"> <Icon icon="ic:outline-info" color="black" width="20" /> More info</button>
       </div>
     </div>
  </div>
    <div v-else class="container mt-5">
      Loading movie details...
    </div>
   </div>
 </div>


<div class="hero-mobile d-block d-md-none d-lg-none" :style="{ backgroundImage: 'url(' + randomBackdropPath + ')' }">
  <div class="overlay"></div>
   <nav class="navbar navbar-expand navbar-dark py-1 d-block d-md-block d-lg-none" aria-label="Second navbar example">
    <div class="container">
     <Icon icon="ri:menu-line" color="white" width="25"/> <a class="navbar-brand" href="#">STAR-FILMS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample02">
         <ul class="navbar-nav me-auto">
          <!-- <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">Action</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Comedy</a>
          </li>
            <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Romance</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Drama</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="#">Tv Shows</a>
          </li> -->
        </ul> 
        <form role="search">
          <Icon icon="uil:search" color="white" width="25" style="margin-right: 15px" />
         <Icon icon="carbon:user" width="25" color="white" />
        </form>
      </div>
    </div>
  </nav>
  <div class="content">
    
  <div class="d" style="padding: 20px; padding-right: 35px; padding-bottom: 0px">
      <h1>{{randomMovie }}</h1>
    <p style="font-size: 14px"> <Icon icon="bi:star-fill" color="gold" class="mb-2" /> {{ randomVote }}</p>
  </div>

    <div class="d-flex justify-content-around">
      <span class="text-center"> 
        <Icon icon="gala:add" color="white" />
        <!-- <small style="font-size: 14px; padding-left:2px">My list</small> -->
      </span>
      <button class="btn bg-white text-dark text-center" style="font-weight: 600; width:30%" ><Icon icon="solar:play-bold" /> Play</button>
      <span><Icon icon="material-symbols:info-outline" color="white" /></span>

    </div>
  </div>
</div>
  




<!-- <div class="search container">
  <div class="search-box">
    <div class="search-field">
      <input placeholder="Search..." class="input" type="text">
      <div class="search-box-icon">
        <button class="btn-icon-content">
          <i class="search-icon">
            <svg xmlns="://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#fff"></path></svg>
          </i>
        </button>
      </div>
    </div>
  </div>
</div> -->
  
</template>

<script>


import {Icon} from '@iconify/vue'
import axios from 'axios'

export default {

  data(){
    return {
      movies: [],
      genres: [],
       randomBackdropPath: '',
        randomMovie: '',
        randomOverview:'',
        randomVote:'',
        randomStudio:''
    }
  },
  components: {
    Icon
  },

  mounted(){
    this.fetchMovies()
  }
  ,

  computed: {
        formattedRuntime() {
      const hours = Math.floor(this.movies.runtime / 60)
      const minutes = this.movies.runtime % 60
      return `${hours}h ${minutes}m`
    },

    function(){
      console.log(this.genres)
    }
  },

  methods: {
        setRandomBackdrop() {
      // Select a random movie from the 'movies' array
      const randomMovieIndex = Math.floor(Math.random() * this.movies.length);
      // const randomStudioIndex = Math.floor(Math.random() * this.studios.length);
      const randomMovie = this.movies[randomMovieIndex];
      // const randomStudios = this.studios[randomStudioIndex];

      // Use the 'backdrop_path' of the selected movie as the background image
      this.randomBackdropPath = 'https://image.tmdb.org/t/p/original' + randomMovie.backdrop_path;
      this.randomMovie = randomMovie.original_title;
      this.randomOverview = randomMovie.overview;
      this.formattedRuntime = randomMovie.runtime;
      this.randomVote = randomMovie.vote_average;
    },

        fetchMovies() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`

      axios
        .get(url)
        .then((response) => {
          this.movies = response.data.results;
          this.genres = response.data.results.genres;
          console.log(this.genres);
          // this.studios = response.data.results.production_companies;
          this.setRandomBackdrop();
        })
        .catch((error) => {
          console.error('Error fetching movies:', error)
        })
    },

  }
}
</script>

<style scoped>

nav {
  background: #000000b9;
  position: relative;
  z-index: 2;
}

.login{
  outline: 2px solid red;
  padding: 5px 25px !important;
  color: aliceblue !important;
}

.nav-link {
  font-size: 15px !important;
  font-weight: 600;
}
.myaccount {
  padding-right: 20px;
   font-size: 15px !important;
  font-weight: 600;
  margin-bottom: 5px;
}

.navbar-brand {
  font-size: 25px !important;
  font-weight: 600;
  color: red !important;
}




.hero {
  height: 500px;
  background-size: cover;
  background-position: center;
  color: #fff;
  font-family: Arial, sans-serif;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  position: relative;
}

@media only screen and (min-width: 600px){
  .hero {
  height: 500px;
  background-size: cover;
  background-position: center;
  color: #fff;
  font-family: Arial, sans-serif;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  position: relative;
}

.overview {
  font-size: 11px !important;
  font-weight: 500;
}
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Adjust the opacity as needed */
  z-index: 1;
}
.content {
  position: absolute;
  bottom: 0;
  z-index: 2;
  padding: 40px;
}


.search {
  --input-line: #cccccc;
  --input-text-color: #808080;
  --input-text-hover-color: transparent;
  --input-border-color: #808080;
  --input-border-hover-color: #999999;
  --input-bg-color: #333333;
  --search-max-width: 100%;
  --search-min-width: 150px;
  --border-radius: 5px;
  --transition-cubic-bezier: 150ms cubic-bezier(0.4,0,0.2,1);
}

.search-box {
  max-width: var(--search-max-width);
  min-width: var(--search-min-width);
  height: 35px;
  border: 1px solid var(--input-border-color);
  border-radius: var(--border-radius);
  padding: 5px 15px;
  background: var(--input-bg-color);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  transition: var(--transition-cubic-bezier);
}

.search-box:hover {
  border-color: var(--input-border-hover-color);
}

/*Section input*/
.search-field {
  position: relative;
  width: 100%;
  height: 100%;
  left: -5px;
  border: 0;
}

.input {
  width: calc(100% - 29px);
  height: 100%;
  border: 0;
  border-color: transparent;
  font-size: 1rem;
  padding-right: 0px;
  color: var(--input-line);
  background: var(--input-bg-color);
  border-right: 2px solid var(--input-border-color);
  outline: none;
}

.input::-webkit-input-placeholder {
  color: var(--input-text-color);
}

.input::-moz-input-placeholder {
  color: var(--input-text-color);
}

.input::-ms-input-placeholder {
  color: var(--input-text-color);
}

.input:focus::-webkit-input-placeholder {
  color: var(--input-text-hover-color);
}

.input:focus::-moz-input-placeholder {
  color: var(--input-text-hover-color);
}

.input:focus::-ms-input-placeholder {
  color: var(--input-text-hover-color);
}

/*Search button*/
.search-box-icon {
  width: 52px;
  height: 35px;
  position: absolute;
  top: -6px;
  right: -21px;
  background: transparent;
  border-bottom-right-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  transition: var(--transition-cubic-bezier);
}

.search-box-icon:hover {
  background: var(--input-border-color);
}

.btn-icon-content {
  width: 52px;
  height: 35px;
  top: -6px;
  right: -21px;
  background: transparent;
  border: none;
  cursor: pointer;
  border-bottom-right-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  transition: var(--transition-cubic-bezier);
  opacity: .4;
}

.btn-icon-content:hover {
  opacity: .8;
}

.search-icon {
  width: 21px;
  height: 21px;
  position: absolute;
  top: 7px;
  right: 15px;
}


.inside {
  position: relative;
  bottom: 0;
}

.title {
  font-weight: 600;
  font-size: 60px;
}

.overview {
  font-size: 15px;
  font-weight: 600;
}



@media screen and (max-width: 480px) {
  .title {
  font-weight: 600;
  font-size: 40px !important;
}

.overview {
  font-size: 12px;
  font-weight: 600;
}

.content {
  position: absolute;
  bottom: 0;
  z-index: 2;
  padding: 20px;
  padding-right: 0px;
}
}

  .hero-mobile {
  height: 350px;
  background-size: cover;
  background-position: center;
  color: #fff;
  font-family: Arial, sans-serif;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  position: relative;
}


</style>