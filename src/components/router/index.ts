import { createRouter, createWebHistory } from 'vue-router'
import WaterExchangeListVue from '../pages/WaterExchangeList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/content1',
      name: 'content1',
      component: WaterExchangeListVue
    },
  ]
})

export default router