import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '../views/ServiceView.vue'
import WorksView from '../views/WorksView.vue'
import BlogView from '@/views/BlogView.vue'
import BlogContentView from '@/views/BlogContentView.vue'

const router = createRouter({
  //history: createWebHistory('/hex-2024-camp/'),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/index',
      name: 'index',
      component: HomeView
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView
    },
    {
      path: '/works',
      name: 'works',
      component: WorksView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/blogContent',
      name: 'blogContent',
      component: BlogContentView
    }
  ]
})

export default router
