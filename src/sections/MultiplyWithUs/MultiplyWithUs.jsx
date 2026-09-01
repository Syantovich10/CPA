import { getMultiply } from '@/api/endpoints'
import multiplySnake from '@/assets/img/multiplysnake.png'
import yellowGrid from '@/assets/img/yellowgrid.svg'
import Footer from '@/components/Footer/Footer'
import Section from '@/components/Section/Section'
import Spinner from '@/components/Spinner/Spinner'
import useApiData from '@/hooks/useApiData'
import AudienceCard from '@/sections/MultiplyWithUs/AudienceCard'
import AudienceSwitchButton from '@/sections/MultiplyWithUs/AudienceSwitchButton'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TEXT_STYLES } from '@/config/typography.js'

const EXPECTED_CATEGORY_COUNT = 3

function getCtaKey(activeIndex) {
  switch (activeIndex) {
    case 1:
      return 'partners'
    case 2:
      return 'business'
    default:
      return 'mediaBuyers'
  }
}

function MultiplyWithUs({ onApply }) {
  const { t } = useTranslation()
  const { data, isLoading, error } = useApiData(getMultiply)
  const [activeIndex, setActiveIndex] = useState(0)
  const items = Array.isArray(data)
    ? data.slice(0, EXPECTED_CATEGORY_COUNT)
    : []
  const activeItem = items[activeIndex]
  const ctaKey = getCtaKey(activeIndex)
  const hasError = Boolean(
    error || items.length < EXPECTED_CATEGORY_COUNT || !activeItem?.steps,
  )

  return (
    <Section
      id="join-us"
      className="relative overflow-hidden bg-purple-dark lg:min-h-dvh lg:pt-[50px] lg:pb-[128px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,#80116B_0%,#560080_55%,#220032_100%)] lg:bg-[linear-gradient(115deg,#D57900_0%,#831066_38%,#4A006D_68%,#230032_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-20 lg:opacity-30"
        style={{ backgroundImage: `url(${yellowGrid})` }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[500px] flex-col lg:max-w-[1440px]">
        {isLoading ? (
          <div className="flex min-h-[620px] items-center justify-center">
            <Spinner />
          </div>
        ) : hasError ? (
          <div className="flex min-h-[620px] items-center justify-center px-5 text-center font-halvar text-[20px] font-bold text-white">
            {t('multiply.loadError')}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-[minmax(400px,0.82fr)_minmax(0,1.18fr)] lg:gap-[58px]">
            <div className="flex min-w-0 flex-col gap-8 lg:justify-between lg:gap-10 lg:pt-[78px]">
              <div
                role="tablist"
                aria-label="Multiply with us"
                className="flex flex-col gap-4 lg:gap-7"
              >
                {items.map(({ title }, index) => (
                  <AudienceSwitchButton
                    key={title}
                    id={index}
                    label={title}
                    isActive={index === activeIndex}
                    onSelect={setActiveIndex}
                    maxWidth={
                      index === 1 ? '486px' : index === 2 ? '435px' : ''
                    }
                  />
                ))}
              </div>

              <img
                src={multiplySnake}
                alt=""
                className="hidden w-full max-w-[560px] translate-y-[134px] self-center object-contain lg:block"
              />
            </div>

            <div className="flex min-w-0 flex-col gap-7 lg:gap-10">
              <h2
                className={
                  TEXT_STYLES.halvar32Bold +
                  'hidden self-end  leading-none font-bold text-yellow uppercase lg:block"'
                }
              >
                multiply with us
              </h2>

              <AudienceCard
                tabId={activeIndex}
                firstStep={activeItem.steps.step_1}
                secondStep={activeItem.steps.step_2}
                ctaLabel={t(`multiplyButtons.${ctaKey}`)}
                onApply={onApply}
              />

              <h2 className="border-t border-white/20 pt-6 text-center font-halvar text-[20px] leading-none font-bold text-yellow uppercase lg:hidden">
                multiply with us
              </h2>
            </div>
          </div>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 hidden lg:block lg:px-[50px]">
        <div className="mx-auto grid w-full max-w-[1440px] lg:grid-cols-[minmax(320px,0.72fr)_minmax(0,1.28fr)] lg:gap-[58px]">
          <div aria-hidden="true" />
          <Footer />
        </div>
      </div>
    </Section>
  )
}

export default MultiplyWithUs
