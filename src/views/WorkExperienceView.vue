<template>
  <Card :title="`Опыт работы ${allTime}`">
    <ul class="timeline">
      <li v-for="(item, index) in items" :key="index" class="flex flex-col sm:flex-row">
        <div class="w-48 min-w-48 whitespace-nowrap">
          <span>{{ formateDate(item.startDate) }} — </span>
          <span class="inline-block sm:block">{{ formateDate(item.endDate) }}</span>
          <div class="text-gray-400">{{ diffAndFormateDates(item) }}</div>
        </div>
        <div class="mt-3 ml-0 sm:mt-0 sm:ml-4 md:ml-8">
          <h4 class="text-xl">{{ item.company }}</h4>
          <p class="mt-2 mb-1">
            <b>{{ item.position }}</b>
          </p>
          <p v-for="(experience, key) in item.experience" :key="key">{{ experience }}</p>
        </div>
      </li>
    </ul>
  </Card>
</template>

<script setup>
import { computed, ref } from 'vue'

import Card from '@/components/Card.vue'

const items = ref([
  {
    company: 'АО "Компания ТрансТелеКом"',
    position: 'Ведущий программист',
    startDate: new Date('2019-07'),
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
const allTime = computed(() => {
  let result = { years: 0, months: 0 }

  items.value.forEach((item) => {
    const { years, months } = diffDates(item)

    result.years += years
    result.months += months
  })

  if (result.months > 12) {
    const count = Math.floor(result.months / 12)

    result.years += count
    result.months = result.months - 12 * count
  }

  return formateTime(result)
})

function formateDate(date) {
  if (!date) return 'По настоящее время'

  let result = date.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })

  return result.charAt(0).toUpperCase() + result.slice(1, -3)
}
function formateTime({ years, months }) {
  const intl = new Intl.RelativeTimeFormat('ru-RU', { numeric: 'always' })
  let result = intl.format(-months, 'month').split(' ').slice(0, -1).join(' ')

  if (years) {
    result = `${intl.format(-years, 'year').split(' ').slice(0, -1).join(' ')} ${result}`
  }

  return result
}
function diffDates({ startDate, endDate }) {
  const now = new Date()
  endDate = endDate ?? new Date(now.getFullYear(), now.getMonth(), 1)
  const diff = new Date(endDate - startDate)

  return { years: diff.toISOString().slice(0, 4) - 1970, months: diff.getMonth() + 1 }
}
function diffAndFormateDates({ startDate, endDate }) {
  return formateTime(diffDates({ startDate, endDate }))
}
</script>

<style lang="postcss" scoped>
.timeline li + li {
  @apply mt-4 md:mt-10;
}
</style>
