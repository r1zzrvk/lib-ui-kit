import { Flex } from '@mantine/core'

import type { Meta, StoryObj } from '@storybook/react'

import { TTitleProps } from '../lib'
import { Title } from './Title'

const meta: Meta<typeof Title> = {
  title: 'Atoms/Typography/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'muted', 'inverted', 'info', 'success', 'warning', 'danger'],
    },
    order: { control: { type: 'select' }, options: [1, 2, 3, 4, 5, 6] },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Title',
    color: 'primary',
    order: 1,
  },
}

export const Colors: Story = {
  render: (args: TTitleProps) => (
    <Flex direction="column" gap="sm">
      <Title {...args} color="primary">
        Primary
      </Title>
      <Title {...args} color="secondary">
        Secondary
      </Title>
      <Title {...args} color="muted">
        Muted
      </Title>
      <Title {...args} color="inverted">
        Inverted
      </Title>
      <Title {...args} color="info">
        Info
      </Title>
      <Title {...args} color="success">
        Success
      </Title>
      <Title {...args} color="warning">
        Warning
      </Title>
      <Title {...args} color="danger">
        Danger
      </Title>
    </Flex>
  ),
  args: {
    children: 'Title',
    order: 2,
  },
}

export const Orders: Story = {
  render: (args: TTitleProps) => (
    <Flex direction="column" gap="sm">
      <Title {...args} order={1}>
        Title 1
      </Title>
      <Title {...args} order={2}>
        Title 2
      </Title>
      <Title {...args} order={3}>
        Title 3
      </Title>
      <Title {...args} order={4}>
        Title 4
      </Title>
      <Title {...args} order={5}>
        Title 5
      </Title>
      <Title {...args} order={6}>
        Title 6
      </Title>
    </Flex>
  ),
  args: {
    children: 'Title',
    color: 'primary',
  },
}
