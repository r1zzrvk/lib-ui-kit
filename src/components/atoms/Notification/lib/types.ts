import { NotificationProps } from '@mantine/core'
import { HTMLAttributes, ReactNode } from 'react'

/**
 * @description Notification props with extended color variants
 */
export type TNotificationProps = Omit<NotificationProps, 'color'> & {
  color?: NotificationProps['color'] & string & ('info' | 'success' | 'warning' | 'danger')
} & HTMLAttributes<HTMLDivElement>

export type TContextValue = TNotificationProps & {
  defaultColor?: string
}

export type TProviderProps = {
  children: ReactNode
  value: TNotificationProps
}
