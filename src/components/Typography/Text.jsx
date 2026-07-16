import { TEXT_VARIANTS, TEXT_WEIGHTS } from '../../config/typography'

function Text({
  as: Component,
  variant,
  weight,
  className = '',
  children,
  ...props
}) {
  const classes = [TEXT_VARIANTS[variant], TEXT_WEIGHTS[weight], className]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}

export default Text
