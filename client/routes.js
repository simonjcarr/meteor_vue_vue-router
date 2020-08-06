import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import About from './components/About.vue'
import Hobbies from './components/Hobbies.vue'

const routes = [
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/hobbies",
    name: 'Hobbies',
    component: Hobbies
  }
]

const router = new VueRouter({
  routes
})

export default router