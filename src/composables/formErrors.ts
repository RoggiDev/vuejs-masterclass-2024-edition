import type { LoginForm } from '@/types/AuthForm'
import type { AuthError } from '@supabase/supabase-js'

export const useFormErrors = () => {
  const serverError = ref('')
  const realtimeErrors = ref()

  const handleServerError = (error: AuthError) => {
    serverError.value =
      error.message === 'Invalid login credentials' ? 'Incorrect email or password' : error.message
  }

  const handleLoginForm = async (formData: LoginForm) => {
    realtimeErrors.value = {
      email: [],
      password: [],
    }

    const { valdiateEmail, valdiatePassword } = await import('@/utils/formValidations')

    const emailErrors = valdiateEmail(formData.email)
    if (emailErrors.length) realtimeErrors.value.email = emailErrors

    const passwordErrors = valdiatePassword(formData.password)
    if (passwordErrors.length) realtimeErrors.value.password = passwordErrors
  }

  return {
    serverError,
    handleServerError,
    realtimeErrors,
    handleLoginForm,
  }
}
