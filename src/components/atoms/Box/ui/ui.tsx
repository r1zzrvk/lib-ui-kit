import { Box as MantineBaseBox } from '@mantine/core'
import clsx from 'clsx'
import { FC } from 'react'

import { TBoxProps, getBoxBgClass, getBoxBorderClass, getBoxColorClass, useBoxContext } from '../lib'
import '../styles/index.scss'

export const MantineBox: FC<TBoxProps> = ({ children }) => {
  const data = useBoxContext()

  const colorClass = getBoxColorClass(data.color)
  const bgClass = getBoxBgClass(data.bg)
  const borderClass = getBoxBorderClass(data.border)
  const rootClass = clsx('box-root', colorClass, bgClass, borderClass)

  const { className, color: _color, bg: _bg, border: _border, ...boxProps } = data

  return (
    <MantineBaseBox {...boxProps} className={clsx(className, rootClass)}>
      {children}
    </MantineBaseBox>
  )
}
