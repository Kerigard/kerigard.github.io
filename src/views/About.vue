<template>
  <Card title="Обо мне">
    <p>Я занимаюсь разработкой CRM систем для обработки голосовых и неголосовых обращений.</p>

    <p class="mt-3">При разрабоке использую фреймворки и базы данных:</p>

    <div class="flex mt-6">
      <ul class="mr-10 sm:mr-20">
        <li>
          <Icon v-model="laravelIcon" label="Laravel" color="#FF2D20" />
        </li>
        <li>
          <Icon v-model="vuedotjsIcon" label="Vue.js" color="#4FC08D" />
        </li>
      </ul>
      <ul>
        <li>
          <Icon v-model="postgresqlIcon" label="PostgreSQL" color="#4169E1" />
        </li>
        <li>
          <Icon v-model="mysqlIcon" label="MySQL" color="#4479A1" />
        </li>
        <li>
          <Icon v-model="microsoftsqlserverIcon" label="Microsoft SQL Server" color="#CC2927" />
        </li>
      </ul>
    </div>
  </Card>
</template>

<script setup>
import laravelIcon from '@iconify-icons/simple-icons/laravel'
import vuedotjsIcon from '@iconify-icons/simple-icons/vuedotjs'
import postgresqlIcon from '@iconify-icons/simple-icons/postgresql'
import microsoftsqlserverIcon from '@iconify-icons/simple-icons/microsoftsqlserver'
import mysqlIcon from '@iconify-icons/simple-icons/mysql'

import Card from '@/components/Card.vue'
import Icon from '@/components/Icon.vue'
</script>

<style lang="postcss" scoped>
ul li + li {
  @apply mt-2;
}
</style>
