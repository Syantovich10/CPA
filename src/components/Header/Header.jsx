import mobileBackground from '@/assets/img/mobilebg/mobilebgone.png'
import logoMobile from '@/assets/logo/logo-mobile.svg'
import MobileMenu from '@/components/Header/MobileMenu'
import { NAV_ITEMS } from '@/config/navigation'
import { TEXT_STYLES } from '@/config/typography'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Header({ isOpen = false, onToggle }) {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const header = headerRef.current
    const previouslyFocusedElement = document.activeElement

    if (!header) {
      return undefined
    }

    const handleFocusTrap = (event) => {
      if (event.key !== 'Tab') {
        return
      }

      const focusableElements = [
        ...header.querySelectorAll('a[href], button:not([disabled])'),
      ].filter((element) => element.getClientRects().length > 0)
      const firstElement = focusableElements[0]
      const lastElement = focusableElements.at(-1)

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
      }
    }

    menuButtonRef.current?.focus()
    document.addEventListener('keydown', handleFocusTrap)

    return () => {
      document.removeEventListener('keydown', handleFocusTrap)

      if (previouslyFocusedElement instanceof HTMLElement) {
        previouslyFocusedElement.focus()
      }
    }
  }, [isOpen])

  const changeLanguage = (language) => {
    void i18n.changeLanguage(language)
  }

  return (
    <header
      ref={headerRef}
      role={isOpen ? 'dialog' : undefined}
      aria-modal={isOpen || undefined}
      aria-label={isOpen ? t('accessibility.mainNavigation') : undefined}
      className={`isolate bg-transparent px-[10px] py-[10px] ${
        isOpen
          ? 'fixed inset-0 z-50 flex h-dvh flex-col overflow-y-auto'
          : 'relative z-20 flex items-center justify-between'
      } lg:absolute lg:inset-x-0 lg:top-0 lg:z-50 lg:flex lg:h-auto lg:w-full lg:flex-row lg:items-center lg:justify-between lg:overflow-visible lg:px-[50px] lg:py-[30px]`}
    >
      {isOpen && (
        <img
          src={mobileBackground}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover lg:hidden"
        />
      )}

      <div className="flex w-full items-center justify-between lg:w-auto">
        <Link to="/" aria-label={t('accessibility.home')}>
          <img
            src={logoMobile}
            alt=""
            width={isOpen ? 43 : 27}
            height={isOpen ? 40 : 24}
            className="lg:h-[41px] lg:w-[45px]"
          />
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={onToggle}
          aria-label={
            isOpen ? t('accessibility.closeMenu') : t('accessibility.openMenu')
          }
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className={`lg:hidden ${
            isOpen
              ? `${TEXT_STYLES.halvar24Bold} text-yellow`
              : `${TEXT_STYLES.halvar16Bold} text-yellow uppercase underline decoration-yellow underline-offset-2`
          }`}
        >
          {isOpen ? 'X' : 'MENU'}
        </button>
      </div>

      {isOpen && (
        <MobileMenu
          currentLanguage={currentLanguage}
          onChangeLanguage={changeLanguage}
          onClose={onToggle}
        />
      )}

      <nav
        aria-label={t('accessibility.mainNavigation')}
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
