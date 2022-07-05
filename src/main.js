import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import VueMeta from 'vue-meta'


createApp(App).use(VueMeta).use(router).mount('#app')