<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage'
import { experiences } from '../content/experience'

const { language, t } = useLanguage()
</script>

<template>
  <section id="experience" class="wrap section">
    <p class="eyebrow">{{ t.labelExp }}</p>
    <h2>{{ t.exp }}</h2>
    <div class="experience-list">
      <article v-for="(job, i) in experiences" :key="job.company" class="experience">
        <div class="experience-index">0{{ i + 1 }}</div>
        <div class="experience-title">
          <h3>
            {{ job.company }}
            <span v-if="job.current" class="current-tag">{{ t.current }}</span>
          </h3>
          <p>{{ job.role[language] }} · {{ job.period[language] }}</p>
          <small>{{ job.domain[language] }}</small>
          <ul class="tags" :aria-label="'Stack ' + job.company">
            <li v-for="tech in job.stack" :key="tech">{{ tech }}</li>
          </ul>
        </div>
        <details :open="i === 0">
          <summary>{{ t.details }}<span aria-hidden="true">+</span></summary>
          <ul class="experience-description">
            <li v-for="item in job.highlights[language]" :key="item">{{ item }}</li>
          </ul>
        </details>
      </article>
    </div>
    <p class="muted earlier">{{ t.earlier }}</p>
  </section>
</template>
