<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage'
import { skills } from '../content/copy'

const { language, t } = useLanguage()
</script>

<template>
  <section id="stack" class="wrap section">
    <p class="eyebrow">{{ t.labelSkills }}</p>
    <h2>{{ t.skills }}</h2>
    <div class="skills-grid">
      <div v-for="group in skills" :key="group.title.en" class="skill-group">
        <h3>{{ group.title[language] }}</h3>
        <ul>
          <li v-for="skill in group.items" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
    <div class="education">
      <h3>{{ t.education }}</h3>
      <div>
        <ul>
          <li v-for="degree in t.degrees" :key="degree">{{ degree }}</li>
        </ul>
        <p>{{ t.training }}</p>
      </div>
    </div>
  </section>
</template>
