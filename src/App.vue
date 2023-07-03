<script >
import { RouterLink, RouterView } from 'vue-router'
// import {onBeforeMount, useStore} from 'vue'
// import {useStore} from 'vuex'
// export default {
//   setup() {
//     const stores = useStore()

//     onBeforeMount(() => {
//       stores.dispatch('fetchUser')
//     })

//     // return {
//     //   user: store.state.user
//     // }
//   }
// }
</script>

<template>
<!-- 
<div id="nav" v-if="$store.state.user">
<button @click="$store.dispatch('logout')">Logout</button>
</div> -->
  <RouterView />
</template>

<style scoped>

</style>
