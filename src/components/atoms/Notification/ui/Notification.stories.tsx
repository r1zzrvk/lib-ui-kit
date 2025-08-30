import { Flex } from '@mantine/core'

import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '@components/atoms'

import { Notification } from './Notification'
import { NOTIFICATION_COLORS } from '../lib/constants'
import { TNotificationProps } from '../lib'

const meta: Meta<typeof Notification> = {
  title: 'Atoms/Data Display/Notification',
  component: Notification,
  tags: ['autodocs'],
  argTypes: {
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
    title: 'Default notification',
    children: 'This is a default notification',
  },
}

export const withIcon: Story = {
  args: {
    title: 'With icon',
    children: 'This is a notification with icon',
    color: 'info',
    icon: <Icon icon="info" />,
  },
}

export const AllVariants: Story = {
  render: () => (
    <Flex direction="column" gap="md">
      {['default', ...NOTIFICATION_COLORS].map(color => {
        const label = color.charAt(0).toUpperCase() + color.slice(1)
        return (
          <Notification key={color} color={color as TNotificationProps['color']} title={label}>
            {`${label} message`}
          </Notification>
        )
      })}
    </Flex>
  ),
}
