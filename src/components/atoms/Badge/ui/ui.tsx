import { Badge as MantineBaseBadge } from '@mantine/core'
import clsx from 'clsx'
import { FC } from 'react'

import { TBadgeProps, useBadgeContext } from '../lib'
import '../styles/index.scss'

export const MantineBadge: FC<TBadgeProps> = ({ children }) => {
  const data = useBadgeContext()

  const intent =
    data.color && ['info', 'success', 'warning', 'danger', 'primary', 'muted'].includes(String(data.color))
      ? String(data.color)
      : null

  const rootClass = clsx('badge-root', intent && `badge-root--${intent}`)

  const mergedClassNames: TBadgeProps['classNames'] = {
    ...(typeof data.classNames === 'object' ? data.classNames : {}),
    root: clsx(typeof data.classNames === 'object' ? data.classNames?.root : '', rootClass),
  }

  const { classNames: _, ...badgeProps } = data

  return (
    <MantineBaseBadge {...badgeProps} classNames={mergedClassNames} data-variant={data.variant}>
      {children}
    </MantineBaseBadge>
  )
}
