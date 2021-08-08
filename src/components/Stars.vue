<template>
  <div class="fixed top-0 right-0 bottom-0 left-0 pointer-events-none overflow-hidden">
    <div class="transform rotate-45">
      <div v-for="(star, index) in stars" :key="index" class="star" :style="star.containerStyle">
        <div class="star__content" :style="star.style" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stars = ref([])

let style = document.createElement('style')
style.setAttribute('type', 'text/css')
document.head.appendChild(style)

function random(number) {
  return Math.floor(Math.random() * number) + 1
}

for (let i = 0; i < 200; i++) {
  let star = {}
  const size = Math.floor(Math.random() * 8) + 1

  star.containerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    animationName: `move-frames-${i}`,
    animationDuration: `${28000 + random(9000)}ms`,
    animationDelay: `${random(37000)}ms`,
  }
  star.style = { animationDelay: `${random(4000)}ms` }

  stars.value.push(star)

  style.sheet.insertRule(
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

<style lang="postcss" scoped>
.star {
  @apply absolute;
  transform: translateY(-10vh);
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.star__content {
  @apply w-full h-full rounded-full mix-blend-screen;
  background-image: radial-gradient(#99ffff, #99ffff 10%, black 56%);
  animation: fadein-frames 200ms infinite, scale-frames 2s infinite;
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
