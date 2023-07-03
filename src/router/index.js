import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,

      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/movie/details/:id',
      name: 'movieDetails',
      component: () => import('../details/movieDetail.vue'),
    },

    {
      path: '/tv/details/:id',
      name: 'tvShowDetails',
      component: () => import('../details/tvShowDetail.vue'),
    },

    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
  ]


})


// const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const removeListener = onAuthStateChanged(getAuth(), (user) => {
//       removeListener();
//       resolve(user)
//     }, reject);

//   })
// }

router.beforeEach(async (to, from, next) => {
  const authenticatedUser = getAuth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if(requiresAuth && !authenticatedUser) {   
    next('login');
  } 
  else next()
})

export default router
