<script lang="ts" setup>
import VStars from '@/components/base/VStars.vue'
import VTrees from '@/components/base/VTrees.vue'
</script>

<template>
  <section id="home" class="home-section">
    <VStars />

    <Transition name="slide-down" appear>
      <div class="z-10 -mt-24">
        <h1 class="text-4xl md:text-5xl lg:text-7xl">Привет,</h1>
        <h1 class="text-4xl md:text-5xl lg:text-7xl">Я <span class="text-red-600">Владислав</span>,</h1>
        <h1 class="text-4xl md:text-5xl lg:text-7xl"><span class="text-red-600">Full Stack</span> разработчик</h1>

        <Transition name="slide-right" appear>
          <h2 class="text-lg md:text-xl lg:text-2xl text-gray-400">JavaScript / PHP / Vue / Laravel</h2>
        </Transition>
      </div>
    </Transition>

    <VTrees />
  </section>
</template>

<style lang="postcss" scoped>
.home-section {
  @apply container flex flex-col justify-center text-white uppercase px-8 sm:px-0 mx-auto;
  height: calc(100vh + 20px);
}

.slide-down-enter-active {
  @apply transition duration-700;
}
.slide-down-enter-from {
  @apply transform -translate-y-10 opacity-0;
}

.slide-right-enter-active {
  @apply transition duration-500;
}
.slide-right-enter-from {
  @apply transform -translate-x-10 opacity-0;
}
</style>
