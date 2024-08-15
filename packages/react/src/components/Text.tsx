import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '2xl' },
      '4xl': { fontSize: '4xl' },
      '5xl': { fontSize: '5xl' },
      '6xl': { fontSize: '6xl' },
      '7xl': { fontSize: '7xl' },
      '8xl': { fontSize: '8xl' },
      '9xl': { fontSize: '9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

/**
 * @description `ComponentProps`, disponibiliza a extração de todas as propriedades
 * que uma tag HTML específica pode receber e aplicá-las a um componente.
 *
 * @description O `ElementType` do React é uma utility type que representa qualquer
 * componente ou tag HTML válida que pode ser usada em JSX. Isso permite que a
 * propriedade `as` seja utilizada para alterar dinamicamente a tag HTML renderizada
 * pelo componente, mantendo a flexibilidade e garantindo a segurança de tipos.
 *
 * `TextProps` herda todas as propriedades que uma tag HTML `p` pode receber,
 * permitindo que o componente `Text` utilize essas propriedades de forma tipada.
 *
 * `TextProps` inclui a propriedade `as`, que é tipada com `ElementType`.
 *
 * @see https://www.totaltypescript.com/react-component-props-type-helper
 */
export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'
