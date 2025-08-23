import { ButtonProps } from '@mantine/core'
import { ButtonHTMLAttributes, ReactNode } from 'react'

import { ColorVariants } from '@theme'

/**
 * @description Mantine button type extended with HTML Button Element
 */

export type TButtonProps = Omit<ButtonProps, 'color'> & {
  color?: ButtonProps['color'] & ColorVariants['interaction']
} & ButtonHTMLAttributes<HTMLButtonElement>

export type TContextValue = TButtonProps

export type TProviderProps = {
  children: ReactNode
  value: TButtonProps
}
