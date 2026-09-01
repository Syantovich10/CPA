import arrowIcon from '@/assets/icons/arrow.svg'
import { useTranslation } from 'react-i18next'
import { TEXT_STYLES } from '@/config/typography.js'
import { SOCIAL_LINKS } from '@/config/socialLinks.js'

function Footer() {
  const { t } = useTranslation()

  const linkClass = `
    ${TEXT_STYLES.halvar20Bold}
    text-[clamp(16px,calc(6.154px+0.962vw),20px)]
    text-yellow
    uppercase
    whitespace-nowrap
    group
    hover:text-white
  `

  const underlinedLinkClass = `${linkClass} underline`

  return (
    <footer className="hidden md:block">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          items-center
          justify-between
          py-6
          pl-[10px]
          gap-6
        "
      >
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a href={href} key={label} className={underlinedLinkClass}>
              {label}
            </a>
          ))}
        </div>

        <a href="#top" className={linkClass}>
          <span className="underline">{t('footer.scrollTop')}</span>
          <img
            src={arrowIcon}
            alt="arrowTop"
            className="ml-2 inline-block size-7.5 pb-1.5 group-hover:brightness-0 group-hover:invert"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
