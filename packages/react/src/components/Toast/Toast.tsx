import toast, { Toaster } from 'react-hot-toast'
import { Button } from '../Button'
import { ToastContainer, ToastSubtitle, ToastTitle } from './styles'

export interface ToastProps {
  title: string
  subtitle: string
  type: 'success' | 'error'
}

export function Toast({ title, subtitle, type = 'success' }: ToastProps) {
  const handleToast = () => {
    toast.custom(
      () => (
        <ToastContainer>
          <ToastTitle type={type}>{title}</ToastTitle>

          <ToastSubtitle>{subtitle}</ToastSubtitle>
        </ToastContainer>
      ),
      {
        duration: 2000,
      },
    )
  }

  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />

      <Button onClick={handleToast}>Toast me!</Button>
    </div>
  )
}
