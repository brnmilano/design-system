import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@brnmilano-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    subtitle: 'Quarta-feira, 23 de Outubro às 16h',
    type: 'success',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const Error: StoryObj<ToastProps> = {
  args: {
    title: 'Erro ao realizar agendamento',
    subtitle: 'Tente novamente mais tarde',
    type: 'error',
  },
}
