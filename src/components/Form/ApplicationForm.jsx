import snakeIcon from '@/assets/icons/purplesnakeicon.svg'
import ContactForm from '@/components/Form/ContactForm'
import FormSuccess from '@/components/Form/FormSuccess'
import { FORM_CLOSE_BUTTON_CLASSES } from '@/config/form'
import useSubmitForm from '@/hooks/useSubmitForm'
import { useTranslation } from 'react-i18next'

function ApplicationForm({ onClose }) {
  const { t } = useTranslation()
  const { submit, isLoading, isSuccess, error } = useSubmitForm()

  return (
    <div className="relative w-full max-w-[560px] rounded-xl bg-white px-5 py-15 sm:px-[30px]">
      <button
        type="button"
        onClick={() => onClose?.()}
        aria-label={t('form.close')}
        className={FORM_CLOSE_BUTTON_CLASSES}
      >
        X
      </button>

      <img src={snakeIcon} alt="Purple head of a cartoon snake" className="mx-auto mb-10 w-auto" />

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
