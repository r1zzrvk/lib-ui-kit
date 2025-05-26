import { FC, ReactNode } from 'react'

import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { theme } from '@constants'

import { ICON_LIST, TIcon, TIconProps } from '../lib'
import { Icon } from './Icon'

const meta = {
  title: 'Atoms/Icons/Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

const WithLabel: FC<{ children: ReactNode; label: string }> = ({ children, label }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontSize: 12 }}>
    {label}
    {children}
  </div>
)

const Template: StoryFn<TIconProps> = args => {
  return <Icon {...args} />
}

export const Default: Story = {
  render: Template,
  args: {
    size: 50,
    weight: 'regular',
    icon: 'bookmark',
    color: theme.colors?.orange?.[6],
  },
}

export const Variants: Story = {
  args: {
    icon: 'bell-ringing',
    size: 50,
    color: theme.colors?.orange?.[6],
  },
  render: args => {
    return (
      <div style={{ display: 'flex', gap: 12 }}>
        <WithLabel label="Regular">
          <Icon {...args} weight="regular" />
        </WithLabel>
        <WithLabel label="Fill">
          <Icon {...args} weight="fill" />
        </WithLabel>
        <WithLabel label="Bold">
          <Icon {...args} weight="bold" />
        </WithLabel>
        <WithLabel label="Light">
          <Icon {...args} weight="light" />
        </WithLabel>
        <WithLabel label="Thin">
          <Icon {...args} weight="thin" />
        </WithLabel>
        <WithLabel label="Duotone">
          <Icon {...args} weight="duotone" />
        </WithLabel>
      </div>
    )
  },
}

export const Sizes: Story = {
  args: {
    icon: 'alien',
    weight: 'regular',
    color: theme.colors?.orange?.[6],
  },
  render: args => {
    return (
      <div style={{ display: 'flex', gap: 12 }}>
        <WithLabel label="Extra Small">
          <Icon {...args} size="xs" />
        </WithLabel>
        <WithLabel label="Small">
          <Icon {...args} size="sm" />
        </WithLabel>
        <WithLabel label="Medium">
          <Icon {...args} size="md" />
        </WithLabel>
        <WithLabel label="Large">
          <Icon {...args} size="lg" />
        </WithLabel>
        <WithLabel label="Extra Large">
          <Icon {...args} size="xl" />
        </WithLabel>
        <WithLabel label="Custom Size">
          <Icon {...args} size={50} />
        </WithLabel>
      </div>
    )
  },
}

export const Icons: Story = {
  args: {
    icon: 'alien',
    size: 'xl',
    color: theme.colors?.gray?.[6],
  },
  render: ({ size, color }) => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {ICON_LIST.map(iconName => (
          <div
            key={iconName}
            style={{
              width: 80,
              margin: 8,
              textAlign: 'center',
              fontSize: 12,
            }}
          >
            <Icon icon={iconName as TIcon} size={size} color={color} />
            <div>{iconName}</div>
          </div>
        ))}
      </div>
    )
  },
}
