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
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Text',
    color: 'primary',
  },
}

export const Colors: Story = {
  render: (args: TTextProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Text {...args} color="primary">
        Primary
      </Text>
      <Text {...args} color="secondary">
        Secondary
      </Text>
      <Text {...args} color="muted">
        Muted
      </Text>
      <Text {...args} color="inverted" style={{ background: 'var(--bg-base)' }}>
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
    </div>
  ),
  args: {
    children: 'Text',
  },
}
