import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Resgister.vue'
import Ponentes from '../views/Ponentes.vue'
import Presentacion from '../views/Presentacion.vue'
import Ponencias from '../views/Ponencias.vue'
import Horarios from '../views/Horarios.vue'
import Contacto from '../views/Contacto.vue'
import Inscripciones from '../views/Inscripciones.vue'
import Galeria from '../views/Galeria.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Ponentes',
    name: 'Ponentes',
    component: Ponentes
  },
  {
    path: '/Presentacion',
    name: 'Presentacion',
    component: Presentacion
  },
  {
    path: '/Ponencias',
    name: 'Ponencias',
    component: Ponencias
  },
  {
    path: '/Horarios',
    name: 'Horarios',
    component: Horarios
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/Inscripciones',
    name: 'Inscripciones',
    component: Inscripciones
  },
  {
    path: '/Galeria',
    name: 'Galeria',
    component: Galeria
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
