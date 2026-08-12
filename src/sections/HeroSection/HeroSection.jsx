import desktopBackground from '@/assets/img/dekstopbg/dekstopbgone.png'
import desktopSnake from '@/assets/img/hero-snake-desktop.png'
import mobileSnake from '@/assets/img/hero-snake-mobile.png'
import mobileBackground from '@/assets/img/mobilebg/mobilebgone.png'
import ThreeDButton from '@/components/Button/ThreeDButton'
import Section from '@/components/Section/Section'
import { SOCIAL_LINKS } from '@/config/socialLinks'
import { HEADING_STYLES, TEXT_STYLES } from '@/config/typography'
import { useTranslation } from 'react-i18next'

function HeroSection() {
  const { t } = useTranslation()

  return (
    <Section className="relative isolate h-[calc(100dvh-44px)] !min-h-[calc(100dvh-44px)] overflow-hidden !px-0 !py-0 text-white md:h-dvh md:!min-h-dvh">
      <picture className="absolute inset-0 -z-20">
        <source media="(min-width: 1024px)" srcSet={desktopBackground} />
        <img
          src={mobileBackground}
          alt=""
          className="h-full w-full object-cover"
        />
      </picture>

      <div className="relative flex min-h-0 flex-1 flex-col px-[14px] pt-[70px] md:pt-[150px] lg:grid lg:grid-cols-[minmax(470px,0.9fr)_minmax(0,1.1fr)] lg:grid-rows-[1fr_auto] lg:px-[50px] lg:pt-[120px] lg:pb-[50px] xl:grid-cols-[minmax(560px,0.9fr)_minmax(0,1.1fr)]">
        <div className="z-10 shrink-0 lg:self-center">
          <h1
            id="hero-title"
            className={`${HEADING_STYLES.h1} uppercase lg:text-[60px] lg:tracking-[-1.74px] xl:text-[80px]`}
          >
            <span className="block">{t('hero.titleFirstLine')}</span>
            <span className="block whitespace-nowrap">
              {t('hero.titleSecondLine')}{' '}
              <span className="text-yellow">{t('hero.titleAccent')}</span>
            </span>
          </h1>

          <p
            className={`${TEXT_STYLES.stolzl20Regular} mt-[12px] max-w-[480px]`}
          >
            {t('hero.description')}
          </p>

          <ThreeDButton
            className="mt-[30px] h-[52px] w-[210px] text-[13px] lg:h-[85px] lg:w-[423px] lg:text-[16px]"
            onClick={() => {
              document.querySelector('#join-us')?.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            {t('hero.button')}
          </ThreeDButton>
        </div>

        <div className="-mx-[14px] mt-auto flex min-h-0 w-[calc(100%+28px)] flex-1 -translate-y-[70px] justify-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:-ml-[80px] lg:max-h-[calc(100dvh-170px)] lg:w-[calc(100%+80px)] lg:translate-y-0 lg:items-end lg:justify-end xl:-ml-[120px] xl:w-[calc(100%+120px)]">
          <picture className="flex h-full min-h-0 w-full items-end justify-center lg:justify-end">
            <source media="(min-width: 1024px)" srcSet={desktopSnake} />
            <img
              src={mobileSnake}
              alt={t('accessibility.heroSnake')}
              className="max-h-full w-auto max-w-full object-contain lg:max-h-[calc(100dvh-170px)] lg:object-right-bottom"
            />
          </picture>
        </div>

        <ul className="hidden items-center gap-[30px] self-end lg:flex">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-[30px] w-[30px] items-center justify-center transition-transform hover:scale-110 focus-visible:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <img
                  src={icon}
                  alt=""
                  className="h-[30px] w-[30px] object-contain brightness-0 invert"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default HeroSection
