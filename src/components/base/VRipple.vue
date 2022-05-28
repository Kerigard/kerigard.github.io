<script lang="ts" setup>
import { getCurrentInstance, onMounted, onUnmounted, ref } from 'vue'

import type { RippleItem } from '@/types'

const vm = getCurrentInstance()
const parent = ref()
const items = ref<RippleItem[]>([])

onMounted(() => {
  parent.value = vm?.vnode.el?.parentElement

  if (parent.value) {
    parent.value.addEventListener('pointerdown', addItem)
    parent.value.addEventListener('keypress', addItem)
  }
})
onUnmounted(() => {
  if (parent.value) {
    parent.value.removeEventListener('pointerdown', addItem)
    parent.value.removeEventListener('keypress', addItem)
  }
})

const addItem = (e: PointerEvent | KeyboardEvent) => {
  const { top, left, width, height } = parent.value.getBoundingClientRect()
  const size = Math.sqrt(width ** 2 + height ** 2) / 2
  const isKeyboardEvent = e instanceof KeyboardEvent
  const y = isKeyboardEvent ? height / 2 : e.y - top
  const x = isKeyboardEvent ? width / 2 : e.x - left

  items.value.push({
    key: Symbol('ripple-item'),
    top: y - size / 2,
    left: x - size / 2,
    size,
  })
}
const removeItem = (item: RippleItem) => (items.value = items.value.filter((n) => n.key !== item.key))
</script>

<template>
  <span v-if="items.length" class="ripple-container">
    <TransitionGroup name="ripple" type="animation">
      <span
        v-for="item in items"
        :key="item.key"
        class="ripple"
        :style="{
          top: `${item.top}px`,
          left: `${item.left}px`,
          width: `${item.size}px`,
          height: `${item.size}px`,
        }"
        @animationend="removeItem(item)"
      />
    </TransitionGroup>
  </span>
</template>

<style lang="postcss" scoped>
.ripple-container {
  @apply absolute;
  @apply overflow-hidden pointer-events-none;
  @apply w-full h-full;
  @apply top-0 left-0;
  border-radius: inherit;
}

.ripple {
  @apply absolute;
  @apply bg-current;
  @apply rounded-full opacity-40 z-10;
  @apply transform scale-0;
  animation: ripple 400ms linear;
}
@keyframes ripple {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(2.8);
    opacity: 0.2;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}
</style>
