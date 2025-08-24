import { Button, useMantineColorScheme } from '@mantine/core'
import clsx from 'clsx'
import { FC } from 'react'

import { useTheme } from '@hooks'
import { SemanticTokens, TokenKey } from '@theme'

import { TButtonProps, useButtonContext } from '../lib'
import '../styles/index.scss'

export const MantineButton: FC<TButtonProps> = ({ children }) => {
  const theme = useTheme()
  const { colorScheme } = useMantineColorScheme()
  const data = useButtonContext()

  const intent =
    data.color && ['info', 'success', 'warning', 'danger', 'primary', 'muted'].includes(String(data.color))
      ? String(data.color)
      : null

  const withDisabled = data.disabled ? 'muted' : intent

  const rootClass = clsx('button-root', withDisabled && `button-root--${withDisabled}`)
  const sectionClass = clsx('button-section', data.size && `button-section--${data.size}`)

  const mergedClassNames: TButtonProps['classNames'] = {
    ...(typeof data.classNames === 'object' ? data.classNames : {}),
    root: clsx(typeof data.classNames === 'object' ? data.classNames?.root : '', rootClass),
    section: clsx(typeof data.classNames === 'object' ? data.classNames?.section : '', sectionClass),
  }

  const { classNames: _, ...buttonProps } = data

  const loaderColor =
    data.variant === 'filled'
      ? theme.other?.tokens?.[colorScheme as keyof SemanticTokens]?.['primary.contrast']
      : theme.other?.tokens?.[colorScheme as keyof SemanticTokens]?.[`${intent}.solid` as TokenKey]

  return (
    <Button
      {...buttonProps}
      classNames={mergedClassNames}
      data-variant={data.variant}
      loaderProps={{
        color: loaderColor,
      }}
    >
      {children}
    </Button>
  )
}
