import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/collection',
      name: 'collection',
      component: () => import('@/views/CollectionView.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('@/views/ServiceView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogView.vue')
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('@/views/PostView.vue')
    }
  ]
})

export default router
