import { Title as MantineBaseTitle } from '@mantine/core'
import clsx from 'clsx'
import { FC } from 'react'

import { getTitleColorClass, TTitleProps, useTitleContext } from '../lib'
import '../styles/index.scss'

export const MantineTitle: FC<TTitleProps> = ({ children }) => {
  const data = useTitleContext()

  const colorClass = getTitleColorClass(data.color)
  const rootClass = clsx('title-root', colorClass)

  const { className, color: _color, ...titleProps } = data

  return (
    <MantineBaseTitle {...titleProps} className={clsx(className, rootClass)}>
      {children}
    </MantineBaseTitle>
  )
}
