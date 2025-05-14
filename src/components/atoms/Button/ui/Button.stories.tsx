import { fn } from '@storybook/test'
import { BookmarkSimple } from '@phosphor-icons/react'

import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from './Button'

const meta = {
  title: 'Atoms/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

const Template: StoryFn<ButtonProps> = args => {
  return <Button {...args}>{args.children}</Button>
}

export const Standart: Story = {
  render: Template,
  args: {
    children: 'Standard',
    size: 'lg',
    variant: 'filled',
  },
}

export const Primary: Story = {
  render: Template,
  args: {
    children: 'Primary',
    size: 'md',
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
    size: 'md',
    variant: 'transparent',
  },
}

export const Disabled: Story = {
  render: Template,
  args: {
    children: 'Disabled',
    size: 'md',
    variant: 'filled',
    disabled: true,
  },
}

export const Loading: Story = {
  render: Template,
  args: {
    children: 'Loading',
    size: 'md',
    variant: 'filled',
    loading: true,
  },
}

export const WithIcon: Story = {
  render: Template,
  args: {
    children: 'With Icon',
    size: 'md',
    variant: 'filled',
    rightSection: <BookmarkSimple size={16} weight="regular" />,
  },
}

export const Sizes: Story = {
  render: args => {
    return (
      <div style={{ display: 'flex', gap: 12 }}>
        <Button size="xs" {...args}>
          Extra small
        </Button>
        <Button size="sm" {...args}>
          Small
        </Button>
        <Button size="md" {...args}>
          Medium
        </Button>
        <Button size="lg" {...args}>
          Large
        </Button>
        <Button size="xl" {...args}>
          Extra large
        </Button>
      </div>
    )
  },
}
