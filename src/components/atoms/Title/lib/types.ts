import { TitleProps } from '@mantine/core'
import { HTMLAttributes, ReactNode } from 'react'

import { ColorVariants } from '@theme'

/**
 * @description Mantine Title props extended with HTML attributes and semantic color variants
 */
export type TTitleProps = Omit<TitleProps, 'color'> & {
  color?: TitleProps['c'] & ColorVariants['text']
} & HTMLAttributes<HTMLHeadingElement>

export type TContextValue = TTitleProps

export type TProviderProps = {
  children: ReactNode
  value: TTitleProps
}
