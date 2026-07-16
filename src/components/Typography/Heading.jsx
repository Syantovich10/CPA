import { HEADING_VARIANTS } from './typography'

function Heading({
  as: Component,
  variant,
  className = '',
  children,
  ...props
}) {
  const classes = [HEADING_VARIANTS[variant], className]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}

export default Heading
