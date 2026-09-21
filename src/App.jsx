import { Routes, Route } from 'react-router-dom'
import LocalizedPage from './components/LocalizedPage/LocalizedPage'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './i18next'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

const NON_DEFAULT_LANGUAGES = SUPPORTED_LANGUAGES.filter(
  (lang) => lang !== DEFAULT_LANGUAGE,
)

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LocalizedPage lang={DEFAULT_LANGUAGE}>
            <HomePage />
          </LocalizedPage>
        }
      />
      {NON_DEFAULT_LANGUAGES.map((lang) => (
        <Route
          key={lang}
          path={`/${lang}`}
          element={
            <LocalizedPage lang={lang}>
              <HomePage />
            </LocalizedPage>
          }
        />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
