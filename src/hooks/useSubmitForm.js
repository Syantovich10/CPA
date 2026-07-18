import { useState } from 'react'
import { sendForm } from '../api/endpoints'

function useSubmitForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState(null)

  async function submit(formData) {
    setIsLoading(true)
    setIsSuccess(false)
    setError(null)

    try {
      await sendForm(formData)
      setIsSuccess(true)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  return { submit, isLoading, isSuccess, error }
}

export default useSubmitForm
