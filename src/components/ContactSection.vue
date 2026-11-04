<script setup lang="ts">
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
        <a class="button light" :href="`mailto:${contact.email}`">{{ t.email }}<span aria-hidden="true">↗</span></a>
        <a :href="contact.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a :href="contact.github" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </div>
    </div>
  </section>
  <footer class="wrap site-footer">
    <a class="wordmark" href="#home">ct<span>.</span></a>
    <p>{{ t.footer }}</p>
    <a href="#home" :aria-label="t.top">↑</a>
  </footer>
</template>
