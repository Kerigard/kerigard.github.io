<template>
  <Stars />
  <main class="relative container mx-auto">
    <Welcome />
    <About />
    <WorkExperience />
    <Contacts />
  </main>
</template>

<script setup>
import Stars from '@/components/Stars.vue'
import Welcome from './views/Welcome.vue'
import About from './views/About.vue'
import WorkExperience from './views/WorkExperience.vue'
import Contacts from './views/Contacts.vue'
</script>

<style lang="postcss">
@import url(https://fonts.googleapis.com/css?family=Montserrat:400);

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-black bg-fixed text-white;
  background-image: radial-gradient(
    circle at bottom left,
    #06002b 10%,
    #04002b 25%,
    #00062d 30%,
    #000427 50%,
    #000 100%
  );
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
