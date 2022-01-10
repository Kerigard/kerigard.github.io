<template>
  <div ref="root" class="card" :class="{ 'card--visible': visible }">
    <h3 v-if="title" class="text-2xl lg:text-4xl mb-2 md:mb-8">{{ title }}</h3>
    <div class="card__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  title: {
    type: String,
    default: undefined,
  },
})

const root = ref()
const visible = ref()

let observer = new IntersectionObserver(([node]) => {
  if (!visible.value && node.isIntersecting) {
    visible.value = true
  }
})

onMounted(() => {
  observer.observe(root.value)
})
onUnmounted(() => {
  observer.disconnect()
})
</script>

<style lang="postcss" scoped>
.card {
  @apply relative;
  @apply bg-indigo-900 bg-opacity-40 shadow-2xl;
  @apply rounded-md overflow-hidden opacity-0;
  @apply mt-4 mb-16 -ml-4 md:-ml-10;
  @apply px-4 py-2 md:px-12 md:py-8;
  @apply transition-all duration-500 delay-200;
}
.card--visible {
  @apply opacity-100 ml-0;
}

.card > h3 {
  @apply relative;
  @apply transform translate-x-20;
  @apply transition-all duration-300 delay-300;
}
.card--visible > h3 {
  @apply translate-x-0;
}

.card__content {
  @apply relative;
  @apply transform translate-y-4;
  @apply transition-all duration-300 delay-500;
}
.card--visible .card__content {
  @apply translate-y-0;
}
</style>
