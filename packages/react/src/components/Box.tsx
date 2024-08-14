import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  color: '$white',
  fontFamily: '$default',
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
 * `BoxProps` herda todas as propriedades que uma tag HTML `div` pode receber,
 * permitindo que o componente `Box` utilize essas propriedades de forma tipada.
 *
 * `BoxProps` inclui a propriedade `as`, que é tipada com `ElementType`.
 *
 * @see https://www.totaltypescript.com/react-component-props-type-helper
 */
export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}
