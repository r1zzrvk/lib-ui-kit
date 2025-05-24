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
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontSize: 12 }}
        >
          Regular
          <Icon weight="regular" {...args} />
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontSize: 12 }}
        >
          Fill
          <Icon weight="fill" {...args} />
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontSize: 12 }}
        >
          Bold
          <Icon weight="bold" {...args} />
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontSize: 12 }}
        >
          Light
          <Icon weight="light" {...args} />
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontSize: 12 }}
        >
          Thin
          <Icon weight="thin" {...args} />
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontSize: 12 }}
        >
          Duotone
          <Icon weight="duotone" {...args} />
        </div>
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
