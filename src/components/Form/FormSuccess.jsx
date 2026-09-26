import { FORM_SUBMIT_BUTTON_CLASSES } from '@/config/form'
import { TEXT_STYLES } from '@/config/typography'
import { useTranslation } from 'react-i18next'

function FormSuccess({ onDone }) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h2 className={`${TEXT_STYLES.halvar20Bold} uppercase text-dark`}>
        {t('form.success.title')}
      </h2>
      <p className="font-stolzl text-[16px] text-dark/70">
        {t('form.success.description')}
      </p>
      <button
        type="button"
        onClick={onDone}
        className={`${FORM_SUBMIT_BUTTON_CLASSES} mt-4`}
      >
        {t('form.success.done')}
      </button>
    </div>
  )
}

export default FormSuccess
