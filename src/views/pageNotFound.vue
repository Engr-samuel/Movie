<script>
import FooterVue from '../components/Footer.vue';
import Header from "../components/Header.vue";

 export default {
  components: {
    Header,
    FooterVue
  }
 }
</script>

<template>
  <main>

    <div class="container text-white">
        <h1>PAGE NOT FOUND</h1>
       <RouterLink to="/">Home</RouterLink>
    </div>
    <FooterVue/>
  </main>
</template>
