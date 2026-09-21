import yellowSnakeIcon from '@/assets/icons/yellowsnakeicon.svg'
import Card from '@/components/Card/Card'
import { TEXT_STYLES } from '@/config/typography.js'

const RIBBON_TEXT = 'dream big earn bigger!'

export function BenefitsList({ benefits, className = '' }) {
  return (
    <div className={`flex flex-col ${className}`.trim()}>
      {benefits.map((benefit, index) => (
        <Card key={index} text={benefit} padding="spacious" />
      ))}
    </div>
  )
}

export function BenefitsRibbon({ showIcon = false }) {
  return (
    <div className="overflow-hidden border-y-2 border-y-yellow rotate-1 whitespace-nowrap mt-auto">
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
