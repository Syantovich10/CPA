import {
  SECTION_CONTAINER_CLASSES,
  SECTION_MIN_HEIGHT,
  SECTION_PADDING,
} from '@/config/section'

function Section({
  id,
  padding = 'default',
  minHeight = 'screen',
  background,
  contentClassName,
  className = '',
  children,
}) {
  return (
    <section
      id={id}
      className={`relative flex flex-col justify-center ${SECTION_MIN_HEIGHT[minHeight]} ${SECTION_PADDING[padding]} ${className}`.trim()}
    >
      {background}
      {contentClassName ? (
        <div
          className={`${SECTION_CONTAINER_CLASSES} ${contentClassName}`.trim()}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}

export default Section
