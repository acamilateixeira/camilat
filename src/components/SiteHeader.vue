<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage'
import type { Language } from '../content/types'

const { language, t, setLanguage } = useLanguage()
const sections = ['experience', 'projects', 'stack', 'contact']
const languages: Language[] = ['pt', 'en']
</script>

<template>
  <header class="site-header wrap">
    <a class="wordmark" href="#home" aria-label="Camila Teixeira">camila<span> /</span></a>
    <nav :aria-label="t.navLabel">
      <a v-for="(id, i) in sections" :key="id" :href="`#${id}`">{{ t.nav[i] }}</a>
    </nav>
    <div class="language-switch" role="group" :aria-label="t.language">
      <button
        v-for="lang in languages"
        :key="lang"
        type="button"
        :aria-pressed="language === lang"
        @click="setLanguage(lang)"
      >
        {{ lang.toUpperCase() }}
      </button>
    </div>
  </header>
</template>
