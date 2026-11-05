<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import { contact } from '../content/copy'
import { projects } from '../content/projects'

const { language, t } = useLanguage()
const featured = computed(() => projects.filter((p) => p.featured))
const others = computed(() => projects.filter((p) => !p.featured))
const repoUrl = (repo: string) => `${contact.github}/${repo}`
const symbols = ['{ }', '↗', '</>']
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="wrap section">
      <p class="eyebrow">{{ t.labelProjects }}</p>
      <h2>{{ t.projects }}</h2>
      <p class="section-intro">{{ t.projectNote }}</p>

      <article v-for="(project, i) in featured" :key="project.repo" class="project-card featured" data-test="featured-project">
        <div :class="['project-art', 'art-featured', `art-featured-${i}`]">
          <span class="project-number">{{ t.featured }}</span>
          <span class="project-symbol" aria-hidden="true">{{ project.symbol ?? '⇄' }}</span>
          <span class="project-type">{{ project.type }}</span>
        </div>
        <div class="project-body">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description[language] }}</p>
          <ul v-if="project.highlights" class="project-highlights">
            <li v-for="item in project.highlights[language]" :key="item">{{ item }}</li>
          </ul>
          <p class="project-stack">{{ project.stack }}</p>
          <a :href="repoUrl(project.repo)" target="_blank" rel="noopener noreferrer">
            {{ t.source }}<span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>

      <div v-if="others.length" class="project-grid">
        <article v-for="(project, i) in others" :key="project.repo" class="project-card">
          <div :class="['project-art', `art-${i}`]">
            <span class="project-number">/ 0{{ i + featured.length + 1 }}</span>
            <span class="project-symbol" aria-hidden="true">{{ symbols[i % 3] }}</span>
            <span class="project-type">{{ project.type }}</span>
          </div>
          <div class="project-body">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description[language] }}</p>
            <p class="project-stack">{{ project.stack }}</p>
            <a :href="repoUrl(project.repo)" target="_blank" rel="noopener noreferrer">
              {{ t.source }}<span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </div>

      <a class="text-link" :href="`${contact.github}?tab=repositories`" target="_blank" rel="noopener noreferrer">
        {{ t.all }} <span aria-hidden="true">↗</span>
      </a>
    </div>
  </section>
</template>
