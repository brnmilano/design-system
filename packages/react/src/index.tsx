/**
 * export * from './styles'
 */
import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$sm',
  border: 0,
  fontWeight: '$bold',
  color: '$white',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',

  '&:hover': {
    backgroundColor: '$ignite600',
  },

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },

      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

/**
 * @description Com o ComponentProps do react, o componente herda quais são as
 * propriedades que um componente pode receber nativamente.
 * 
 * No caso do Button, ele pode receber todas as propriedades de um botão nativo
 * do HTML.
 * 
 * @see https://www.totaltypescript.com/react-component-props-type-helper
 */
export type ButtonProps = ComponentProps<typeof Button>
