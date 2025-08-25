import { Flex } from '@mantine/core'

import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { TBadgeProps } from '../lib'
import { Badge } from './Badge'

const meta = {
  title: 'Atoms/Indicators/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'light', 'outline', 'subtle', 'transparent'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'info', 'success', 'warning', 'danger'],
    },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<TBadgeProps> = args => {
  return <Badge {...args}>{args.children}</Badge>
}

export const Default: Story = {
  render: Template,
  args: {
    children: 'Badge',
    size: 'md',
    variant: 'filled',
    color: 'primary',
  },
}

export const Variants: Story = {
  render: args => (
    <Flex gap="md" align="center">
      <Badge {...args} variant="filled" color="primary">
        Filled
      </Badge>
      <Badge {...args} variant="light" color="primary">
        Light
      </Badge>
      <Badge {...args} variant="outline" color="primary">
        Outline
      </Badge>
      <Badge {...args} variant="subtle" color="primary">
        Subtle
      </Badge>
      <Badge {...args} variant="transparent" color="primary">
        Transparent
      </Badge>
    </Flex>
  ),
  args: {
    size: 'md',
  },
}

export const Sizes: Story = {
  render: args => (
    <Flex gap="md" align="center">
      <Badge {...args} size="xs" color="primary">
        Extra small
      </Badge>
      <Badge {...args} size="sm" color="primary">
        Small
      </Badge>
      <Badge {...args} size="md" color="primary">
        Medium
      </Badge>
      <Badge {...args} size="lg" color="primary">
        Large
      </Badge>
      <Badge {...args} size="xl" color="primary">
        Extra large
      </Badge>
    </Flex>
  ),
  args: {
    variant: 'filled',
  },
}
