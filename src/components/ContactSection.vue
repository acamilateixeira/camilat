<script setup lang="ts">
import AppIcon from './AppIcon.vue'
import { useLanguage } from '../composables/useLanguage'
import { contact } from '../content/copy'

const { t } = useLanguage()
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="wrap">
      <p class="eyebrow">{{ t.labelContact }}</p>
      <h2>{{ t.contact }}</h2>
      <p>{{ t.contactText }}</p>
      <div class="contact-actions">
        <a class="button light" :href="`mailto:${contact.email}`">{{ t.email }}<AppIcon name="arrow-up-right" /></a>
        <a :href="contact.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn <AppIcon name="arrow-up-right" /></a>
        <a :href="contact.github" target="_blank" rel="noopener noreferrer">GitHub <AppIcon name="arrow-up-right" /></a>
      </div>
    </div>
  </section>
  <footer class="wrap site-footer">
    <a class="wordmark" href="#home">ct<span>.</span></a>
    <p>{{ t.footer }}</p>
    <a href="#home" :aria-label="t.top"><AppIcon name="arrow-up" /></a>
  </footer>
</template>
