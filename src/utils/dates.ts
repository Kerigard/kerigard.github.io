import { capitalizeFirstLetter } from './helpers'

export const dateToLocaleString = (date: Date | null): string => {
  if (!date) return 'По настоящее время'

  const result = date.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })

  return capitalizeFirstLetter(result.slice(0, -3))
}

export const diffDatesToLocalString = (startDate: Date, endDate: Date | null): string => {
  const now = new Date()
  endDate = endDate ?? new Date(now.getFullYear(), now.getMonth(), 1)
  const diff = new Date(endDate.valueOf() - startDate.valueOf())
  const years = diff.getFullYear() - 1970
  const months = diff.getMonth() + 1

  const intl = new Intl.RelativeTimeFormat('ru-RU', { numeric: 'always' })
  let result = intl.format(-months, 'month').split(' ').slice(0, -1).join(' ')

  if (years) {
    result = `${intl.format(-years, 'year').split(' ').slice(0, -1).join(' ')} ${result}`
  }

  return result
}
