import { Stack } from '@mantine/core'

import type { Meta, StoryObj } from '@storybook/react'

import { Icon, Text } from '@components/atoms'

import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Data Display/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'light', 'outline', 'transparent'],
    },
    color: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'danger'],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Alert title',
    children: (
      <Text color="primary" size="sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat
        saepe.
      </Text>
    ),
    variant: 'default',
    icon: <Icon icon="info" />,
  },
}

export const Variants: Story = {
  render: args => (
    <Stack>
      <Alert
        {...args}
        variant="filled"
        children={
          <Text color="inverted" size="sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat
            saepe.
          </Text>
        }
      />
      <Alert {...args} variant="light" />
      <Alert {...args} variant="outline" />
      <Alert {...args} variant="transparent" />
      <Alert {...args} variant="default" />
    </Stack>
  ),
  args: {
    color: 'info',
    title: 'Alert title',
    children: (
      <Text color="primary" size="sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat
        saepe.
      </Text>
    ),
    icon: <Icon icon="info" />,
  },
}
