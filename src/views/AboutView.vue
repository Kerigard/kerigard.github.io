<script lang="ts" setup>
import VSection from '@/components/base/VSection.vue'
import AboutPrinciples from '@/components/about/AboutPrinciples.vue'
import AboutMe from '@/components/about/AboutMe.vue'
import AboutSkills from '@/components/about/AboutSkills.vue'
</script>

<template>
  <VSection id="about" title="Обо мне">
    <AboutPrinciples />

    <div class="flex flex-wrap sm:flex-nowrap mt-28 -mx-6">
      <div class="section--slide-right flex-auto sm:flex-1 mx-6">
        <AboutMe />
      </div>

      <div class="section--slide-left flex-auto sm:flex-1 mt-6 sm:mt-0 mx-6">
        <AboutSkills />
      </div>
    </div>
  </VSection>
</template>
