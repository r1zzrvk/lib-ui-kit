import { Stack } from '@mantine/core'

import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'light', 'outline', 'transparent', 'default'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'info', 'success', 'warning', 'danger'],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Alert message',
    color: 'primary',
    variant: 'filled',
  },
}

export const Variants: Story = {
  render: args => (
    <Stack>
      <Alert {...args} variant="filled" color="primary">
        Filled
      </Alert>
      <Alert {...args} variant="light" color="primary">
        Light
      </Alert>
      <Alert {...args} variant="outline" color="primary">
        Outline
      </Alert>
      <Alert {...args} variant="transparent" color="primary">
        Transparent
      </Alert>
      <Alert {...args} variant="default">
        Default
      </Alert>
    </Stack>
  ),
  args: {
    color: 'primary',
  },
}
