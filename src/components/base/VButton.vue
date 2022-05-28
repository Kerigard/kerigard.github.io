<script lang="ts" setup>
import { computed } from 'vue'

import VRipple from './VRipple.vue'

const props = defineProps({
  href: String,
  icon: {
    type: Boolean,
    default: false,
  },
})

const tag = computed(() => (props.href ? 'a' : 'button'))
</script>

<template>
  <component :is="tag" :href="href" class="button" :class="{ 'button--icon': icon }">
    <slot />
    <VRipple />
  </component>
</template>

<style lang="postcss" scoped>
.button {
  @apply w-min;
  @apply relative flex justify-center items-center;
  @apply border border-gray-200;
  @apply rounded-full select-none;
  @apply px-6 py-2;
  @apply transition duration-500;
}
.button:hover {
  @apply bg-gray-200 shadow-md;
}

.button--icon {
  @apply min-w-12 min-h-12;
}
.button--icon:not(:hover):deep(svg) {
  @apply text-inherit !important;
}
</style>
