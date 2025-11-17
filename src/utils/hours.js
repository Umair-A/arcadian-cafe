import { HOURS, WEEKDAYS } from '../data/hours'

const toMinutes = (value) => {
  if (!value) return null
  const [hour, minute] = value.split(':').map(Number)
  // Handle midnight (00:00) as 24:00 (1440 minutes)
  if (hour === 0 && minute === 0) return 24 * 60
  return hour * 60 + minute
}

const formatTime = (value) => {
  if (!value) return ''
  const [hourStr, minuteStr] = value.split(':')
  let hour = Number(hourStr)
  // Handle midnight (00:00) as 12:00 AM
  if (hour === 0) return '12:00 AM'
  const period = hour >= 12 ? 'PM' : 'AM'
  hour = hour % 12 || 12
  return `${hour}:${minuteStr} ${period}`
}

export const getTodayKey = (date = new Date()) => WEEKDAYS[date.getDay()]

export const getOpenStatus = (date = new Date()) => {
  const todayKey = getTodayKey(date)
  const schedule = HOURS[todayKey]
  if (!schedule || schedule.closed) {
    return { isOpen: false, label: 'Closed today' }
  }

  const nowMinutes = date.getHours() * 60 + date.getMinutes()
  const openMinutes = toMinutes(schedule.open)
  const closeMinutes = toMinutes(schedule.close)

  // Handle midnight closing: if close is 00:00 (1440 minutes), check if now is before midnight
  const isOpen = closeMinutes === 24 * 60 
    ? nowMinutes >= openMinutes 
    : nowMinutes >= openMinutes && nowMinutes < closeMinutes
  
  if (isOpen) {
    const closeLabel = closeMinutes === 24 * 60 ? 'midnight' : formatTime(schedule.close)
    return { isOpen: true, label: `Open now • until ${closeLabel}` }
  }

  if (nowMinutes < openMinutes) {
    return { isOpen: false, label: `Opens today at ${formatTime(schedule.open)}` }
  }

  const tomorrowKey = WEEKDAYS[(WEEKDAYS.indexOf(todayKey) + 1) % 7]
  const tomorrowSchedule = HOURS[tomorrowKey]

  return {
    isOpen: false,
    label: tomorrowSchedule
      ? `Opens tomorrow at ${formatTime(tomorrowSchedule.open)}`
      : 'Closed until further notice'
  }
}

export const getReadableHours = () =>
  Object.entries(HOURS).map(([day, schedule]) => {
    if (schedule.closed) {
      return { day, label: 'Closed' }
    }
    const closeTime = schedule.close === '00:00' ? '12:00 AM' : formatTime(schedule.close)
    return {
      day,
      label: `${formatTime(schedule.open)} – ${closeTime}`
    }
  })

