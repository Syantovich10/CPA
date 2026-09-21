import { useLayoutEffect } from 'react'
import { useTranslation } from 'react-i18next'

function LocalizedPage({ lang, children }) {
  const { i18n } = useTranslation()

  useLayoutEffect(() => {
    if (i18n.language !== lang) {
      void i18n.changeLanguage(lang)
    }
  }, [lang, i18n])

  return children
}

export default LocalizedPage
