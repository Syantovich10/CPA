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
        multiBenefits: {
          loadError: 'Unable to load this section. Please try again later.',
        },
        multiply: {
          loadError: 'Unable to load this section. Please try again later.',
        },
        footer: {
          scrollTop: 'scroll to top',
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
        multiBenefits: {
          loadError: 'Не удалось загрузить секцию. Попробуйте позже.',
        },
        multiply: {
          loadError: 'Не удалось загрузить секцию. Попробуйте позже.',
        },
        footer: {
          scrollTop: 'наверх',
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
    ua: {
      translation: {
        multiplyButtons: {
          mediaBuyers: 'в команду',
          business: 'запустити проєкт',
          partners: 'стати партнером',
        },
        multiply: {
          loadError: 'Не вдалося завантажити секцію. Спробуйте пізніше.',
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
