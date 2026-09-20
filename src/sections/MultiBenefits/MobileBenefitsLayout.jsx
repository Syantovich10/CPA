import mobileBackground from '@/assets/img/mobilebg/mobilebgfive.png'
import { TEXT_STYLES } from '@/config/typography.js'
import {
  BenefitsList,
  BenefitsRibbon,
  HighlightedTitle,
} from '@/sections/MultiBenefits/BenefitsContent.jsx'

function MobileBenefitsLayout({ data }) {
  return (
    <div
      data-layout="mobile"
      className="relative min-h-dvh overflow-hidden lg:hidden"
    >
      <img
        src={mobileBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative mx-auto flex min-h-dvh w-full max-w-[500px] flex-col justify-center px-4 py-[60px]">
        <HighlightedTitle
          title={data.title}
          className={`${TEXT_STYLES.halvar32Bold} leading-[90%] text-white`}
        />

        <p
          className={`${TEXT_STYLES.halvar16Medium} mt-4 max-w-[430px] leading-[20px] text-white`}
        >
          {data.description}
        </p>

        <div className="-mx-4 mt-8">
          <BenefitsRibbon />
        </div>

        <BenefitsList benefits={data.benefits} className="mt-7 gap-4" />
      </div>
    </div>
  )
}

export default MobileBenefitsLayout
