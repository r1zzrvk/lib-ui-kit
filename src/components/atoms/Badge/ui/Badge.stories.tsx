import { Flex, Text } from '@mantine/core'

import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { Icon } from '@components/atoms'

import { TBadgeProps } from '../lib'
import { Badge } from './Badge'

const meta = {
  title: 'Atoms/Data Display/Badge',
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
    <Flex direction="column" gap="md">
      <Flex gap="md" align="center">
        <Text w={100}>Primary</Text>
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
      <Flex gap="md" align="center">
        <Text w={100}>Info</Text>
        <Badge {...args} variant="filled" color="info">
          Filled
        </Badge>
        <Badge {...args} variant="light" color="info">
          Light
        </Badge>
        <Badge {...args} variant="outline" color="info">
          Outline
        </Badge>
        <Badge {...args} variant="subtle" color="info">
          Subtle
        </Badge>
        <Badge {...args} variant="transparent" color="info">
          Transparent
        </Badge>
      </Flex>
      <Flex gap="md" align="center">
        <Text w={100}>Success</Text>
        <Badge {...args} variant="filled" color="success">
          Filled
        </Badge>
        <Badge {...args} variant="light" color="success">
          Light
        </Badge>
        <Badge {...args} variant="outline" color="success">
          Outline
        </Badge>
        <Badge {...args} variant="subtle" color="success">
          Subtle
        </Badge>
        <Badge {...args} variant="transparent" color="success">
          Transparent
        </Badge>
      </Flex>
      <Flex gap="md" align="center">
        <Text w={100}>Warning</Text>
        <Badge {...args} variant="filled" color="warning">
          Filled
        </Badge>
        <Badge {...args} variant="light" color="warning">
          Light
        </Badge>
        <Badge {...args} variant="outline" color="warning">
          Outline
        </Badge>
        <Badge {...args} variant="subtle" color="warning">
          Subtle
        </Badge>
        <Badge {...args} variant="transparent" color="warning">
          Transparent
        </Badge>
      </Flex>
      <Flex gap="md" align="center">
        <Text w={100}>Danger</Text>
        <Badge {...args} variant="filled" color="danger">
          Filled
        </Badge>
        <Badge {...args} variant="light" color="danger">
          Light
        </Badge>
        <Badge {...args} variant="outline" color="danger">
          Outline
        </Badge>
        <Badge {...args} variant="subtle" color="danger">
          Subtle
        </Badge>
        <Badge {...args} variant="transparent" color="danger">
          Transparent
        </Badge>
      </Flex>
    </Flex>
  ),
  args: {
    size: 'md',
  },
}

export const Sizes: Story = {
  render: args => (
    <Flex gap="md" align="center">
      <Badge {...args} size="xs">
        Extra small
      </Badge>
      <Badge {...args} size="sm">
        Small
      </Badge>
      <Badge {...args} size="md">
        Medium
      </Badge>
      <Badge {...args} size="lg">
        Large
      </Badge>
      <Badge {...args} size="xl">
        Extra large
      </Badge>
    </Flex>
  ),
  args: {
    variant: 'filled',
    color: 'primary',
  },
}

export const WithIcon: Story = {
  render: args => (
    <Flex gap="md" align="center">
      <Badge {...args} leftSection={<Icon icon="check" size="xs" weight="regular" />}>
        With icon
      </Badge>
      <Badge {...args} rightSection={<Icon icon="check" size="xs" weight="regular" />}>
        With icon
      </Badge>
    </Flex>
  ),
  args: {
    variant: 'filled',
    color: 'primary',
    size: 'md',
  },
}
