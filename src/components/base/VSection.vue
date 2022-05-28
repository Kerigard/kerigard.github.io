<script lang="ts" setup>
import { ref } from 'vue'

import { useIntersectionObserver } from '@/composables/observer'

defineProps({
  title: String,
  id: {
    type: String,
    required: true,
  },
})

const root = ref()
const { isIntersectingOnce } = useIntersectionObserver(root)
</script>

<template>
  <section :id="id" ref="root" class="section" :class="{ 'section--visible': isIntersectingOnce }">
    <h3 v-if="title" class="section__title">
      {{ title }}
    </h3>
    <div class="section__content">
      <slot />
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.section {
  @apply relative;
  @apply bg-white;
  @apply pt-8 pb-12 px-12 md:pt-14 md:pb-20 md:px-24 xl:pt-20 xl:pb-28 xl:px-32;
}
.section:nth-child(odd) {
  @apply bg-gray-100 shadow-inner;
}

.section__title {
  @apply relative flex justify-center;
  @apply text-2xl md:text-4xl font-bold;
  @apply mb-14 sm:mb-24 lg:mb-32;
  @apply transform -translate-x-40 opacity-0;
  @apply transition duration-500;
}
.section__title::after {
  content: '';
  @apply absolute;
  @apply bg-current;
  @apply w-7 sm:w-16;
  @apply bottom-0;
  @apply -mb-2 sm:-mb-4;
  @apply transform -translate-y-2 opacity-0;
  @apply transition duration-500 delay-300;
  height: 3px;
}
.section--visible .section__title {
  @apply translate-x-0 opacity-100;
}
.section--visible .section__title::after {
  @apply translate-y-0 opacity-100;
}

.section__content {
  @apply relative;
  @apply container;
  @apply mx-auto;
  @apply transform translate-y-6 opacity-0;
  @apply transition duration-700 delay-500;
}
.section--visible .section__content {
  @apply translate-y-0 opacity-100;
}

.section__content:deep(.section--slide-right) {
  @apply -translate-x-24;
}
.section__content:deep(.section--slide-down) {
  @apply -translate-y-6;
}
.section__content:deep(.section--slide-left) {
  @apply translate-x-24;
}
.section__content:deep(.section--slide-right),
.section__content:deep(.section--slide-down),
.section__content:deep(.section--slide-left) {
  @apply transform opacity-0;
  @apply transition duration-700 delay-500;
}
.section--visible .section__content:deep(.section--slide-right),
.section--visible .section__content:deep(.section--slide-down),
.section--visible .section__content:deep(.section--slide-left) {
  @apply translate-x-0 translate-y-0 opacity-100;
}

.section__content:deep(.section--scale) {
  @apply transform scale-0 opacity-0;
  @apply transition duration-700 delay-300;
}
.section--visible .section__content:deep(.section--scale) {
  @apply scale-100 opacity-100;
}
</style>
