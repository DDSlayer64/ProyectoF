import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

//createApp(App).use(router).mount('#app')
const aplicacion = createApp(App)
aplicacion.use(router)
aplicacion.mount('#app')