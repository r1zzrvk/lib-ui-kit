import { Alert as MantineBaseAlert, useMantineColorScheme } from '@mantine/core'
import clsx from 'clsx'
import { FC } from 'react'

import { Text } from '@components/atoms'

import { useTheme } from '@hooks'

import { getTitleColor, TAlertProps, useAlertContext } from '../lib'

import '../styles/index.scss'

export const MantineAlert: FC<TAlertProps> = ({ children }) => {
  const data = useAlertContext()
  const theme = useTheme()
  const { colorScheme } = useMantineColorScheme()

  const intent =
    data.color && ['info', 'success', 'warning', 'danger'].includes(String(data.color)) ? String(data.color) : null

  const rootClass = clsx('alert-root', intent && `alert-root--${intent}`)

  const mergedClassNames: TAlertProps['classNames'] = {
    ...(typeof data.classNames === 'object' ? data.classNames : {}),
    root: clsx(typeof data.classNames === 'object' ? data.classNames?.root : '', rootClass),
  }

  const { classNames: _, ...alertProps } = data

  return (
    <MantineBaseAlert
      {...alertProps}
      classNames={mergedClassNames}
      data-variant={data.variant}
      title={<Text color={getTitleColor(data.variant, intent, colorScheme, theme) as never}>{data.title}</Text>}
    >
      {children}
    </MantineBaseAlert>
  )
}
