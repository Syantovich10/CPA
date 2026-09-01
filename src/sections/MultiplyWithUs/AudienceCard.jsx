import ThreeDButton from '@/components/Button/ThreeDButton'
import { TEXT_STYLES } from '@/config/typography.js'

function DownArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 28 58"
      className="h-[42px] w-7 shrink-0 text-dark lg:h-[58px]"
      fill="none"
    >
      <path
        d="M14 1v52M2 42l12 12 12-12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  )
}

function AudienceCard({ tabId, firstStep, secondStep, ctaLabel, onApply }) {
  return (
    <div
      id="multiply-audience-panel"
      role="tabpanel"
      aria-labelledby={`multiply-tab-${tabId}`}
      className="flex min-h-[610px] w-full flex-col items-center justify-center gap-6 rounded-[14px] bg-[linear-gradient(145deg,#B900FF_0%,#9600DF_100%)] px-5 py-12 text-center text-white sm:px-10 lg:min-h-[620px] lg:gap-7 lg:px-[98px] lg:py-[60px]"
    >
      <p
        className={`max-w-[760px] font-halvar text-[18px] leading-[1.25] font-bold sm:text-[20px]`}
      >
        {firstStep}
      </p>

      <DownArrow />

      <p className="max-w-[780px] font-halvar text-[18px] leading-[1.25] font-bold sm:text-[20px]">
        {secondStep}
      </p>

      <DownArrow />

      <ThreeDButton
        type="button"
        onClick={onApply}
        className={
          TEXT_STYLES.halvar24Bold +
          ` h-[68px] w-full max-w-[423px] px-5 text-[14px] sm:text-[18px] lg:h-[85px]`
        }
      >
        {ctaLabel}
      </ThreeDButton>
    </div>
  )
}

export default AudienceCard
