import benefitsSnake from '@/assets/img/benefitssnake.png'
import desktopBackground from '@/assets/img/dekstopbg/dekstopbgone.png'
import { TEXT_STYLES } from '@/config/typography.js'
import {
  BenefitsList,
  BenefitsRibbon,
  HighlightedTitle,
} from '@/sections/MultiBenefits/BenefitsContent.jsx'

function DesktopBenefitsLayout({ data }) {
  return (
    <div
      data-layout="desktop"
      className="relative hidden min-h-dvh overflow-hidden lg:block"
    >
      <img
        src={desktopBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative mx-auto flex min-h-dvh w-full max-w-[1440px] flex-col justify-start gap-10 px-[50px] py-[60px] lg:gap-[52px]">
        <h2
          className={`${TEXT_STYLES.halvar32Bold} self-end text-yellow uppercase`}
        >
          multi-benefits
        </h2>

        <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(160px,0.75fr)_minmax(0,1fr)] items-center">
          <div className="relative z-10 max-w-[540px] self-start pt-5">
            <HighlightedTitle
              title={data.title}
              className={`${TEXT_STYLES.halvar32Bold} leading-[90%] text-white md:text-[32px] lg:text-[42px] xl:text-[50px]`}
            />

            <p
              className={`${TEXT_STYLES.halvar16Medium} mt-5 max-w-[470px] leading-[20px] text-white lg:text-[18px] lg:leading-[22px]`}
            >
              {data.description}
            </p>
          </div>

          <div className="relative z-20 flex h-full min-h-[300px] items-center justify-center">
            <img
              src={benefitsSnake}
              alt=""
              aria-hidden="true"
              className="w-[clamp(235px,28vw,390px)] max-w-none -translate-x-[8%] object-contain lg:-translate-x-[14%]"
            />
          </div>

          <BenefitsList
            benefits={data.benefits}
            className="relative z-30 gap-4 lg:gap-5"
          />
        </div>

        <BenefitsRibbon showIcon />
      </div>
    </div>
  )
}

export default DesktopBenefitsLayout
