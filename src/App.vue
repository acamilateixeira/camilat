<script setup lang="ts">
import ContactSection from './components/ContactSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import HeroSection from './components/HeroSection.vue'
import LanguageGate from './components/LanguageGate.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SiteHeader from './components/SiteHeader.vue'
import StackSection from './components/StackSection.vue'
import { useLanguage } from './composables/useLanguage'

const { chosen, t } = useLanguage()
</script>

<template>
  <LanguageGate v-if="!chosen" />
  <div v-else class="portfolio">
    <a class="skip-link" href="#main">{{ t.skip }}</a>
    <SiteHeader />
    <main id="main">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <StackSection />
    </main>
    <ContactSection />
  </div>
</template>
