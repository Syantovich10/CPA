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

        <div className="grid grid-cols-[minmax(0,1.21fr)_minmax(0,.79fr)] gap-[30px] items-center">
          <div className="relative z-10 self-start">
            <HighlightedTitle
              title={data.title}
              className={`${TEXT_STYLES.halvar32Bold} leading-[90%] text-white md:text-[32px] lg:text-[42px] xl:text-[50px]`}
            />

            <p
              className={`${TEXT_STYLES.halvar16Medium} mt-5 max-w-[563px] leading-[20px] text-white lg:text-[18px] lg:leading-[22px]`}
            >
              {data.description}
            </p>
          </div>

          <div className="absolute z-20 flex h-full min-h-[300px] items-center justify-center left-[47%] top-[473.094px] -translate-x-[50%] -translate-y-[50%]">
            <img
              src={benefitsSnake}
              alt=""
              aria-hidden="true"
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
