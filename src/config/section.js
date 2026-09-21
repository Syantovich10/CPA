import { TEXT_STYLES } from '@/config/typography'

export const SECTION_PADDING = {
  default: 'px-4 py-[60px] lg:px-[50px]',
  none: '',
  'y-only': 'py-[60px]',
}

export const SECTION_MIN_HEIGHT = {
  screen: 'min-h-dvh',
  none: '',
}

export const SECTION_CONTAINER_CLASSES =
  'mx-auto flex w-full max-w-[500px] flex-col lg:max-w-[1440px]'

export const EYEBROW_DESKTOP_CLASSES = `${TEXT_STYLES.halvar32Bold} hidden self-end text-yellow uppercase lg:block`

export const EYEBROW_MOBILE_CLASSES = `${TEXT_STYLES.halvar16Bold} border-t border-white/20 pt-6 text-center tracking-[0.2em] text-yellow uppercase lg:hidden`
