<template>
   <nav class="navbar navbar-expand bg-black" aria-label="Second navbar example" :class="{ navbar: true, scrolled: isScrolled }">
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
          <ul class="navbar-nav mx-auto">
            <span class="navbar-brand mx-auto">Star-Films</span>
          </ul>
          <div class="">
            <Icon icon="akar-icons:search" color="white" width="20" class="head-add mx-3" />

            <router-link class="navbar-brand" to="/"
              ><Icon icon="clarity:user-solid" color="white" width="20" class="head-add "
            /></router-link>
          </div>
        </div>
      </div>
    </nav>


<div class="container-fluid mt-5">
      <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#" style="text-decoration: none; color: inherit"><RouterLink to="/" style="color: #fff">Home</RouterLink></a></li>
        <li class="breadcrumb-item ">category</li>
        <li class="breadcrumb-item active" aria-current="page">Movies</li>
      </ol>
    </nav>
</div>



  <div>
    <div class="container-fluid ">

      <div class="d-flex justify-content-between">
         <h2 class="text-left text-white">All Movies</h2>
           <nav class="page">
              <ul class="pagination pagination-sm">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <a class="page-link" href="#" @click.prevent="fetchPreviousPage"><Icon icon="ooui:previous-ltr" color="white" /></a>
                </li>
                <li class="page-item" v-for="page in paginationRange" :key="page" :class="{ active: page === currentPage }">
                  <a class="page-link" href="#" @click.prevent="fetchMovies(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                  <a class="page-link" href="#" @click.prevent="fetchNextPage"><Icon icon="ooui:previous-rtl" color="white" /></a>
                </li>
              </ul>
            </nav>
      </div>
           
               
           <div ref="videoSection" v-if="videoKey" class="videoContainer">
            
                <iframe
                  :src="'https://www.youtube.com/embed/' + videoKey"
                  class="iframe2"
                  frameborder="0"
                  autoplay
                  allowfullscreen
                ></iframe>
           </div>


      <div class="row g-2">
        <div class="col-3 col-md- 3 col-lg-3" v-for="movie in movies" :key="movie.id"  @click="showMovieVideo(movie.id)">
          <img
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
            class="img-fluid mt-3"
            alt=""
          />
        </div>
      </div>



    </div>
  </div>
  <footer-vue></footer-vue>
</template>

<script>
import axios from 'axios';
import { Icon } from '@iconify/vue';
import FooterVue from '../components/Footer.vue';
export default {
  components: {
    Icon,
    FooterVue
  },
  data() {
    return {    
      genreName: '',
      videoKey: null,
      selectedMovieId: null,
      movies:[],
      currentPage: 1,
      totalPages: null,
       maxVisiblePages: 5
    };
  },
  created() {
    this.fetchGenreName();
    this.fetchMovies(this.currentPage)
    // this.fetchVideos()
  },

   computed: {
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
  methods: {
    fetchGenreName() {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67';
      const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
      const genreId = this.$route.params.id
      console.log(genreId);
      axios
        .get(url)
        .then((response) => {
          const genres = response.data.genres;
          const genre = genres.find((genre) => genre.id === parseInt(genreId));
          this.genreName = genre ? genre.name : 'Unknown Genre';
        })
        .catch((error) => {
          console.error('Error fetching genre name:', error);
        });
    },

    
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
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67';
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
      

      axios.get(url, {
        params: {
          page: page
        }
      })
      .then((response) => {
        this.movies = response.data.results
        this.currentPage = response.data.page;
        this.totalPages = response.data.total_pages;
        if(this.movies.length > 0) {
          this.showMovieVideo(this.movies[0].id)
        }
      })

        .catch((error) => {
          console.error('Error fetching movie:', error);
        });
    },

    showMovieVideo(movieId) {
      this.selectedMovieId = movieId;
      this.fetchVideos(movieId)
      this.scrollToVideoSection()
    },

    scrollToVideoSection(){
      this.$refs.videoSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    },

    fetchVideos(movieId) {
      const apiKey = 'e322ec768a4787f47c3a2896362e2b67'
      const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`

      axios
        .get(url)
        .then((response) => {
          const videos = response.data.results;
          if (videos.length > 0) {
            this.videoKey = videos[0].key
          }
        })
        .catch((error) => {
          console.error('Error fetching movies:', error)
        })
    },

      showMovieDetail(id) {
      return this.$router.push({ path: `/movie/details/${id}`, params: { id } })
    },

    getVideoUrl(videoKey) {
      return `https://www.youtube.com/${videoKey}`
    }
  }
};
</script>

<style scoped>
  .navbar-brand {
    color:  rgb(1, 188, 1);
    font-size: 25px;
    font-weight: 500;
  }

  .navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;

  background-color: transparent; /* Default transparent background */
  transition: background-color 0.3s ease; /* Add transition effect */
  /* Other navbar styles */
}

.scrolled {
  background-color: #000000e1 !important; /* Background color when scrolled */
  /* Additional styles for scrolled navbar */
}
.videoContainer {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}
  iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }


.page-item .active {
  background: red;
}
  h2 {
    font-weight: 600;
  }

  .breadcrumb {
    margin-top: 80px;
  }

  .breadcrumb li {
    color: #d5d2d2;
    font-size: 12px;
    font-weight: 600;
  }

  .page {
    background: none !important;
  }

  .pagination {
    border: 2px solid #fff;
    background: none !important;

  }

  .pagination li {
    background: none !important;
    border: none;
        position: relative;
z-index: 1 !important;
  }

  .pagination li a {
    font-size: 13px;
    border: none !important;
    background: none !important;
    color: #fff
  }
</style>