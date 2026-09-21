function DecorativeArt({
  src,
  mobileSrc,
  desktopSrc,
  breakpoint = 1024,
  alt,
  decorative = false,
  className = '',
  pictureClassName = '',
}) {
  const resolvedAlt = decorative ? '' : alt
  const ariaHidden = decorative ? true : undefined

  if (mobileSrc && desktopSrc) {
    return (
      <picture className={pictureClassName}>
        <source media={`(min-width: ${breakpoint}px)`} srcSet={desktopSrc} />
        <img
          src={mobileSrc}
          alt={resolvedAlt}
          aria-hidden={ariaHidden}
          className={className}
        />
      </picture>
    )
  }

  return (
    <img
      src={src}
      alt={resolvedAlt}
      aria-hidden={ariaHidden}
      className={className}
    />
  )
}

export default DecorativeArt
