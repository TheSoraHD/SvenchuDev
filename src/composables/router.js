import {createRouter, createWebHistory} from 'vue-router'
import Portfolio from '@/components/Portfolio.vue'
import IndividualPage from '@/components/IndividualPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Portfolio
  },
  {
    path: '/:category/:subcategory?/:itemId',
    name: 'IndividualPage',
    component: IndividualPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router