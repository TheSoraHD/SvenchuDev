import { ref } from 'vue'

const locale = ref(localStorage.getItem('locale') || 'en')

export function useLanguage() {
  function setLocale(lang) {
    locale.value = lang
    localStorage.setItem('locale', lang)
  }

  // Resuelve un campo { en, es } o devuelve el valor directamente si es string
  function t(field) {
    if (field && typeof field === 'object' && ('en' in field || 'es' in field)) {
      return field[locale.value] ?? field.en
    }
    return field
  }

  return { locale, setLocale, t }
}
