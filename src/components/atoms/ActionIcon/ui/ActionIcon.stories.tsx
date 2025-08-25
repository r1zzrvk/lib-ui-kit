import { Flex, Group, Text } from '@mantine/core'

import type { Meta, StoryObj } from '@storybook/react'

import { ActionIcon } from './ActionIcon'

const meta: Meta<typeof ActionIcon> = {
  title: 'Atoms/Buttons/ActionIcon',
  component: ActionIcon,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'light', 'outline', 'subtle', 'transparent'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'info', 'success', 'warning', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    icon: {
      control: { type: 'select' },
      options: ['heart', 'star', 'user', 'gear', 'x', 'check', 'plus', 'minus'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    weight: {
      control: { type: 'select' },
      options: ['regular', 'bold', 'duotone', 'fill', 'light', 'thin'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: 'heart',
    variant: 'default',
    size: 'md',
  },
}

export const Variants: Story = {
  render: args => (
    <Flex direction="column" gap="md">
      <Flex gap="md" align="center">
        <Text w={100}>Default</Text>
        <ActionIcon {...args} variant="default" />
      </Flex>
      <Flex gap="md" align="center">
        <Text w={100}>Rounded</Text>
        <ActionIcon {...args} variant="filled" radius="round" />
        <ActionIcon {...args} variant="light" radius="round" />
        <ActionIcon {...args} variant="outline" radius="round" />
        <ActionIcon {...args} variant="subtle" radius="round" />
        <ActionIcon {...args} variant="transparent" radius="round" />
      </Flex>
      <Flex gap="md" align="center">
        <Text w={100}>Primary</Text>
        <ActionIcon {...args} variant="filled" color="primary" />
        <ActionIcon {...args} variant="light" color="primary" />
        <ActionIcon {...args} variant="outline" color="primary" />
        <ActionIcon {...args} variant="subtle" color="primary" />
        <ActionIcon {...args} variant="transparent" color="primary" />
      </Flex>
      <Flex gap="md" align="center">
        <Text w={100}>Info</Text>
        <ActionIcon {...args} variant="filled" color="info" />
        <ActionIcon {...args} variant="light" color="info" />
        <ActionIcon {...args} variant="outline" color="info" />
        <ActionIcon {...args} variant="subtle" color="info" />
        <ActionIcon {...args} variant="transparent" color="info" />
      </Flex>
      <Flex gap="md" align="center">
        <Text w={100}>Success</Text>
        <ActionIcon {...args} variant="filled" color="success" />
        <ActionIcon {...args} variant="light" color="success" />
        <ActionIcon {...args} variant="outline" color="success" />
        <ActionIcon {...args} variant="subtle" color="success" />
        <ActionIcon {...args} variant="transparent" color="success" />
      </Flex>
      <Flex gap="md" align="center">
        <Text w={100}>Warning</Text>
        <ActionIcon {...args} variant="filled" color="warning" />
        <ActionIcon {...args} variant="light" color="warning" />
        <ActionIcon {...args} variant="outline" color="warning" />
        <ActionIcon {...args} variant="subtle" color="warning" />
        <ActionIcon {...args} variant="transparent" color="warning" />
      </Flex>
      <Flex gap="md" align="center">
        <Text w={100}>Danger</Text>
        <ActionIcon {...args} variant="filled" color="danger" />
        <ActionIcon {...args} variant="light" color="danger" />
        <ActionIcon {...args} variant="outline" color="danger" />
        <ActionIcon {...args} variant="subtle" color="danger" />
        <ActionIcon {...args} variant="transparent" color="danger" />
      </Flex>
    </Flex>
  ),
  args: {
    icon: 'heart',
    size: 'md',
  },
}

export const Sizes: Story = {
  render: args => (
    <Group align="center">
      <ActionIcon {...args} size="xs" />
      <ActionIcon {...args} size="sm" />
      <ActionIcon {...args} size="md" />
      <ActionIcon {...args} size="lg" />
      <ActionIcon {...args} size="xl" />
    </Group>
  ),
  args: {
    icon: 'heart',
    variant: 'filled',
    color: 'primary',
  },
}

export const Loading: Story = {
  render: args => (
    <Group>
      <ActionIcon {...args} loading variant="filled" color="primary" />
      <ActionIcon {...args} loading variant="light" color="info" />
      <ActionIcon {...args} loading variant="outline" color="success" />
      <ActionIcon {...args} loading variant="subtle" color="warning" />
      <ActionIcon {...args} loading variant="transparent" color="danger" />
      <ActionIcon {...args} loading variant="default" />
    </Group>
  ),
  args: {
    icon: 'heart',
    size: 'md',
  },
}
