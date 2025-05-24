import { ButtonProps } from '@mantine/core'
import { ButtonHTMLAttributes, ReactNode } from 'react'

/**
 * @description Mantine button type extended with HTML Button Element
 */
export type TButtonProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

export type TContextValue = TButtonProps

export type TProviderProps = {
  children: ReactNode
  value: TButtonProps
}
