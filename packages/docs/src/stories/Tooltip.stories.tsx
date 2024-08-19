import { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@brnmilano-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: '21 de Outubro - Indisponível',
  },
} as Meta

export const Primary: StoryObj<TooltipProps> = {}
