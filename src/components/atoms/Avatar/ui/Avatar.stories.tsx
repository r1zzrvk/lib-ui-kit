import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'
import { TAvatarProps } from '../lib'

const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<TAvatarProps> = args => <Avatar {...args} />

export const Default: Story = {
  render: Template,
  args: {
    size: 'lg',
    radius: 'xl',
    src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
  },
}

export const Sizes: Story = {
  args: {
    radius: 'xl',
    src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
  },
  render: args => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Avatar {...args} size="xs" />
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
      <Avatar {...args} size="xl" />
    </div>
  ),
}
