import { ComponentProps } from 'react'
import { TooltipBox, TooltipCard, TooltipText } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipBox> {
  children: string
}

export function Tooltip({ children }: TooltipProps) {
  return (
    <>
      <TooltipCard>
        <TooltipText>
          <p>Tooltip</p>
        </TooltipText>

        <TooltipBox>
          <p>{children}</p>
        </TooltipBox>
      </TooltipCard>
    </>
  )
}

Tooltip.displayName = 'Tooltip'
