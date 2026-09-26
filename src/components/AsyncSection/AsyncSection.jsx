import Spinner from '@/components/Spinner/Spinner'
import {
  ASYNC_ERROR_TEXT_CLASSES,
  ASYNC_STATE_WRAPPER_CLASSES,
} from '@/config/asyncState'
import { useTranslation } from 'react-i18next'

function AsyncSection({
  isLoading,
  error,
  data,
  minHeight = 'min-h-dvh',
  errorMessage,
  children,
}) {
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className={`${ASYNC_STATE_WRAPPER_CLASSES} ${minHeight}`}>
        <Spinner />
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className={`${ASYNC_STATE_WRAPPER_CLASSES} ${minHeight}`}>
        <p className={ASYNC_ERROR_TEXT_CLASSES}>
          {errorMessage ?? t('multiply.loadError')}
        </p>
      </div>
    )
  }

  return children(data)
}

export default AsyncSection
