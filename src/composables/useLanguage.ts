import { computed, ref, watchEffect } from 'vue'
import { copy } from '../content/copy'
import type { Language } from '../content/types'

const STORAGE_KEY = 'portfolio-language'

function isLanguage(value: unknown): value is Language {
  return value === 'pt' || value === 'en'
}

function readStored(): Language | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return isLanguage(value) ? value : null
  } catch {
    return null // modo privado ou storage bloqueado
  }
}

/** `?lang=pt` ou `?lang=en` na URL: o link já diz o idioma e pula a escolha. */
function readUrl(): Language | null {
  try {
    const value = new URLSearchParams(window.location.search).get('lang')
    return isLanguage(value) ? value : null
  } catch {
    return null
  }
}

/** Só sugere qual botão recebe o foco na tela de escolha. */
export function browserLanguage(): Language {
  if (typeof navigator === 'undefined') return 'pt'
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

const initial = typeof window === 'undefined' ? null : (readUrl() ?? readStored())

// Estado compartilhado entre componentes (singleton do módulo).
const language = ref<Language>(initial ?? browserLanguage())
// Enquanto a pessoa não escolher (ou o link não trouxer ?lang=), o site mostra só a escolha de idioma.
const chosen = ref(initial !== null)

watchEffect(() => {
  if (typeof document === 'undefined') return
  document.documentElement.lang = language.value === 'pt' ? 'pt-BR' : 'en'
  if (!chosen.value) return
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
    chosen.value = true
  }

  return { language, chosen, t, setLanguage }
}
