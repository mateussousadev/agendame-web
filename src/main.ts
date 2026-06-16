/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Composables
import { createApp } from 'vue'

// Components
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueTablerIcons from 'vue-tabler-icons'
import '@/scss/style.scss';


// Styles
import 'unfonts.css'
import './styles/tailwind.css'
import './styles/main.scss'

const app = createApp(App)

app
.use(router)
.use(vuetify)
.use(VueTablerIcons)
.mount('#app')
