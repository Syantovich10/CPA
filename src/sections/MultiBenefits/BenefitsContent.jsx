import yellowSnakeIcon from '@/assets/icons/yellowsnakeicon.svg'
import FeatureCard from '@/components/Card/FeatureCard.jsx'
import { TEXT_STYLES } from '@/config/typography.js'

const TITLE_HIGHLIGHTS = [
  'guaranteed',
  'гарантировать',
  'гарантированы',
  'гарантувати',
  'гарантовані',
]
const RIBBON_TEXT = 'dream big earn bigger!'

export function HighlightedTitle({ title, className }) {
  const normalizedTitle = title.toLowerCase()
  const highlight = TITLE_HIGHLIGHTS.find((word) =>
    normalizedTitle.includes(word),
  )

  if (!highlight) {
    return <h2 className={className}>{title}</h2>
  }

  const highlightIndex = normalizedTitle.indexOf(highlight)
  const highlightEnd = highlightIndex + highlight.length

  return (
    <h2 className={className}>
      {title.slice(0, highlightIndex)}
      <span className="text-yellow">
        {title.slice(highlightIndex, highlightEnd)}
      </span>
      {title.slice(highlightEnd)}
    </h2>
  )
}

export function BenefitsList({ benefits, className = '' }) {
  return (
    <div className={`flex flex-col ${className}`.trim()}>
      {benefits.map((benefit, index) => (
        <FeatureCard key={index} title="" text={benefit} />
      ))}
    </div>
  )
}

export function BenefitsRibbon({ showIcon = false }) {
  return (
    <div className="overflow-hidden border-y-2 border-y-yellow whitespace-nowrap">
      <div
        className={`${TEXT_STYLES.halvar35Light} flex w-max -translate-x-3 items-center gap-8 py-1 text-yellow uppercase md:translate-x-0 md:text-[50px] lg:text-[64px]`}
      >
        <span>{RIBBON_TEXT}</span>
        {showIcon && (
          <img
            src={yellowSnakeIcon}
            alt=""
            aria-hidden="true"
            className="w-[48px] shrink-0 lg:w-[58px]"
          />
        )}
        <span aria-hidden="true">{RIBBON_TEXT}</span>
      </div>
    </div>
  )
}
