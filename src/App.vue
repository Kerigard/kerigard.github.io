<script lang="ts" setup>
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import WorkExperienceView from './views/WorkExperienceView.vue'
import ContactsView from './views/ContactsView.vue'
</script>

<template>
  <HomeView />
  <AboutView />
  <WorkExperienceView />
  <ContactsView />
</template>

<style lang="postcss">
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply text-gray-900 overflow-y-scroll overflow-x-hidden;
}

h4 {
  @apply text-lg;
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
</style>
