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
    endDate: null,
    experience: [
      'Разработка API для сайтов на PHP, Laravel, TypeScript.',
      'Использование баз данных MySQL, PostgreSQL, ClickHouse.',
      'Создание и настройка серверов на AWS и Yandex Cloud.',
    ],
  },
  {
    company: 'АО "Компания ТрансТелеКом"',
    position: 'Ведущий программист',
    startDate: new Date('2019-07'),
    endDate: new Date('2022-02'),
    experience: [
      'Разработка и поддержка сайтов на PHP, Laravel, Vue.js.',
      'Использование баз данных MySQL, PostgreSQL, MS SQL.',
      'Написание технической документации по сайтам.',
      'Обучение других программистов.',
    ],
  },
  {
    company: 'АО "Компания ТрансТелеКом"',
    position: 'Инженер-программист',
    startDate: new Date('2018-06'),
    endDate: new Date('2019-07'),
    experience: [
      'Техническая поддержка сотрудников компании.',
      'Подготовка и настройка рабочих мест пользователей.',
      'Ремонт и обслуживание офисной техники.',
      'Ведение документооборота по заправке картриджей.',
    ],
  },
  {
    company: 'ООО "ПАССАЖИРСКОЕ АВТОТРАНСПОРТНОЕ ПРЕДПРИЯТИЕ", г. Нерюнгри',
    position: 'Программист',
    startDate: new Date('2017-09'),
    endDate: new Date('2018-01'),
    experience: [
      'Поддержка 1С: Бухгалтерия и 1С: Зарплата и Кадры.',
      'Администрирование сервера MS Server 2008.',
      'Настройка рабочих мест пользователей.',
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
