import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        hero: {
          description:
            'We provide effective solutions, tested and refined on our own products and ad budgets',
          button: 'get in touch',
        },
        nav: {
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
        hero: {
          description:
            'Предлагаем эффективные решения, которые уже протестили на своих продуктах и бюджетах',
          button: 'получить профит',
        },
        nav: {
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
