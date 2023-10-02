import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'
import { setupCalendar } from 'v-calendar';

Vue.use(VueAxios, axios)

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:3001';

createApp(App).use(store).use(router).use(plugin, defaultConfig).use(setupCalendar, {}).mount('#app')
