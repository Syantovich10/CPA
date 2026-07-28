import { MOBILE_NAV_ITEMS } from '@/config/navigation'
import { SOCIAL_LINKS } from '@/config/socialLinks'
import { TEXT_STYLES } from '@/config/typography'
import { useTranslation } from 'react-i18next'

function MobileMenu({ currentLanguage, onChangeLanguage, onClose }) {
  const { t } = useTranslation()

  const getLanguageClassName = (language) =>
    `underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
      currentLanguage === language
        ? 'text-white no-underline'
        : 'text-yellow underline decoration-yellow hover:text-white hover:decoration-white focus-visible:text-white focus-visible:decoration-white'
    }`

  return (
    <div
      id="mobile-menu"
      className="flex min-h-0 w-full flex-1 overflow-y-auto px-[10px] md:hidden"
    >
      <div className="my-auto flex w-full flex-col items-center py-[30px] text-center">
        <nav aria-label={t('accessibility.mainNavigation')}>
          <ul
            className={`${TEXT_STYLES.halvar32Bold} flex flex-col gap-[50px] text-yellow uppercase`}
          >
            {MOBILE_NAV_ITEMS.map(({ translationKey, href }) => (
              <li key={translationKey}>
                <a
                  href={href}
                  onClick={onClose}
                  className="underline decoration-yellow underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:text-white focus-visible:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {t(`nav.${translationKey}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="mt-[50px] flex items-center justify-center gap-[30px]">
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

        <div
          className={`${TEXT_STYLES.halvar32Bold} mt-[50px] flex items-center justify-center`}
          aria-label={t('accessibility.languageSelection')}
        >
          <button
            type="button"
            onClick={() => onChangeLanguage('en')}
            aria-pressed={currentLanguage === 'en'}
            className={getLanguageClassName('en')}
          >
            ENG
          </button>
          <span className="text-yellow">/</span>
          <button
            type="button"
            onClick={() => onChangeLanguage('ru')}
            aria-pressed={currentLanguage === 'ru'}
            className={getLanguageClassName('ru')}
          >
            РУС
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
