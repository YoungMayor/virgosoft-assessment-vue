import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/draw/:id',
      name: 'draw-detail',
      component: () => import('../views/DrawDetailView.vue'),
    },
  ],
})

export default router
