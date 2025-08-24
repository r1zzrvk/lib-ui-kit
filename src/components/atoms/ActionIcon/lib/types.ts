import { ActionIconProps } from '@mantine/core'
import { ButtonHTMLAttributes, ReactNode } from 'react'

import { TIcon, TIconProps } from '@components/atoms'

import { ColorVariants } from '@theme'
import { ESizes } from '@types'

/**
 * @description ActionIcon variants similar to Button component
 */
export type TActionIconVariant = 'filled' | 'light' | 'outline' | 'subtle' | 'transparent' | 'default'

/**
 * @description ActionIcon colors using the same system as Button
 */
export type TActionIconColor = ColorVariants['interaction']

/**
 * @description Mantine ActionIcon type extended with custom variants and colors
 */
export type TActionIconProps = Omit<ActionIconProps, 'color' | 'variant' | 'children'> & {
  /** Icon to display */
  icon?: TIcon
  /** Custom icon component (alternative to icon prop) */
  children?: ReactNode
  /** Color variant */
  color?: TActionIconColor
  /** Visual variant */
  variant?: TActionIconVariant
  /** Loading state */
  loading?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Icon weight */
  weight?: TIconProps['weight']
} & ButtonHTMLAttributes<HTMLButtonElement>

export type TContextValue = TActionIconProps

export type TProviderProps = {
  children: ReactNode
  value: TActionIconProps
}

export type ActionIconSizes = ESizes.XS | ESizes.SM | ESizes.MD | ESizes.LG | ESizes.XL
