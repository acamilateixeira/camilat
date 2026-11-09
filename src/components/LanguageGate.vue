<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { browserLanguage, useLanguage } from '../composables/useLanguage'
import type { Language } from '../content/types'

const { setLanguage } = useLanguage()

const options: { lang: Language; htmlLang: string; label: string; hint: string }[] = [
  { lang: 'pt', htmlLang: 'pt-BR', label: 'Português', hint: 'Ver o portfólio em português' },
  { lang: 'en', htmlLang: 'en', label: 'English', hint: 'View the portfolio in English' },
]

const buttons = ref<HTMLButtonElement[]>([])

onMounted(() => {
  const suggested = options.findIndex((option) => option.lang === browserLanguage())
  buttons.value[suggested]?.focus()
})
</script>

<template>
  <main class="language-gate" aria-labelledby="language-gate-title">
    <div class="language-gate-card">
      <p class="language-gate-name">camila<span> /</span></p>
      <h1 id="language-gate-title">
        <span lang="pt-BR">Escolha o idioma</span>
        <span class="language-gate-divider" aria-hidden="true">·</span>
        <span lang="en">Choose your language</span>
      </h1>
      <div class="language-gate-options">
        <button
          v-for="option in options"
          :key="option.lang"
          ref="buttons"
          type="button"
          :lang="option.htmlLang"
          :data-lang="option.lang"
          @click="setLanguage(option.lang)"
        >
          <strong>{{ option.label }}</strong>
          <small>{{ option.hint }}</small>
        </button>
      </div>
    </div>
  </main>
</template>
