import { StoryObj, Meta } from '@storybook/react'
import { AvatarProps, Avatar } from '@brnmilano-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/brnmilano.png',
    alt: 'Bruno Milano',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: 'Bruno Milano',
  },
}
