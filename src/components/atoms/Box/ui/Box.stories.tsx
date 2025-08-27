import { Flex } from '@mantine/core'

import type { Meta, StoryObj } from '@storybook/react'

import { TBoxProps } from '../lib'
import { Box } from './Box'

const meta: Meta<typeof Box> = {
  title: 'Atoms/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'muted', 'inverted', 'info', 'success', 'warning', 'danger'],
    },
    bg: {
      control: { type: 'select' },
      options: ['base', 'raised', 'soft', 'info', 'success', 'warning', 'danger'],
    },
    border: {
      control: { type: 'select' },
      options: ['subtle', 'strong', 'info', 'success', 'warning', 'danger'],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Box',
    color: 'primary',
    bg: 'base',
    p: 'md',
  },
}

export const Backgrounds: Story = {
  render: (args: TBoxProps) => (
    <Flex direction="column" gap="sm">
      <Box {...args} bg="base">
        Base
      </Box>
      <Box {...args} bg="raised">
        Raised
      </Box>
      <Box {...args} bg="soft">
        Soft
      </Box>
      <Box {...args} bg="info">
        Info
      </Box>
      <Box {...args} bg="success">
        Success
      </Box>
      <Box {...args} bg="warning">
        Warning
      </Box>
      <Box {...args} bg="danger">
        Danger
      </Box>
    </Flex>
  ),
  args: {
    p: 'md',
    color: 'primary',
  },
}
