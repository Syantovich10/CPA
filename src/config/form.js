import { TEXT_STYLES } from '@/config/typography.js'

export const FORM_INPUT_CLASSES = [
  'w-full rounded-2xl border border-purple/30 bg-white px-4 py-3',
  'font-stolzl text-[14px] text-dark placeholder:text-dark placeholder:font-light',
  'transition-colors focus:border-purple focus:outline-none',
].join(' ')

export const FORM_SELECT_BUTTON_CLASSES = [
  'flex w-full items-center justify-between rounded-2xl border border-purple/30',
  'bg-white px-4 py-3 text-left font-stolzl text-[14px] text-dark',
  'transition-colors focus:border-purple focus:outline-none',
].join(' ')

export const FORM_SELECT_LIST_CLASSES = [
  'absolute inset-x-0 top-[calc(100%+8px)] z-10 max-h-[180px] overflow-y-auto',
  'rounded-2xl border border-purple/30 bg-white py-1 shadow-lg',
].join(' ')

export const FORM_SELECT_OPTION_CLASSES = [
  'w-full px-4 py-2 text-left font-stolzl text-[14px] text-dark',
  'transition-colors hover:bg-purple/10',
].join(' ')

export const FORM_SUBMIT_BUTTON_CLASSES = [
  'inline-flex items-center justify-center rounded-2xl bg-yellow',
  'px-10 py-3 font-halvar font-bold text-dark transition-colors',
  'hover:bg-purple hover:text-white',
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple',
  'disabled:pointer-events-none disabled:opacity-50',
].join(' ')

export const FORM_CLOSE_BUTTON_CLASSES = [
  `absolute right-6 top-6 ${TEXT_STYLES.halvar20Bold} text-purple`,
  'transition-colors hover:text-purple-dark',
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple',
].join(' ')

export const FORM_ERROR_CLASSES = 'mt-1 font-stolzl text-[12px] text-red-500'
