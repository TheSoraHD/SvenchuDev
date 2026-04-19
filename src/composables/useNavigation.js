import { ref, computed } from 'vue'
import { sectionsData, individualPages } from '../data/sectionsData.js'

// Estado global de navegación
const currentPage = ref('home')
const navigationHistory = ref(['home'])

export function useNavigation() {
  // Computed para obtener el contenido de la página actual
  const currentPageData = computed(() => {
    if (currentPage.value === 'home') {
      return {
        type: 'home',
        data: sectionsData
      }
    }
    
    if (individualPages[currentPage.value]) {
      return {
        type: 'individual',
        data: individualPages[currentPage.value]
      }
    }
    
    return {
      type: 'notfound',
      data: null
    }
  })

  // Función para navegar a una página
  const navigateTo = (pagePath) => {
    if (pagePath !== currentPage.value) {
      // Añadir a historial si no es la misma página
      if (navigationHistory.value[navigationHistory.value.length - 1] !== pagePath) {
        navigationHistory.value.push(pagePath)
      }
      currentPage.value = pagePath
      
      // Actualizar URL sin recargar (opcional)
      if (window.history && window.history.pushState) {
        window.history.pushState({ page: pagePath }, '', `#${pagePath}`)
      }
    }
  }

  // Función para volver atrás
  const goBack = () => {
    if (navigationHistory.value.length > 1) {
      navigationHistory.value.pop() // Quitar página actual
      const previousPage = navigationHistory.value[navigationHistory.value.length - 1]
      currentPage.value = previousPage
      
      // Actualizar URL
      if (window.history && window.history.pushState) {
        window.history.pushState({ page: previousPage }, '', `#${previousPage}`)
      }
    }
  }

  // Función para ir al home
  const goHome = () => {
    navigateTo('home')
  }

  // Función para obtener el breadcrumb
  const getBreadcrumb = computed(() => {
    if (currentPage.value === 'home') {
      return [{ label: 'Home', path: 'home' }]
    }
    
    const pageData = individualPages[currentPage.value]
    if (!pageData) {
      return [{ label: 'Home', path: 'home' }, { label: '404', path: currentPage.value }]
    }
    
    const breadcrumb = [{ label: 'Home', path: 'home' }]
    
    // Añadir categoría
    breadcrumb.push({ 
      label: pageData.category, 
      path: 'home' // Podríamos crear páginas de categoría si quisiéramos
    })
    
    // Añadir subcategoría si existe
    if (pageData.subcategory) {
      breadcrumb.push({ 
        label: pageData.subcategory, 
        path: 'home' 
      })
    }
    
    // Añadir página actual
    breadcrumb.push({ 
      label: pageData.title, 
      path: currentPage.value 
    })
    
    return breadcrumb
  })

  // Función para generar enlaces a páginas individuales
  const generatePageLink = (category, subcategory, itemId) => {
    if (subcategory) {
      return `${category.toLowerCase()}/${subcategory.toLowerCase()}/${itemId}`
    }
    return `${category.toLowerCase()}/${itemId}`
  }

  // Función para verificar si una página existe
  const pageExists = (pagePath) => {
    return pagePath === 'home' || !!individualPages[pagePath]
  }

  // Inicializar desde URL si existe hash
  const initializeFromURL = () => {
    const hash = window.location.hash.substring(1) // Quitar el #
    if (hash && pageExists(hash)) {
      currentPage.value = hash
      navigationHistory.value = ['home', hash]
    }
  }

  // Escuchar cambios en el historial del navegador
  const setupHistoryListener = () => {
    window.addEventListener('popstate', (event) => {
      if (event.state && event.state.page) {
        currentPage.value = event.state.page
        // Actualizar historial de navegación
        const index = navigationHistory.value.indexOf(event.state.page)
        if (index !== -1) {
          navigationHistory.value = navigationHistory.value.slice(0, index + 1)
        }
      }
    })
  }

  return {
    currentPage: computed(() => currentPage.value),
    currentPageData,
    navigationHistory: computed(() => navigationHistory.value),
    getBreadcrumb,
    navigateTo,
    goBack,
    goHome,
    generatePageLink,
    pageExists,
    initializeFromURL,
    setupHistoryListener
  }
}