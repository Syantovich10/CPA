function ResponsiveBackground({
  desktopSrc,
  mobileSrc,
  breakpoint = 1024,
  className = '',
}) {
  return (
    <picture className={`absolute inset-0 ${className}`.trim()}>
      <source media={`(min-width: ${breakpoint}px)`} srcSet={desktopSrc} />
      <img
        src={mobileSrc}
        alt=""
        aria-hidden="true"
        className="h-full w-full object-cover"
      />
    </picture>
  )
}

export default ResponsiveBackground
