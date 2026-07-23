import logoMobile from '@/assets/logo/logo-mobile.svg'
import { TEXT_STYLES } from '@/config/typography'
import { useTranslation } from 'react-i18next'

const NAV_ITEMS = [
  { translationKey: 'team', href: '#team' },
  { translationKey: 'benefits', href: '#benefits' },
  { translationKey: 'joinUs', href: '#join-us' },
]

function Header({ isOpen = false, onToggle }) {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language

  const changeLanguage = (language) => {
    void i18n.changeLanguage(language)
  }

  return (
    <header className="flex items-center justify-between bg-purple-dark px-[10px] py-[10px] lg:absolute lg:top-0 lg:z-50 lg:w-full lg:bg-transparent lg:px-[50px] lg:py-[30px]">
      <img
        src={logoMobile}
        alt="Logo"
        width={isOpen ? 43 : 27}
        height={isOpen ? 40 : 24}
        className="lg:h-[41px] lg:w-[45px]"
      />

      <button
        type="button"
        onClick={onToggle}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className={`lg:hidden ${
          isOpen
            ? `${TEXT_STYLES.halvar24Bold} text-yellow`
            : `${TEXT_STYLES.halvar16Bold} text-yellow uppercase underline decoration-yellow underline-offset-2`
        }`}
      >
        {isOpen ? 'X' : 'MENU'}
      </button>

      <nav
        aria-label="Main navigation"
        className={`${TEXT_STYLES.halvar16Bold} hidden items-center gap-[30px] text-yellow uppercase lg:flex`}
      >
        {NAV_ITEMS.map(({ translationKey, href }) => (
          <a
            key={translationKey}
            href={href}
            className="underline decoration-yellow underline-offset-2"
          >
            {t(`nav.${translationKey}`)}
          </a>
        ))}

        <div className="flex items-center" aria-label="Language selection">
          <button
            type="button"
            onClick={() => changeLanguage('en')}
            aria-pressed={currentLanguage === 'en'}
            className={`underline underline-offset-2 ${
              currentLanguage === 'en'
                ? 'text-white decoration-white'
                : 'text-yellow decoration-yellow'
            }`}
          >
            ENG
          </button>
          <span className="text-yellow">/</span>
          <button
            type="button"
            onClick={() => changeLanguage('ru')}
            aria-pressed={currentLanguage === 'ru'}
            className={`underline underline-offset-2 ${
              currentLanguage === 'ru'
                ? 'text-white decoration-white'
                : 'text-yellow decoration-yellow'
            }`}
          >
            РУС
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
