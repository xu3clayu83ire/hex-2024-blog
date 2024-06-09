import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '../views/ServiceView.vue'
import WorksView from '../views/WorksView.vue'

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
    },
    {
      path: '/works',
      name: 'works',
      component: WorksView
    }
  ]
})

export default router
