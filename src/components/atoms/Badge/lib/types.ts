import { BadgeProps } from '@mantine/core'
import { HTMLAttributes, ReactNode } from 'react'

import { ColorVariants } from '@theme'

/**
 * @description Mantine Badge props extended with HTML div attributes and custom colors
 */
export type TBadgeProps = Omit<BadgeProps, 'color'> & {
  color?: BadgeProps['color'] & ColorVariants['interaction']
} & HTMLAttributes<HTMLDivElement>

export type TContextValue = TBadgeProps

export type TProviderProps = {
  children: ReactNode
  value: TBadgeProps
}
