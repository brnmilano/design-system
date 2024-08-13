import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@brnmilano-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Click me',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
