<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  href: String,
})

const tag = computed(() => (props.href ? 'a' : 'button'))
</script>

<template>
  <component :is="tag" :href="href" class="button">
    <slot />
  </component>
</template>

<style lang="postcss" scoped>
.button {
  @apply w-min;
  @apply relative flex justify-center items-center;
  @apply border border-blue-600;
  @apply px-6 py-2;
  @apply transition-colors duration-500;
}
.button:hover {
  @apply border-white;
}
</style>
