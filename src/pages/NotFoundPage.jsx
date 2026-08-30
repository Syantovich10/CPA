import bgDesktop from '@/assets/img/dekstopbg/dekstopbgone.png'
import bgMobile from '@/assets/img/mobilebg/mobilebgfive.png'
import snakeIllustration from '@/assets/img/notfound-snake.png'
import snakeIllustrationMobile from '@/assets/img/notfound-snake-mobile.png'
import logoMobile from '@/assets/logo/logo-mobile.svg'
import ThreeDButton from '@/components/Button/ThreeDButton'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

const NOT_FOUND_TITLE = '404'

function NotFoundPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const digits = NOT_FOUND_TITLE.split('')

  return (
    <section className="min-h-dvh h-dvh">
      {/* Backgrounds are static placeholders for now — animation comes later, same as other sections */}
      <img
        src={bgMobile}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      />
      <img
        src={bgDesktop}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
      />

      <Link
        to="/"
        aria-label={t('accessibility.home')}
        className="absolute top-2.5 left-4 z-10 md:top-[3.33vh] md:left-[3.47vw]"
      >
        <img src={logoMobile} alt="" className="h-6 w-auto md:h-8" />
      </Link>

      {/* Mobile / tablet layout, matching the dedicated mobile mockup */}
      <div className="relative z-10 h-full pt-[90px] px-4 pb-10 text-center md:hidden">
        <h1 className="flex flex-col leading-[0.8]">
          {digits.map((digit, index) => (
            <span
              key={index}
              className="font-halvar text-[clamp(72px,45.8vw,180px)] font-bold tracking-[-1.04px] text-white uppercase"
            >
              {digit}
            </span>
          ))}
        </h1>

        <ThreeDButton
          onClick={() => navigate('/')}
          className="h-[60px] w-[251px] mt-8"
        >
          <span className="text-[18px] font-bold leading-[normal] tracking-[3.6px]">
            {t('notFound.mobile.button')}
          </span>
        </ThreeDButton>
      </div>

      <img
        src={snakeIllustrationMobile}
        alt={t('accessibility.notFoundSnake')}
        className="absolute bottom-[-139px] right-0 md:hidden"
      />

      {/* Desktop layout */}
      <div className="relative z-10 hidden md:flex h-full flex-col justify-center">
        <h1 className="text-center font-halvar text-[clamp(120px,26.31vw,380px)] leading-[0.9] font-bold tracking-[-2.64px] text-white uppercase">
          {NOT_FOUND_TITLE}
        </h1>

        <img
          src={snakeIllustration}
          alt={t('accessibility.notFoundSnake')}
          className="absolute bottom-0 left-[0] md:min-w-[500px] lg:min-w-auto w-[37.56vw] -z-5"
        />

        <ThreeDButton
          onClick={() => navigate('/')}
          className="h-[82px] w-[420px] mx-auto !block mt-16"
        >
          <span className="text-[23px] font-bold leading-[normal] tracking-[4.6px]">
            {t('notFound.button')}
          </span>
        </ThreeDButton>
      </div>
    </section>
  )
}

export default NotFoundPage
