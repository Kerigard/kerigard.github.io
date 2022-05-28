<template>
  <div class="icon-group">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.icon-group {
  @apply flex flex-wrap;
  @apply -mt-4;
}
.icon-group:deep(.icon) {
  @apply mt-4;
}
.icon-group:deep(.icon:not(:last-child)) {
  @apply mr-4;
}
</style>
