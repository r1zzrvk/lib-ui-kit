import { Alert as MantineBaseAlert } from '@mantine/core'
import clsx from 'clsx'
import { FC } from 'react'

import { TAlertProps, useAlertContext } from '../lib'
import '../styles/index.scss'

export const MantineAlert: FC<TAlertProps> = ({ children }) => {
  const data = useAlertContext()

  const intent =
    data.color && ['info', 'success', 'warning', 'danger', 'primary'].includes(String(data.color))
      ? String(data.color)
      : null

  const rootClass = clsx('alert-root', intent && `alert-root--${intent}`)

  const mergedClassNames: TAlertProps['classNames'] = {
    ...(typeof data.classNames === 'object' ? data.classNames : {}),
    root: clsx(typeof data.classNames === 'object' ? data.classNames?.root : '', rootClass),
  }

  const { classNames: _, ...alertProps } = data

  return (
    <MantineBaseAlert {...alertProps} classNames={mergedClassNames} data-variant={data.variant}>
      {children}
    </MantineBaseAlert>
  )
}
