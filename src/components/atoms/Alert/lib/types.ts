import { AlertProps } from '@mantine/core'
import { HTMLAttributes, ReactNode } from 'react'

export type TAlertProps = Omit<AlertProps, 'color'> & {
  color?: AlertProps['color'] & ('info' | 'success' | 'warning' | 'danger')
} & HTMLAttributes<HTMLDivElement>

export type TContextValue = TAlertProps

export type TProviderProps = {
  children: ReactNode
  value: TAlertProps
}
