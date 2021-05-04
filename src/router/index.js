import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Experiences from '../views/Experiences.vue'
import Contact from '../views/Contact.vue'
import Tarifs from '../views/Tarifs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/experiences',
    name: 'Experiences',
    component: Experiences
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/tarifs',
    name: 'Tarifs',
    component: Tarifs
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

const router = new VueRouter({
  routes
})

export default router
