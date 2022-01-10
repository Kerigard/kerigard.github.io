<template>
  <Stars @loaded="show = true" />
  <main v-if="show" class="relative container mx-auto">
    <WelcomeView />
    <AboutView />
    <WorkExperienceView />
    <ContactsView />
  </main>
</template>

<script setup>
import { ref } from 'vue'

import Stars from '@/components/Stars.vue'
import WelcomeView from './views/WelcomeView.vue'
import AboutView from './views/AboutView.vue'
import WorkExperienceView from './views/WorkExperienceView.vue'
import ContactsView from './views/ContactsView.vue'

const show = ref(false)
</script>

<style lang="postcss">
@import url(https://fonts.googleapis.com/css?family=Montserrat:400);

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-black text-white overflow-y-scroll;
}

::-webkit-scrollbar {
  width: 15px;
  height: 15px;
}
::-webkit-scrollbar-track {
  @apply bg-black;
}
::-webkit-scrollbar-thumb {
  @apply bg-gray-600 bg-clip-content;
  border: 3px solid transparent;
  border-radius: 9px;
}
::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-500 bg-clip-content;
}
::-webkit-scrollbar-track:vertical {
  box-shadow: inset 2px 0 1px -1px rgba(255, 255, 255, 0.1);
}
::-webkit-scrollbar-track:horizontal {
  box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.1);
}

.ripple__container {
  @apply absolute top-0 right-0 bottom-0 left-0 overflow-hidden pointer-events-none;
  border-radius: inherit;
}
.ripple {
  @apply absolute bg-current rounded-full opacity-40;
  @apply transform -translate-x-1/2 -translate-y-1/2 scale-0;
  @apply transition duration-500;
}
.ripple--active {
  @apply opacity-25;
  @apply transform -translate-x-1/2 -translate-y-1/2 scale-100;
}
</style>
