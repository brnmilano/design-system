import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  backgroundColor: '$gray800',
  fontFamily: '$default',
  padding: '$1 $5',
  borderRadius: '$sm',
  border: '1px solid $gray500',
})

export const ToastTitle = styled('h1', {
  fontSize: '$xl',
  fontWeight: '$bold',

  variants: {
    type: {
      success: {
        color: '$ignite300',
      },
      error: {
        color: '$error',
      },
    },
  },

  defaultVariants: {
    type: 'success',
  },
})

export const ToastSubtitle = styled('p', {
  color: '$gray200',
  fontSize: '$sm',
  fontWeight: '$regular',

  defaultVariants: {
    type: 'success',
  },
})
