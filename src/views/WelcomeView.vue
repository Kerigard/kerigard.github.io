<template>
  <div class="flex flex-col justify-center h-screen uppercase px-8 sm:px-0">
    <Transition name="slide-up" appear>
      <div>
        <h1 class="text-4xl md:text-5xl lg:text-7xl">Привет,</h1>
        <h1 class="text-4xl md:text-5xl lg:text-7xl">Я <span class="text-red-600">Владислав</span>,</h1>
        <h1 class="text-4xl md:text-5xl lg:text-7xl"><span class="text-red-600">Full Stack</span> разработчик</h1>
        <Transition name="slide-right" appear>
          <h2 class="text-lg md:text-xl lg:text-2xl text-gray-400">JavaScript / Vue / Laravel</h2>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<style lang="postcss" scoped>
.slide-up-enter-active {
  @apply transition duration-500;
}
.slide-up-enter-from {
  @apply transform translate-y-10 opacity-0;
}

.slide-right-enter-active {
  @apply transition duration-300;
}
.slide-right-enter-from {
  @apply transform -translate-x-10;
}
</style>
