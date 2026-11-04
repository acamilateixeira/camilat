<script setup lang="ts">
import ContactSection from './components/ContactSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SiteHeader from './components/SiteHeader.vue'
import StackSection from './components/StackSection.vue'
import { useLanguage } from './composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <div class="portfolio">
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
