<script lang="ts" setup>
import { getCurrentInstance, onMounted, onUnmounted, ref } from 'vue'

defineProps({
  text: String,
})

const vm = getCurrentInstance()
const root = ref()
const parent = ref()
const active = ref(false)

onMounted(() => {
  parent.value = vm?.vnode.el?.parentElement

  if (parent.value) {
    parent.value.addEventListener('mouseenter', show)
    parent.value.addEventListener('mouseleave', hide)
  }
})
onUnmounted(() => {
  if (parent.value) {
    parent.value.removeEventListener('mouseenter', show)
    parent.value.removeEventListener('mouseleave', hide)
  }
})

const show = () => (active.value = true)
const hide = () => (active.value = false)

const onEnter = (el: Element) => {
  if (!(el instanceof HTMLElement)) return

  const rect = parent.value.getBoundingClientRect()

  el.style.top = `${Math.floor(window.scrollY + rect.top - root.value?.offsetHeight - 8)}px`
  el.style.left = `${window.scrollX + rect.left + parent.value.offsetWidth / 2 - root.value?.offsetWidth / 2}px`
}
</script>

<template>
  <Teleport v-if="text" to="body">
    <Transition name="tooltip" @enter="onEnter">
      <span v-if="active" ref="root" class="tooltip">
        {{ text }}
      </span>
    </Transition>
  </Teleport>
</template>

<style lang="postcss" scoped>
.tooltip {
  @apply absolute;
  @apply bg-white border border-gray-200 shadow-md;
  @apply rounded-full whitespace-nowrap z-50;
  @apply px-4 py-2;
  @apply transition duration-300;
}

.tooltip-enter-from,
.tooltip-leave-to {
  @apply opacity-0;
  @apply transform -translate-y-2;
}
</style>
