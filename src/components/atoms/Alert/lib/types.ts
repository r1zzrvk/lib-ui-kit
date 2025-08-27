import { AlertProps } from '@mantine/core'
import { HTMLAttributes, ReactNode } from 'react'

import { ColorVariants } from '@theme'

export type TAlertProps = Omit<AlertProps, 'color'> & {
  color?: AlertProps['color'] & ColorVariants['interaction']
} & HTMLAttributes<HTMLDivElement>

export type TContextValue = TAlertProps

export type TProviderProps = {
  children: ReactNode
  value: TAlertProps
}
