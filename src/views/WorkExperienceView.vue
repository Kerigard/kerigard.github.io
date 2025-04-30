<script lang="ts" setup>
import { ref } from 'vue'

import VSection from '@/components/base/VSection.vue'
import { dateToLocaleString, diffDatesToLocalString } from '@/utils'

import type { Work } from '@/types'

const items = ref<Work[]>([
  {
    company: 'Студия интернет-решений Strikt',
    position: 'Ведущий программист',
    startDate: new Date('2022-02'),
    endDate: new Date('2025-03'),
    experience: [
      'Разработка и оптимизация API на PHP, Laravel, TypeScript.',
      'Разработка и поддержка full stack проектов на Laravel и Yii2.',
      'Работа с базами данных: MySQL, PostgreSQL, ClickHouse, ElasticSearch.',
      'Реализация очередей и асинхронной обработки данных с использованием Redis, RabbitMQ и Laravel Horizon.',
      'Разработка чат-бота с использованием NLP и LLM моделей.',
      'Проектирование и реализация высоконагруженных систем.',
      'Развёртывание и администрирование серверов в AWS и Yandex Cloud.',
      'Написание конфигураций Docker (включая Docker Compose) и развёртывание приложений на серверах (в том числе с использованием Kubernetes).',
      'Настройка и поддержка CI/CD-пайплайнов с использованием GitHub Actions и GitLab CI.',
      'Работа с протоколами передачи данных: REST, SOAP, GraphQL, gRPC, WebSockets.',
      'Документирование API с использованием OpenAPI (Swagger).',
    ],
  },
  {
    company: 'АО "Компания ТрансТелеКом"',
    position: 'Ведущий программист',
    startDate: new Date('2019-07'),
    endDate: new Date('2022-02'),
    experience: [
      'Разработка и поддержка корпоративных сайтов на Laravel и Vue.js.',
      'Работа с базами данных: MySQL, PostgreSQL, MS SQL.',
      'Создание и ведение технической документации.',
      'Наставничество и обучение программистов.',
    ],
  },
  {
    company: 'АО "Компания ТрансТелеКом"',
    position: 'Инженер-программист',
    startDate: new Date('2018-06'),
    endDate: new Date('2019-07'),
    experience: [
      'Техническая поддержка сотрудников компании.',
      'Подготовка и настройка рабочих мест.',
      'Ремонт и обслуживание офисной техники.',
      'Ведение документооборота.',
    ],
  },
  {
    company: 'ООО "ПАССАЖИРСКОЕ АВТОТРАНСПОРТНОЕ ПРЕДПРИЯТИЕ", г. Нерюнгри',
    position: 'Программист',
    startDate: new Date('2017-09'),
    endDate: new Date('2018-01'),
    experience: [
      'Поддержка 1С: Бухгалтерия, 1С: Зарплата и Кадры.',
      'Администрирование сервера MS Server 2008.',
      'Настройка рабочих мест.',
      'Ремонт и обслуживание офисной техники.',
    ],
  },
])
</script>

<template>
  <VSection id="work" title="Опыт работы">
    <ul class="timeline">
      <li v-for="(item, index) in items" :key="index" class="flex flex-col sm:flex-row">
        <div class="section--slide-down section--slide-right w-48 min-w-48">
          <span class="whitespace-nowrap">{{ dateToLocaleString(item.startDate) }}</span>
          <span> — </span>
          <span class="inline-block sm:block whitespace-nowrap">{{ dateToLocaleString(item.endDate) }}</span>
          <div class="text-gray-500 whitespace-nowrap">
            {{ diffDatesToLocalString(item.startDate, item.endDate) }}
          </div>
        </div>

        <div class="section--slide-left mt-3 sm:mt-0 ml-0 sm:ml-4 md:ml-8">
          <h4>
            {{ item.company }}
          </h4>
          <p class="mt-2 mb-1">
            <b>{{ item.position }}</b>
          </p>
          <p v-for="(experience, key) in item.experience" :key="key">
            {{ experience }}
          </p>
        </div>

        <hr v-if="index < items.length - 1" class="mt-4 sm:hidden" />
      </li>
    </ul>
  </VSection>
</template>

<style lang="postcss" scoped>
.timeline li + li {
  @apply mt-4 md:mt-10;
}
</style>
