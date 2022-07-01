import { createRouter, createWebHistory } from 'vue-router'
import Inicio from './components/Inicio.vue'
import Detalle from './components/Detalle.vue'
import NotFound from './components/NotFound.vue'


const routes = [{
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/',
        name: 'inicio',
        component: Inicio
    },
    {
        path: '/detalle',
        name: 'detalle',
        component: Detalle
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
// export default new Router({})