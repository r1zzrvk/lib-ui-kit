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
    color: 'primary',
  },
}

export const Light: Story = {
  render: Template,
  args: {
    children: 'Light',
    size: 'lg',
    variant: 'light',
    color: 'primary',
  },
}

export const Subtle: Story = {
  render: Template,
  args: {
    children: 'Subtle',
    size: 'lg',
    variant: 'subtle',
    color: 'primary',
  },
}

export const Disabled: Story = {
  render: Template,
  args: {
    children: 'Disabled',
    size: 'lg',
    variant: 'filled',
    color: 'muted',
    disabled: true,
  },
}

export const Loading: Story = {
  render: Template,
  args: {
    children: 'Loading',
    size: 'lg',
    variant: 'filled',
    color: 'primary',
    loading: true,
  },
}

export const WithIcon: Story = {
  render: Template,
  args: {
    children: 'With Icon',
    size: 'lg',
    variant: 'filled',
    color: 'primary',
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

export const Variants: Story = {
  render: args => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button color="primary" variant="filled" size="lg" {...args}>
            Filled
          </Button>
          <Button color="primary" variant="light" size="lg" {...args}>
            Light
          </Button>
          <Button color="primary" variant="outline" size="lg" {...args}>
            Outline
          </Button>
          <Button color="primary" variant="subtle" size="lg" {...args}>
            Subtle
          </Button>
          <Button color="primary" variant="transparent" size="lg" {...args}>
            Transparent
          </Button>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button color="success" variant="filled" size="lg" {...args}>
            Filled
          </Button>
          <Button color="success" variant="light" size="lg" {...args}>
            Light
          </Button>
          <Button color="success" variant="outline" size="lg" {...args}>
            Outline
          </Button>
          <Button color="success" variant="subtle" size="lg" {...args}>
            Subtle
          </Button>
          <Button color="success" variant="transparent" size="lg" {...args}>
            Transparent
          </Button>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button color="danger" variant="filled" size="lg" {...args}>
            Filled
          </Button>
          <Button color="danger" variant="light" size="lg" {...args}>
            Light
          </Button>
          <Button color="danger" variant="outline" size="lg" {...args}>
            Outline
          </Button>
          <Button color="danger" variant="subtle" size="lg" {...args}>
            Subtle
          </Button>
          <Button color="danger" variant="transparent" size="lg" {...args}>
            Transparent
          </Button>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button color="info" variant="filled" size="lg" {...args}>
            Filled
          </Button>
          <Button color="info" variant="light" size="lg" {...args}>
            Light
          </Button>
          <Button color="info" variant="outline" size="lg" {...args}>
            Outline
          </Button>
          <Button color="info" variant="subtle" size="lg" {...args}>
            Subtle
          </Button>
          <Button color="info" variant="transparent" size="lg" {...args}>
            Transparent
          </Button>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button color="warning" variant="filled" size="lg" {...args}>
            Filled
          </Button>
          <Button color="warning" variant="light" size="lg" {...args}>
            Light
          </Button>
          <Button color="warning" variant="outline" size="lg" {...args}>
            Outline
          </Button>
          <Button color="warning" variant="subtle" size="lg" {...args}>
            Subtle
          </Button>
          <Button color="warning" variant="transparent" size="lg" {...args}>
            Transparent
          </Button>
        </div>
      </div>
    )
  },
}
