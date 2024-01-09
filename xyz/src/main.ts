import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './language'

const app = createApp(App)

app.use(router).use(i18n).mount('#app')