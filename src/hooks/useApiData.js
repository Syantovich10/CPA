import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const SUPPORTED_LANGUAGES = ['ru', 'en', 'ua']
const FALLBACK_LANGUAGE = 'en'

function useApiData(fetcher) {
  const { i18n } = useTranslation()
  const lang = SUPPORTED_LANGUAGES.includes(i18n.language)
    ? i18n.language
    : FALLBACK_LANGUAGE

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    setIsLoading(true)
    setError(null)

    fetcher(lang, { signal: controller.signal })
      .then((json) => {
        setData(json)
        setIsLoading(false)
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        setError(err)
        setIsLoading(false)
      })

    return () => controller.abort()
  }, [fetcher, lang])

  return { data, isLoading, error }
}

export default useApiData
