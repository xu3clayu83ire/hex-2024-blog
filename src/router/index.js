import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '../views/ServiceView.vue'

const router = createRouter({
  //history: createWebHistory('/hex-2024-camp/'),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: HomeView
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView
    }
  ]
})

export default router
