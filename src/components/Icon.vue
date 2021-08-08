<template>
  <component
    :is="tag"
    :href="href"
    :target="href ? '_blank' : undefined"
    class="inline-flex items-center"
    :class="{ 'hover:text-blue-500': href }"
  >
    <svg
      :width="width"
      :height="height"
      :viewBox="`0 0 ${modelValue.width} ${modelValue.height}`"
      class="transition-colors"
      :style="{ color }"
      v-html="modelValue.body"
    />
    <label v-if="label" class="ml-2">
      {{ label }}
    </label>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {},
  },
  width: {
    type: [Number, String],
    default: 32,
  },
  height: {
    type: [Number, String],
    default: 32,
  },
  label: {
    type: String,
    default: undefined,
  },
  color: {
    type: String,
    default: undefined,
  },
  href: {
    type: String,
    default: undefined,
  },
})

const tag = computed(() => (props.href ? 'a' : 'span'))
</script>
