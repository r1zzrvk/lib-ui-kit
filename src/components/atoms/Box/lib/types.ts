import { BoxProps } from '@mantine/core'
import { HTMLAttributes, ReactNode } from 'react'

import { ColorVariants } from '@theme'

export type TBoxColor = ColorVariants['text']
export type TBoxBg = 'base' | 'raised' | 'soft' | 'info' | 'success' | 'warning' | 'danger'
export type TBoxBorder = 'subtle' | 'strong' | 'info' | 'success' | 'warning' | 'danger'

export type TBoxProps = Omit<BoxProps, 'bg' | 'c' | 'bd'> & {
  color?: TBoxColor
  bg?: TBoxBg
  border?: TBoxBorder
} & HTMLAttributes<HTMLDivElement>

export type TContextValue = TBoxProps

export type TProviderProps = {
  children: ReactNode
  value: TBoxProps
}
