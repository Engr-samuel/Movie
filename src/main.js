import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { auth } from './firebase'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Notifications from '@kyvg/vue3-notification'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(auth)
app.use(Notifications)
app.mount('#app')
