import { createRouter, createWebHistory } from 'vue-router'
import Portfolio      from '@/components/Portfolio.vue'
import IndividualPage from '@/components/IndividualPage.vue'
import About          from '@/components/About.vue'
import Contact        from '@/components/Contact.vue'

const routes = [
  // Home
  {
    path: '/',
    name: 'Home',
    component: Portfolio
  },
  // Páginas estáticas
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  // Listados de sección: /games, /mods, /translations, etc.
  {
    path: '/:section(games|translations|mods|collaborations|tools)',
    name: 'Section',
    component: Portfolio,
    props: true
  },
  // Página individual con subcategoría (ej. /games/pc/kh-tears)
  {
    path: '/:category/:subcategory/:itemId',
    name: 'IndividualPageSub',
    component: IndividualPage,
    props: true
  },
  // Página individual sin subcategoría (ej. /mods/kh2-spanish-mix)
  {
    path: '/:category/:itemId',
    name: 'IndividualPage',
    component: IndividualPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
