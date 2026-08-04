import Select from '@/components/Form/Select'
import { CONTACT_METHODS } from '@/config/contactMethods'
import {
  FORM_ERROR_CLASSES,
  FORM_INPUT_CLASSES,
  FORM_SUBMIT_BUTTON_CLASSES,
} from '@/config/form'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

function ContactForm({ onSubmit, isLoading, submitError }) {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      contactMethod: '',
      contact: '',
    },
  })

  const contactValue = watch('contact')

  const contactMethodOptions = CONTACT_METHODS.map((method) => ({
    value: method.value,
    label: t(`form.contactMethod.options.${method.translationKey}`),
  }))

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5"
    >
      <p className="font-stolzl text-[14px] text-dark/70">
        {t('form.mandatoryNote.before')}
        <span className="text-purple">*</span>
        {t('form.mandatoryNote.after')}
      </p>

      <div>
        <label htmlFor="name" className="sr-only">
          {t('form.name.label')}
        </label>
        <input
          id="name"
          type="text"
          placeholder={t('form.name.label')}
          className={FORM_INPUT_CLASSES}
          {...register('name')}
        />
      </div>

      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="sm:w-1/2">
          <Controller
            name="contactMethod"
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
                error={errors.contactMethod?.message}
              />
            )}
          />
        </div>

        <div className="relative sm:w-1/2">
          <label htmlFor="contact" className="sr-only">
            {t('form.contact.label')}
          </label>
          <input
            id="contact"
            type="text"
            className={FORM_INPUT_CLASSES}
            {...register('contact', { required: t('form.contact.error') })}
          />
          {!contactValue && (
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center font-stolzl text-[14px] text-dark/40">
              {t('form.contact.label')}
              <span className="ml-0.5 text-purple">*</span>
            </span>
          )}
          {errors.contact && (
            <p className={FORM_ERROR_CLASSES}>{errors.contact.message}</p>
          )}
        </div>
      </div>

      {submitError && (
        <p className={FORM_ERROR_CLASSES}>{t('form.submitError')}</p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className={`${FORM_SUBMIT_BUTTON_CLASSES} mx-auto`}
      >
        {isLoading ? t('form.submitting') : t('form.submit')}
      </button>
    </form>
  )
}

export default ContactForm
