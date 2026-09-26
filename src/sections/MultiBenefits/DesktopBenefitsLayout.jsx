import benefitsSnake from '@/assets/img/benefitssnake.png'
import DecorativeArt from '@/components/DecorativeArt/DecorativeArt'
import HighlightedText from '@/components/HighlightedText/HighlightedText'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import { TITLE_HIGHLIGHTS } from '@/config/highlights.js'
import { TEXT_STYLES } from '@/config/typography.js'
import {
  BenefitsList,
  BenefitsRibbon,
} from '@/sections/MultiBenefits/BenefitsContent.jsx'

const EYEBROW_TEXT = 'multi-benefits'

function DesktopBenefitsLayout({ data }) {
  return (
    <div
      data-layout="desktop"
      className="relative hidden min-h-dvh overflow-hidden lg:block"
    >
      <div className="relative mx-auto flex min-h-dvh w-full max-w-[1440px] flex-col justify-start gap-10 px-[50px] py-[60px] lg:gap-[52px]">
        <SectionEyebrow text={EYEBROW_TEXT} />

        <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] gap-[30px] items-center">
          <div className="relative z-10 self-start">
            <HighlightedText
              as="h2"
              text={data.title}
              highlights={TITLE_HIGHLIGHTS}
              className={`${TEXT_STYLES.halvar32Bold} leading-[90%] text-white md:text-[32px] lg:text-[42px] xl:text-[50px] max-w-[690px]`}
            />

            <p
              className={`${TEXT_STYLES.halvar16Medium} mt-5 max-w-[490px] leading-[20px] text-white lg:text-[18px] lg:leading-[22px]`}
            >
              {data.description}
            </p>
          </div>

          <div className="absolute z-20 flex h-full min-h-[300px] items-center justify-center left-[44%] top-[502px] -translate-x-[50%] -translate-y-[50%]">
            <DecorativeArt
              src={benefitsSnake}
              alt=""
              decorative
              className="w-[clamp(235px,28vw,390px)]"
            />
          </div>

          <BenefitsList
            benefits={data.benefits}
            className="relative z-30 gap-4 lg:gap-5 pt-[176px]"
          />
        </div>

        <BenefitsRibbon showIcon />
      </div>
    </div>
  )
}

export default DesktopBenefitsLayout
