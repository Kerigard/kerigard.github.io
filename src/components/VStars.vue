<script lang="ts" setup>
import { ref } from 'vue'

import type { Star } from '@/types'

defineEmits(['loaded'])

const stars = ref<Star[]>([])

let style = document.head.querySelector<HTMLStyleElement>('style[star-styles]')

if (style == null) {
  style = document.createElement('style')
  style.setAttribute('star-styles', '')
  document.head.appendChild(style)
}

function random(number: number): number {
  return Math.floor(Math.random() * number) + 1
}

for (let i = 0; i < 200; i++) {
  const size = Math.floor(Math.random() * 8) + 1

  stars.value.push({
    containerStyle: {
      width: `${size}px`,
      height: `${size}px`,
      animationName: `move-frames-${i}`,
      animationDuration: `${28000 + random(9000)}ms`,
      animationDelay: `${random(37000)}ms`,
    },
    style: { animationDelay: `${random(4000)}ms` },
  })

  style.sheet?.insertRule(
    `@keyframes move-frames-${i} {
      from {
        transform: translate(${random(140)}vw, ${random(90) + 20}vh);
      }
      to {
        transform: translate(${random(140)}vw, ${-(random(90) + 20 + random(30))}vh);
      }
    }`,
  )
}
</script>

<template>
  <Transition name="slide-page-down" appear @after-enter="$emit('loaded')">
    <div class="star-container">
      <div class="transform rotate-45">
        <div v-for="(star, index) in stars" :key="index" class="star" :style="star.containerStyle">
          <div class="star__content" :style="star.style" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="postcss" scoped>
.slide-page-down-enter-active {
  @apply transition duration-500;
}
.slide-page-down-enter-from {
  @apply transform -translate-x-full translate-y-full opacity-0;
}

.star-container {
  @apply w-full h-full top-0 right-0 bottom-0 left-0;
  @apply bg-black bg-fixed;
  @apply fixed pointer-events-none overflow-hidden;
  background-image: radial-gradient(
    circle at bottom left,
    #06002b 10%,
    #04002b 25%,
    #00062d 30%,
    #000427 50%,
    #000 100%
  );
}

.star {
  @apply absolute;
  transform: translateY(-10vh);
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.star__content {
  @apply w-full h-full rounded-full mix-blend-screen;
  background-image: radial-gradient(#99ffff, #99ffff 10%, black 56%);
  animation: fade-frames 200ms infinite, scale-frames 2s infinite;
}

@keyframes fade-frames {
  0% {
    @apply opacity-100;
  }
  50% {
    @apply opacity-70;
  }
  100% {
    @apply opacity-100;
  }
}
@keyframes scale-frames {
  0% {
    transform: scale3d(0.4, 0.4, 1);
  }
  50% {
    transform: scale3d(2.2, 2.2, 1);
  }
  100% {
    transform: scale3d(0.4, 0.4, 1);
  }
}
</style>
