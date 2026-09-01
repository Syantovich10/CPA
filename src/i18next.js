import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const LANGUAGE_STORAGE_KEY = 'lang'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        accessibility: {
          home: 'Home',
          notFoundSnake:
            'Illustration of a coiled purple snake with yellow eyes',
          heroSnake: 'Purple snake',
          openMenu: 'Open menu',
          closeMenu: 'Close menu',
          mainNavigation: 'Main navigation',
          languageSelection: 'Language selection',
        },
        hero: {
          titleFirstLine: 'Practice',
          titleSecondLine: 'makes',
          titleAccent: 'profit',
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
        multiply: {
          loadError: 'Unable to load this section. Please try again later.',
        },
        footer: {
          scrollTop: 'scroll to top',
        },
        notFound: {
          button: 'Oops, take me back',
          mobile: { button: 'take me back' },
        },
        form: {
          close: 'Close form',
          mandatoryNote: {
            before: 'Fields with an asterisk (',
            after: ') are mandatory',
          },
          name: {
            label: 'Your Name',
          },
          contactMethod: {
            label: 'Contact Method',
            error: 'Please select a contact method',
            options: {
              telegram: 'Telegram',
              whatsapp: 'WhatsApp',
              email: 'Email',
            },
          },
          contact: {
            label: 'Your Contact',
            error: 'Please enter your contact',
          },
          submit: 'Submit',
          submitting: 'Submitting...',
          submitError: 'Something went wrong. Please try again.',
          success: {
            title: 'We have received your application!',
            description:
              'We will process your request and get in touch with you',
            done: 'Done',
          },
        },
      },
    },

    ru: {
      translation: {
        accessibility: {
          home: 'На главную',
          notFoundSnake:
            'Иллюстрация свернувшейся фиолетовой змеи с жёлтыми глазами',
          heroSnake: 'Фиолетовая змея',
          openMenu: 'Открыть меню',
          closeMenu: 'Закрыть меню',
          mainNavigation: 'Основная навигация',
          languageSelection: 'Выбор языка',
        },
        hero: {
          titleFirstLine: 'Practice',
          titleSecondLine: 'makes',
          titleAccent: 'profit',
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
        footer: {
          scrollTop: 'наверх',
        },
        notFound: {
          button: 'Ой, верните меня назад',
          mobile: { button: 'верните меня назад' },
        },
        form: {
          close: 'Закрыть форму',
          mandatoryNote: {
            before: 'Поля со звёздочкой (',
            after: ') обязательны для заполнения',
          },
          name: {
            label: 'Ваше имя',
          },
          contactMethod: {
            label: 'Способ связи',
            error: 'Пожалуйста, выберите способ связи',
            options: {
              telegram: 'Telegram',
              whatsapp: 'WhatsApp',
              email: 'Email',
            },
          },
          contact: {
            label: 'Ваш контакт',
            error: 'Пожалуйста, укажите контакт',
          },
          submit: 'Отправить',
          submitting: 'Отправка...',
          submitError: 'Что-то пошло не так. Попробуйте ещё раз.',
          success: {
            title: 'Мы получили вашу заявку!',
            description: 'Мы обработаем ваш запрос и свяжемся с вами',
            done: 'Готово',
          },
        },
      },
    },
  },

  lng: localStorage.getItem(LANGUAGE_STORAGE_KEY) ?? 'en',
  fallbackLng: 'ru',

  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (language) => {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
})

export default i18n
