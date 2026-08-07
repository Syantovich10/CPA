import { TEXT_STYLES } from '@/config/typography'

const INTRO_HIGHLIGHT = 'in-house'

function IntroText({ description }) {
  const highlightIndex = description
    .toLowerCase()
    .indexOf(INTRO_HIGHLIGHT.toLowerCase())

  const className = `${TEXT_STYLES.halvar20Bold} text-white sm:px-[38px]`

  if (highlightIndex === -1) {
    return <p className={className}>{description}</p>
  }

  const highlightEnd = highlightIndex + INTRO_HIGHLIGHT.length

  return (
    <p className={className}>
      {description.slice(0, highlightIndex)}
      <span className="text-yellow">
        {description.slice(highlightIndex, highlightEnd)}
      </span>
      {description.slice(highlightEnd)}
    </p>
  )
}

export default IntroText
