<template>
   <nav class="navbar navbar-expand " :class="{ 'navbar-scrolled': isNavbarScrolled }">
      <div class="container-fluid px-4">
        <a class="navbar-brand" href="#"><RouterLink to="/" style="text-decoration: none; color: inherit">MOVIEVERSE</RouterLink></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-none d-md-flex d-lg-flex">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">TvShows</a>
            </li>

             <li class="nav-item">
              <a class="nav-link" href="#">Movies</a>
            </li>

             <li class="nav-item">
              <a class="nav-link" href="#">News & Popular</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="#">My List</a>
            </li>
          </ul>
          <form class="d-flex ms-auto" role="search">
           <div class="icon d-flex">
            <Icon icon="tabler:search" color="white" width="20" />
            <Icon icon="carbon:notification" color="white" class="mx-4" width="20" />
            <Icon icon="solar:user-broken" color="white" width="20" />
           </div>
          </form>
        </div>
      </div>
    </nav>
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
    components:{Icon, },
    data() {
        return {isNavbarScrolled: false, }
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },

    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
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

</style>