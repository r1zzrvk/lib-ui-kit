import { Notification as MantineBaseNotification, useMantineColorScheme } from '@mantine/core'
import clsx from 'clsx'
import { FC } from 'react'

import { useTheme } from '@hooks'

import { getNotificationColor, TNotificationProps, useNotificationContext } from '../lib'

import '../styles/index.scss'

export const MantineNotification: FC<TNotificationProps> = ({ children }) => {
  const data = useNotificationContext()
  const { colorScheme } = useMantineColorScheme()
  const theme = useTheme()

  const rootClass = clsx('notification-root')

  const mergedClassNames: TNotificationProps['classNames'] = {
    ...(typeof data.classNames === 'object' ? data.classNames : {}),
    root: clsx(typeof data.classNames === 'object' ? data.classNames?.root : '', rootClass),
  }

  const { classNames: _classNames, defaultColor, ...notificationProps } = data

  return (
    <MantineBaseNotification
      {...notificationProps}
      styles={{
        closeButton: {
          borderRadius: theme.radius?.xs,
        },
      }}
      color={getNotificationColor(data.color, colorScheme as 'light' | 'dark', theme, defaultColor)}
      classNames={mergedClassNames}
    >
      {children}
    </MantineBaseNotification>
  )
}
