<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import { resumes } from '../content/copy'

const { language, t } = useLanguage()
const base = import.meta.env.BASE_URL
const resumeHref = computed(() => base + resumes[language.value])
const resumeName = computed(() => `Camila_Teixeira_CV_${language.value.toUpperCase()}.pdf`)
</script>

<template>
  <section id="home" class="hero wrap">
    <div class="hero-content">
      <p class="eyebrow"><span class="red-dot" />{{ t.eyebrow }}</p>
      <h1>{{ t.titleTop }}<br /><em>{{ t.titleBottom }}</em></h1>
      <p class="hero-intro">{{ t.intro }}</p>
      <div class="hero-actions">
        <a class="button primary" href="#projects">{{ t.view }}<span aria-hidden="true">↗</span></a>
        <a class="button quiet" :href="resumeHref" :download="resumeName">{{ t.cv }}<span aria-hidden="true">↓</span></a>
      </div>
      <p class="location"><span aria-hidden="true">◎</span> {{ t.location }}</p>
    </div>
    <div class="portrait-card">
      <span class="portrait-cross" aria-hidden="true">+</span>
      <img :src="`${base}img/camila.jpg`" alt="Camila Teixeira" width="800" height="800" />
      <div class="portrait-caption">
        <span>Camila Teixeira</span>
        <small>Software Engineer · PHP/Laravel</small>
      </div>
      <span class="portrait-tag" aria-hidden="true">BUILD. CONNECT. EVOLVE.</span>
    </div>
  </section>

  <div class="stack-ribbon">
    <div class="wrap">
      <template v-for="(item, i) in t.ribbon" :key="item">
        <span v-if="i > 0" aria-hidden="true">+</span>{{ item }}
      </template>
    </div>
  </div>

  <section class="wrap principles" :aria-label="t.aboutTitle">
    <h2>{{ t.aboutTitle }}</h2>
    <div class="principles-grid">
      <article v-for="item in t.principles" :key="item.title">
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </article>
    </div>
  </section>
</template>
