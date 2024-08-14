import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      '2xl': { fontSize: '$5xl' },
      '3xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
      '5xl': { fontSize: '$8xl' },
      '6xl': { fontSize: '$9xl' },
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
 * `HeadingProps` herda todas as propriedades que uma tag HTML `h2` pode receber,
 * permitindo que o componente `Heading` utilize essas propriedades de forma tipada.
 *
 * `HeadingProps` inclui a propriedade `as`, que é tipada com `ElementType`.
 *
 * @see https://www.totaltypescript.com/react-component-props-type-helper
 */
export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}
