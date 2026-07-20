export const BUTTON_CLASSES = [
  'group relative isolate inline-grid place-items-center',
  'appearance-none border-0 bg-transparent',
  'font-semibold uppercase tracking-[0.24em] text-[#0c090e]',
  'transition-colors duration-75 hover:text-[#fee97d]',
  'focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#0c090e]',
  'disabled:pointer-events-none disabled:opacity-50',
].join(' ')

export const BUTTON_SVG_CLASSES =
  'absolute inset-0 h-full w-full overflow-visible'

export const BUTTON_FILL_CLASSES = [
  'fill-[#fee97d]',
  'transition-colors duration-75 group-hover:fill-[#0c090e]',
].join(' ')

export const BUTTON_STROKE_CLASSES = [
  'stroke-[#0c090e]',
  'transition-colors duration-75 group-hover:stroke-[#fee97d]',
].join(' ')

export const BUTTON_TEXT_CLASSES = 'relative z-10'
