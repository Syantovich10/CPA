export const BUTTON_CLASSES = [
  'group relative isolate inline-grid place-items-center',
  'appearance-none border-0 bg-transparent',
  'font-semibold uppercase tracking-[0.24em] text-dark',
  'transition-colors duration-75 hover:text-yellow',
  'focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-dark',
  'disabled:pointer-events-none disabled:opacity-50',
].join(' ')

export const BUTTON_SVG_CLASSES =
  'absolute inset-0 h-full w-full overflow-visible'

export const BUTTON_FILL_CLASSES = [
  'fill-yellow',
  'transition-colors duration-75 group-hover:fill-dark',
].join(' ')

export const BUTTON_STROKE_CLASSES = [
  'stroke-dark',
  'transition-colors duration-75 group-hover:stroke-yellow',
].join(' ')

export const BUTTON_TEXT_CLASSES = 'relative z-10'
