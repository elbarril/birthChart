import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/:user?',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: function () {
      return import('@/views/Login.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('@/views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
