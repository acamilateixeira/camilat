<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import { contact } from '../content/copy'
import { projects } from '../content/projects'

const { language, t } = useLanguage()
const featured = computed(() => projects.filter((p) => p.featured))
const others = computed(() => projects.filter((p) => !p.featured))
const assetBase = import.meta.env.BASE_URL
const repoUrl = (repo: string) => `${contact.github}/${repo}`
const symbols = ['{ }', '↗', '</>']
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="wrap section">
      <p class="eyebrow">{{ t.labelProjects }}</p>
      <h2>{{ t.projects }}</h2>
      <p class="section-intro">{{ t.projectNote }}</p>

      <article v-for="project in featured" :id="project.id" :key="project.id" class="project-card featured" data-test="featured-project">
        <div :class="['project-art', 'art-featured', `art-featured-${project.id}`]">
          <span class="project-number">{{ t.featured }}</span>
          <figure v-if="project.diagram" class="project-diagram">
            <img :src="assetBase + project.diagram.file" :alt="project.diagram.alt[language]" width="360" height="260" loading="lazy">
            <figcaption>{{ t.diagram }}</figcaption>
          </figure>
          <span v-else class="project-symbol" aria-hidden="true">{{ project.symbol ?? '⇄' }}</span>
          <span class="project-type">{{ project.type }}</span>
        </div>
        <div class="project-body">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description[language] }}</p>
          <ul v-if="project.highlights" class="project-highlights">
            <li v-for="item in project.highlights[language]" :key="item">{{ item }}</li>
          </ul>
          <p class="project-stack">{{ project.stack }}</p>
          <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" data-test="project-demo">
            {{ t.demo }}<span aria-hidden="true">↗</span>
          </a>
          <a v-if="project.repo" :class="{ 'link-after': project.demo }" :href="repoUrl(project.repo)" target="_blank" rel="noopener noreferrer" data-test="project-repo">
            {{ t.source }}<span aria-hidden="true">↗</span>
          </a>
          <p v-else class="project-availability">{{ t.privateProject }}</p>
        </div>
      </article>

      <div v-if="others.length" class="project-grid">
        <article v-for="(project, i) in others" :id="project.id" :key="project.id" class="project-card">
          <div :class="['project-art', `art-${i}`]">
            <span class="project-number">/ 0{{ i + featured.length + 1 }}</span>
            <span class="project-symbol" aria-hidden="true">{{ symbols[i % 3] }}</span>
            <span class="project-type">{{ project.type }}</span>
          </div>
          <div class="project-body">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description[language] }}</p>
            <p class="project-stack">{{ project.stack }}</p>
            <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" data-test="project-demo">
              {{ t.demo }}<span aria-hidden="true">↗</span>
            </a>
            <a v-if="project.repo" :class="{ 'link-after': project.demo }" :href="repoUrl(project.repo)" target="_blank" rel="noopener noreferrer">
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
