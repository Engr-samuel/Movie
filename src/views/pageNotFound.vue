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
    <Header />
    <div class="container">
        <h1>PAGE NOT FOUND</h1>
    </div>
    <FooterVue/>
  </main>
</template>
