<script lang="ts" setup>
import { computed } from 'vue'

import type { PropType } from 'vue'
import type { IconifyIcon } from '@iconify/types'

const props = defineProps({
  icon: {
    type: Object as PropType<IconifyIcon>,
    required: true,
  },
  width: {
    type: [Number, String],
    default: 32,
  },
  height: {
    type: [Number, String],
    default: 32,
  },
  label: String,
  color: String,
  href: String,
})

const tag = computed(() => (props.href ? 'a' : 'span'))
</script>

<template>
  <component
    :is="tag"
    :href="href"
    :target="href ? '_blank' : undefined"
    class="icon"
    :class="{ 'hover:text-blue-500': href }"
  >
    <!-- eslint-disable vue/no-v-html -->
    <svg
      :width="width"
      :height="height"
      :viewBox="`0 0 ${icon.width} ${icon.height}`"
      class="transition-colors duration-500"
      :style="{ color }"
      v-html="icon.body"
    ></svg>
    <label v-if="label" class="ml-2">
      {{ label }}
    </label>
    <slot />
  </component>
</template>

<style lang="postcss" scoped>
.icon {
  @apply relative inline-flex;
  @apply select-none;
}
</style>
