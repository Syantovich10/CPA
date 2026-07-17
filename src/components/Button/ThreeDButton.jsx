import {
  BUTTON_CLASSES,
  BUTTON_FILL_CLASSES,
  BUTTON_STROKE_CLASSES,
  BUTTON_SVG_CLASSES,
  BUTTON_TEXT_CLASSES,
} from '../../config/button.js'

const FILL_PATH =
  'M1.25 83.25V9.85855L21.2683 1.25H421.25V77.5855L406.73 83.25H1.25Z'

const STROKE_PATH =
  'M421.25 1.25V77.5855L406.73 83.25H1.25V9.85855L21.2683 1.25H421.25ZM1.25 9.85855C1.25 9.85855 306.431 9.85855 406.73 9.85855M406.73 83.25C406.73 83.25 406.73 39.3007 406.73 9.85855M406.73 9.85855C415.448 7.27775 421.25 1.25 421.25 1.25'

const ThreeDButton = ({
  children,
  className = '',
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${BUTTON_CLASSES} ${className}`.trim()}
      {...props}
    >
      <svg
        aria-hidden="true"
        className={BUTTON_SVG_CLASSES}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 423 85"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className={BUTTON_FILL_CLASSES} d={FILL_PATH} />
        <path
          className={BUTTON_STROKE_CLASSES}
          d={STROKE_PATH}
          strokeLinejoin="round"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span className={BUTTON_TEXT_CLASSES}>{children}</span>
    </button>
  )
}

export default ThreeDButton
