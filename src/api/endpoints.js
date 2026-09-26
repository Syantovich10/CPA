import { DEFAULT_LANGUAGE } from '@/i18next'
import { get, post } from './client'

function withLocale(path, lang) {
  return lang && lang !== DEFAULT_LANGUAGE ? `/${lang}${path}` : path
}

export function getBenefits(lang, options) {
  return get(withLocale('/benefits', lang), options)
}

export function getMultiply(lang, options) {
  return get(withLocale('/multiply', lang), options)
}

export function getTasks(lang, options) {
  return get(withLocale('/tasks', lang), options)
}

export function sendForm(data) {
  return post('/form', data)
}
