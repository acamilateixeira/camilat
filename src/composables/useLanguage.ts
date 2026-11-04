import { computed, ref, watchEffect } from 'vue'
import { copy } from '../content/copy'
import type { Language } from '../content/types'

const STORAGE_KEY = 'portfolio-language'

function readStored(): Language | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === 'pt' || value === 'en' ? value : null
  } catch {
    return null // modo privado ou storage bloqueado
  }
}

function detect(): Language {
  return readStored() ?? (navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en')
}

// Estado compartilhado entre componentes (singleton do módulo).
const language = ref<Language>(typeof window === 'undefined' ? 'pt' : detect())

watchEffect(() => {
  if (typeof document === 'undefined') return
  document.documentElement.lang = language.value === 'pt' ? 'pt-BR' : 'en'
  try {
    window.localStorage.setItem(STORAGE_KEY, language.value)
  } catch {
    // preferência é opcional
  }
})

export function useLanguage() {
  const t = computed(() => copy[language.value])

  function setLanguage(next: Language) {
    language.value = next
  }

  return { language, t, setLanguage }
}
