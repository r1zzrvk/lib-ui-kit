import { TextProps } from '@mantine/core'
import { HTMLAttributes, ReactNode } from 'react'

import { ColorVariants } from '@theme'

/**
 * @description Mantine Text props extended with HTML attributes and semantic color variants
 */
export type TTextProps = Omit<TextProps, 'color'> & {
  color?: TextProps['color'] & ColorVariants['text']
} & HTMLAttributes<HTMLElement>

export type TContextValue = TTextProps

export type TProviderProps = {
  children: ReactNode
  value: TTextProps
}
