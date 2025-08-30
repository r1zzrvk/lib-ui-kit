import { Text as MantineBaseText } from '@mantine/core'
import clsx from 'clsx'
import { FC } from 'react'

import { getTextColorClass, TTextProps, useTextContext } from '../lib'
import '../styles/index.scss'

export const MantineText: FC<TTextProps> = ({ children }) => {
  const data = useTextContext()

  const colorClass = getTextColorClass(data.color)
  const rootClass = clsx('text-root', colorClass)

  const { className, color: c, ...textProps } = data

  return (
    <MantineBaseText c={!colorClass ? c : undefined} {...textProps} className={clsx(className, rootClass)}>
      {children}
    </MantineBaseText>
  )
}
