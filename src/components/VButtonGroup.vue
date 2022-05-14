<template>
  <div class="button-group">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.button-group {
  @apply flex flex-wrap;
  @apply -mt-4;
}
.button-group:deep(.button) {
  @apply mt-4;
}
.button-group:deep(.button:not(:last-child)) {
  @apply mr-4;
}
</style>
