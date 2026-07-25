import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        accessibility: {
          home: 'Home',
          openMenu: 'Open menu',
          closeMenu: 'Close menu',
          mainNavigation: 'Main navigation',
          languageSelection: 'Language selection',
        },
        hero: {
          description:
            'We provide effective solutions, tested and refined on our own products and ad budgets',
          button: 'get in touch',
        },
        nav: {
          main: 'main',
          team: 'team',
          benefits: 'benefits',
          joinUs: 'join us',
        },
        multiplyButtons: {
          mediaBuyers: 'join the team',
          business: 'launch now',
          partners: 'partner up',
        },
      },
    },

    ru: {
      translation: {
        accessibility: {
          home: 'На главную',
          openMenu: 'Открыть меню',
          closeMenu: 'Закрыть меню',
          mainNavigation: 'Основная навигация',
          languageSelection: 'Выбор языка',
        },
        hero: {
          description:
            'Предлагаем эффективные решения, которые уже протестили на своих продуктах и бюджетах',
          button: 'получить профит',
        },
        nav: {
          main: 'главная',
          team: 'команда',
          benefits: 'преимущества',
          joinUs: 'с нами',
        },
        multiplyButtons: {
          mediaBuyers: 'в команду',
          business: 'запустить проект',
          partners: 'стать партнёром',
        },
      },
    },
  },

  lng: 'ru',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
