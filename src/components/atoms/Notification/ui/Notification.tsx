import { FC } from 'react'

import { ContextProvider, TNotificationProps } from '../lib'
import { MantineNotification } from './ui'

export const Notification: FC<TNotificationProps> = ({ children, ...props }) => {
  return (
    <ContextProvider value={props}>
      <MantineNotification>{children}</MantineNotification>
    </ContextProvider>
  )
}
