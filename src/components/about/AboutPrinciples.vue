<script lang="ts" setup>
import speedtestIcon from '@iconify-icons/simple-icons/speedtest'
import opentelemetryIcon from '@iconify-icons/simple-icons/opentelemetry'
import onlyofficeIcon from '@iconify-icons/simple-icons/onlyoffice'
import ciliumIcon from '@iconify-icons/simple-icons/cilium'

import VPrinciple from './base/VPrinciple.vue'
</script>

<template>
  <div class="flex flex-wrap lg:flex-nowrap -mx-6 lg:-mx-3">
    <VPrinciple
      :icon="speedtestIcon"
      title="Скорость"
      text="Быстрое выполнение без задержек, один из основных моих приоритетов."
    />
    <VPrinciple
      :icon="opentelemetryIcon"
      title="Интуитивность"
      text="Для меня очень важно, чтобы код был максимально читабельным и понятным."
    />
    <VPrinciple :icon="onlyofficeIcon" title="Разделение" text="Разделение всех элементов на зоны ответственности." />
    <VPrinciple
      :icon="ciliumIcon"
      title="Единообразие"
      text="Следование единому стилю и максимальное использование уже существующей логики."
    />
  </div>
</template>

<style lang="postcss" scoped>
:deep(.principle:not(:last-child)) {
  @apply mb-10 lg:mb-0;
}
</style>
