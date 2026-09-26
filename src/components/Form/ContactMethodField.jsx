import Select from '@/components/Form/Select'
import { CONTACT_METHODS } from '@/config/contactMethods'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

function ContactMethodField({ control, error }) {
  const { t } = useTranslation()

  const contactMethodOptions = CONTACT_METHODS.map((method) => ({
    value: method.value,
    label: t(`form.contactMethod.options.${method.translationKey}`),
  }))

  return (
    <Controller
      name="method"
      control={control}
      rules={{ required: t('form.contactMethod.error') }}
      render={({ field }) => (
        <Select
          id="contactMethod"
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          required
          placeholder={t('form.contactMethod.label')}
          options={contactMethodOptions}
          error={error}
        />
      )}
    />
  )
}

export default ContactMethodField
