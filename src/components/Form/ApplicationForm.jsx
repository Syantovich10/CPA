import snakeIcon from '@/assets/icons/snakeicon.svg'
import ContactForm from '@/components/Form/ContactForm'
import FormSuccess from '@/components/Form/FormSuccess'
import { FORM_CLOSE_BUTTON_CLASSES } from '@/config/form'
import useSubmitForm from '@/hooks/useSubmitForm'
import { useTranslation } from 'react-i18next'

function ApplicationForm({ onClose }) {
  const { t } = useTranslation()
  const { submit, isLoading, isSuccess, error } = useSubmitForm()

  return (
    <div className="relative w-full max-w-md rounded-3xl bg-white p-8 sm:p-10">
      <button
        type="button"
        onClick={() => onClose?.()}
        aria-label={t('form.close')}
        className={FORM_CLOSE_BUTTON_CLASSES}
      >
        &times;
      </button>

      <img src={snakeIcon} alt="" className="mx-auto mb-6 h-10 w-auto" />

      {isSuccess ? (
        <FormSuccess onDone={() => onClose?.()} />
      ) : (
        <ContactForm
          onSubmit={submit}
          isLoading={isLoading}
          submitError={error}
        />
      )}
    </div>
  )
}

export default ApplicationForm
