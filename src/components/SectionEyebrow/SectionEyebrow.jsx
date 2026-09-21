import {
  EYEBROW_DESKTOP_CLASSES,
  EYEBROW_MOBILE_CLASSES,
} from '@/config/section'

function SectionEyebrow({ text, variant = 'desktop', className = '' }) {
  const variantClasses =
    variant === 'mobile' ? EYEBROW_MOBILE_CLASSES : EYEBROW_DESKTOP_CLASSES

  return <h2 className={`${variantClasses} ${className}`.trim()}>{text}</h2>
}

export default SectionEyebrow
