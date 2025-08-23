import { FC } from 'react'
import { Button } from '@mantine/core'
import clsx from 'clsx'

import { TButtonProps, useButtonContext } from '../lib'

import '../styles/index.scss'

export const MantineButton: FC<TButtonProps> = ({ children }) => {
  const data = useButtonContext()

  const intent =
    data.color && ['info', 'success', 'warning', 'danger', 'primary', 'muted'].includes(String(data.color))
      ? String(data.color)
      : null

  const rootClass = clsx('button-root', intent && `button-root--${intent}`)
  const sectionClass = clsx('button-section', data.size && `button-section--${data.size}`)

  const mergedClassNames: TButtonProps['classNames'] = {
    ...(typeof data.classNames === 'object' ? data.classNames : {}),
    root: clsx(typeof data.classNames === 'object' ? data.classNames?.root : '', rootClass),
    section: clsx(typeof data.classNames === 'object' ? data.classNames?.section : '', sectionClass),
  }

  const { classNames: _, ...buttonProps } = data

  return (
    <Button {...buttonProps} classNames={mergedClassNames} data-variant={data.variant}>
      {children}
    </Button>
  )
}
