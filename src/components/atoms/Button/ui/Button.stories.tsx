import { fn } from '@storybook/test'

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
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<TButtonProps> = args => {
  return <Button {...args}>{args.children}</Button>
}

export const Primary: Story = {
  render: Template,
  args: {
    children: 'Primary',
    size: 'lg',
    variant: 'filled',
  },
}

export const Secondary: Story = {
  render: Template,
  args: {
    children: 'Secondary',
    size: 'lg',
    variant: 'light',
  },
}

export const Transparent: Story = {
  render: Template,
  args: {
    children: 'Transparent',
    size: 'lg',
    variant: 'subtle',
  },
}

export const Gradient: Story = {
  render: Template,
  args: {
    children: 'Gradient',
    size: 'lg',
    variant: 'gradient',
  },
}

export const Disabled: Story = {
  render: Template,
  args: {
    children: 'Disabled',
    size: 'lg',
    variant: 'filled',
    disabled: true,
  },
}

export const Loading: Story = {
  render: Template,
  args: {
    children: 'Loading',
    size: 'lg',
    variant: 'filled',
    loading: true,
  },
}

export const WithIcon: Story = {
  render: Template,
  args: {
    children: 'With Icon',
    size: 'lg',
    variant: 'filled',
    rightSection: <Icon icon="bookmark" size="lg" weight="regular" />,
  },
}

export const Sizes: Story = {
  render: args => {
    return (
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button size="xs" rightSection={<Icon icon="bookmark" size="xs" weight="regular" />} {...args}>
          Extra small
        </Button>
        <Button size="sm" rightSection={<Icon icon="bookmark" size="sm" weight="regular" />} {...args}>
          Small
        </Button>
        <Button size="md" rightSection={<Icon icon="bookmark" size="md" weight="regular" />} {...args}>
          Medium
        </Button>
        <Button size="lg" rightSection={<Icon icon="bookmark" size="lg" weight="regular" />} {...args}>
          Large
        </Button>
        <Button size="xl" rightSection={<Icon icon="bookmark" size="xl" weight="regular" />} {...args}>
          Extra large
        </Button>
      </div>
    )
  },
}
