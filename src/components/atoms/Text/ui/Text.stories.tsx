import { Flex } from '@mantine/core'

import type { Meta, StoryObj } from '@storybook/react'

import { TTextProps } from '../lib'
import { Text } from './Text'

const meta: Meta<typeof Text> = {
  title: 'Atoms/Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'muted', 'inverted', 'info', 'success', 'warning', 'danger'],
    },
    size: { control: { type: 'select' }, options: ['xs2', 'xs', 'sm', 'md', 'lg', 'xl', 'xl2'] },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Text',
    color: 'primary',
    size: 'md',
  },
}

export const Colors: Story = {
  render: (args: TTextProps) => (
    <Flex direction="column" gap="sm">
      <Text {...args} color="primary">
        Primary
      </Text>
      <Text {...args} color="secondary">
        Secondary
      </Text>
      <Text {...args} color="muted">
        Muted
      </Text>
      <Text {...args} color="inverted">
        Inverted
      </Text>
      <Text {...args} color="info">
        Info
      </Text>
      <Text {...args} color="success">
        Success
      </Text>
      <Text {...args} color="warning">
        Warning
      </Text>
      <Text {...args} color="danger">
        Danger
      </Text>
    </Flex>
  ),
  args: {
    children: 'Text',
  },
}

export const Variants: Story = {
  render: (args: TTextProps) => (
    <Flex direction="column" gap="sm">
      <Text {...args} size="xs2">
        Text XS2
      </Text>
      <Text {...args} size="xs">
        Text XS
      </Text>
      <Text {...args} size="sm">
        Text SM
      </Text>
      <Text {...args} size="md">
        Text MD
      </Text>
      <Text {...args} size="lg">
        Text LG
      </Text>
      <Text {...args} size="xl">
        Text XL
      </Text>
      <Text {...args} size="xl2">
        Text XL2
      </Text>
    </Flex>
  ),
  args: {
    children: 'Text',
    color: 'primary',
  },
}
