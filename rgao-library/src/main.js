// import './assets/main.css'
// import './style.css'
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'


import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.use(createPinia())
app.use(router)
app.mount('#app')
