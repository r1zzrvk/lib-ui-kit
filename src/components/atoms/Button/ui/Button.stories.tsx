import { fn } from '@storybook/test'
import { Flex, Text } from '@mantine/core'

import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { Icon } from '@components/atoms'

import { TButtonProps } from '../lib'
import { Button } from './Button'

const meta = {
  title: 'Atoms/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
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
      options: ['primary', 'info', 'success', 'warning', 'danger', 'muted'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<TButtonProps> = args => {
  return <Button {...args}>{args.children}</Button>
}

export const Default: Story = {
  render: Template,
  args: {
    children: 'Default',
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
        <Button {...args} variant="filled" color="primary">
          Filled
        </Button>
        <Button {...args} variant="light" color="primary">
          Light
        </Button>
        <Button {...args} variant="outline" color="primary">
          Outline
        </Button>
        <Button {...args} variant="subtle" color="primary">
          Subtle
        </Button>
        <Button {...args} variant="transparent" color="primary">
          Transparent
        </Button>
      </Flex>
      <Flex gap="md" align="center">
        <Text w={100}>Info</Text>
        <Button {...args} variant="filled" color="info">
          Filled
        </Button>
        <Button {...args} variant="light" color="info">
          Light
        </Button>
        <Button {...args} variant="outline" color="info">
          Outline
        </Button>
        <Button {...args} variant="subtle" color="info">
          Subtle
        </Button>
        <Button {...args} variant="transparent" color="info">
          Transparent
        </Button>
      </Flex>
      <Flex gap="md" align="center">
        <Text w={100}>Success</Text>
        <Button {...args} variant="filled" color="success">
          Filled
        </Button>
        <Button {...args} variant="light" color="success">
          Light
        </Button>
        <Button {...args} variant="outline" color="success">
          Outline
        </Button>
        <Button {...args} variant="subtle" color="success">
          Subtle
        </Button>
        <Button {...args} variant="transparent" color="success">
          Transparent
        </Button>
      </Flex>
      <Flex gap="md" align="center">
        <Text w={100}>Warning</Text>
        <Button {...args} variant="filled" color="warning">
          Filled
        </Button>
        <Button {...args} variant="light" color="warning">
          Light
        </Button>
        <Button {...args} variant="outline" color="warning">
          Outline
        </Button>
        <Button {...args} variant="subtle" color="warning">
          Subtle
        </Button>
        <Button {...args} variant="transparent" color="warning">
          Transparent
        </Button>
      </Flex>
      <Flex gap="md" align="center">
        <Text w={100}>Danger</Text>
        <Button {...args} variant="filled" color="danger">
          Filled
        </Button>
        <Button {...args} variant="light" color="danger">
          Light
        </Button>
        <Button {...args} variant="outline" color="danger">
          Outline
        </Button>
        <Button {...args} variant="subtle" color="danger">
          Subtle
        </Button>
        <Button {...args} variant="transparent" color="danger">
          Transparent
        </Button>
      </Flex>
      <Flex gap="md" align="center">
        <Text w={100}>Disabled</Text>
        <Button {...args} variant="filled" disabled>
          Filled
        </Button>
        <Button {...args} variant="light" disabled>
          Light
        </Button>
        <Button {...args} variant="outline" disabled>
          Outline
        </Button>
        <Button {...args} variant="subtle" disabled>
          Subtle
        </Button>
        <Button {...args} variant="transparent" disabled>
          Transparent
        </Button>
      </Flex>
      <Flex gap="md" align="center">
        <Text w={100}>Loading</Text>
        <Button {...args} variant="filled" color="primary" loading>
          Filled
        </Button>
        <Button {...args} variant="light" color="primary" loading>
          Light
        </Button>
        <Button {...args} variant="outline" color="primary" loading>
          Outline
        </Button>
        <Button {...args} variant="subtle" color="primary" loading>
          Subtle
        </Button>
        <Button {...args} variant="transparent" color="primary" loading>
          Transparent
        </Button>
      </Flex>
    </Flex>
  ),
  args: {
    size: 'md',
  },
}

export const Sizes: Story = {
  render: args => {
    return (
      <Flex gap="md" align="center" wrap="wrap">
        <Button size="xs" rightSection={<Icon icon="bookmark" size={args.size || 'xs'} weight="regular" />} {...args}>
          Extra small
        </Button>
        <Button size="sm" rightSection={<Icon icon="bookmark" size={args.size || 'sm'} weight="regular" />} {...args}>
          Small
        </Button>
        <Button size="md" rightSection={<Icon icon="bookmark" size={args.size || 'md'} weight="regular" />} {...args}>
          Medium
        </Button>
        <Button size="lg" rightSection={<Icon icon="bookmark" size={args.size || 'lg'} weight="regular" />} {...args}>
          Large
        </Button>
        <Button size="xl" rightSection={<Icon icon="bookmark" size={args.size || 'xl'} weight="regular" />} {...args}>
          Extra large
        </Button>
      </Flex>
    )
  },
  args: {
    variant: 'filled',
  },
}
