<script lang="ts" setup>
import laravelIcon from '@iconify-icons/simple-icons/laravel'
import vuedotjsIcon from '@iconify-icons/simple-icons/vuedotjs'
import postgresqlIcon from '@iconify-icons/simple-icons/postgresql'
import microsoftsqlserverIcon from '@iconify-icons/simple-icons/microsoftsqlserver'
import mysqlIcon from '@iconify-icons/simple-icons/mysql'

import VCard from '@/components/VCard.vue'
import VIcon from '@/components/VIcon.vue'
</script>

<template>
  <VCard title="Обо мне">
    <p>Я занимаюсь разработкой CRM систем для обработки голосовых и неголосовых обращений.</p>

    <p class="mt-3">При разработке использую фреймворки и базы данных:</p>

    <div class="flex mt-6">
      <ul class="mr-10 sm:mr-20">
        <li>
          <VIcon v-model="laravelIcon" label="Laravel" color="#FF2D20" />
        </li>
        <li>
          <VIcon v-model="vuedotjsIcon" label="Vue.js" color="#4FC08D" />
        </li>
      </ul>
      <ul>
        <li>
          <VIcon v-model="postgresqlIcon" label="PostgreSQL" color="#4169E1" />
        </li>
        <li>
          <VIcon v-model="mysqlIcon" label="MySQL" color="#4479A1" />
        </li>
        <li>
          <VIcon v-model="microsoftsqlserverIcon" label="Microsoft SQL Server" color="#CC2927" />
        </li>
      </ul>
    </div>
  </VCard>
</template>

<style lang="postcss" scoped>
ul li + li {
  @apply mt-2;
}
</style>
