import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '@/components/Portfolio.vue'
import IndividualPage from '@/components/IndividualPage.vue'
import AboutPage from '@/components/AboutPage.vue'
import ContactPage from '@/components/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Portfolio,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage,
  },
  {
    path: '/:section(games|translations|mods|collaborations|tools)',
    name: 'Section',
    component: Portfolio,
    props: true,
  },
  {
    path: '/:category/:subcategory/:itemId',
    name: 'IndividualPageSub',
    component: IndividualPage,
    props: true,
  },
  {
    path: '/:category/:itemId',
    name: 'IndividualPage',
    component: IndividualPage,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
