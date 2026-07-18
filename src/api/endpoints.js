import { get, post } from './client'

export function getBenefits(lang, options) {
  return get(`/${lang}/benefits`, options)
}

export function getMultiply(lang, options) {
  return get(`/${lang}/multiply`, options)
}

export function getTasks(lang, options) {
  return get(`/${lang}/tasks`, options)
}

export function sendForm(data) {
  return post('/form', data)
}
