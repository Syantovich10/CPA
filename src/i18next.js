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
        multiTasks: {
          introBefore: 'We run an ',
          introHighlight: 'in-house team',
          introAfter:
            ' of media buyers, designers, creatives, developers, and copywriters — no middlemen, no outsourcing',
          features: {
            infrastructure: {
              title: 'Flexible infrastructure',
              description:
                'Custom tools, fast integrations and scalable architecture',
            },
            creatives: {
              title: 'High-performing creatives',
              description: 'Scroll-stopping ads tailored to your vertical',
            },
            copywriting: {
              title: 'Compelling copywriting',
              description:
                'Messaging that hooks, sells, and drives funnel growth',
            },
            mediaBuying: {
              title: 'Adaptive media buying',
              description: 'No wasted budgets - we test, tweak, and scale',
            },
            support: {
              title: 'Full-cycle support',
              description:
                'From setup to scaling - we support you every step of the way',
            },
          },
        },
        footer: {
          scrollTop: 'scroll to top',
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
        multiTasks: {
          introBefore: 'У нас есть своя команда байеров, дизайнеров, креаторов, разработчиков, чтобы закрыть любой запрос',
          introHighlight: ' in-house',
          introAfter:
            ': без посредников и подрядчиков',
          features: {
            infrastructure: {
              title: 'Гибкая инфраструктура',
              description:
                'Кастомные решения, моментальные интеграции, масштабирование',
            },
            creatives: {
              title: 'Конверсионные креативы',
              description: 'Креативы, которые цепляют с первого взгляда',
            },
            copywriting: {
              title: 'Притягательный копирайтинг',
              description:
                'Тексты, которые конвертят на каждом этапе воронки',
            },
            mediaBuying: {
              title: 'Адаптивный медиабаинг',
              description:
                'Оптимизация в реальном времени: максимум ROI — минимум затрат',
            },
            support: {
              title: 'Всесторонняя поддержка',
              description:
                'От идеи до масштабирования — мы рядом на каждом этапе',
            },
          },
        },
        footer: {
          scrollTop: 'наверх',
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
