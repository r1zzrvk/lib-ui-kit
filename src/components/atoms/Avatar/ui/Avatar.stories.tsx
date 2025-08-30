import { ActionIcon } from 'components/atoms/ActionIcon'
import { Flex } from '@mantine/core'

import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'
import { TAvatarProps } from '../lib'

const meta = {
  title: 'Atoms/Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs2', 'xs', 'sm', 'md', 'lg', 'xl', 'xl2'],
    },
    radius: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'round'],
    },
  },
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<TAvatarProps> = args => <Avatar {...args} />

export const Default: Story = {
  render: Template,
  args: {
    size: 'lg',
    radius: 'round',
    src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
  },
}

export const Sizes: Story = {
  args: {
    radius: 'round',
    src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
  },
  render: args => (
    <Flex gap="md">
      <Avatar {...args} size="xs2" />
      <Avatar {...args} size="xs" />
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
      <Avatar {...args} size="xl" />
      <Avatar {...args} size="xl2" />
    </Flex>
  ),
}

export const AvatarButton: Story = {
  args: {
    radius: 'round',
    src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
  },
  render: args => (
    <ActionIcon variant="default" size="lg" radius="round">
      <Avatar {...args} size="lg" />
    </ActionIcon>
  ),
}
