<script lang="ts" setup>
import type { PropType } from 'vue'
import type { IconifyIcon } from '@iconify/types'

import VIcon from '@/components/base/VIcon.vue'

defineProps({
  icon: {
    type: Object as PropType<IconifyIcon>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="principle section--scale">
    <div class="principle__icon">
      <VIcon :icon="icon" width="62" height="62" />
    </div>
    <h4 class="font-semibold mt-3">{{ title }}</h4>
    <p class="text-center mt-1">{{ text }}</p>
  </div>
</template>

<style lang="postcss" scoped>
.principle {
  @apply flex flex-col items-center flex-1;
  @apply min-w-40 sm:min-w-48 md:min-w-64 lg:min-w-auto;
  @apply mx-6 lg:mx-3;
}

.principle__icon {
  @apply flex justify-center;
  @apply border border-gray-200;
  @apply rounded-full;
  @apply w-32 h-32;
  @apply pt-8;
}

.principle p {
  max-width: 260px;
}
</style>
