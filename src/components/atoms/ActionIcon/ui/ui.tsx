import { ActionIcon as MantineBaseActionIcon, useMantineColorScheme } from '@mantine/core'
import clsx from 'clsx'
import { FC } from 'react'

import { useTheme } from '@hooks'
import { SemanticTokens, TokenKey } from '@theme'

import { Icon } from '../../Icon'
import { ActionIconSizes, TActionIconProps, useActionIconContext } from '../lib'
import { sizes } from '../lib/constants'

import '../styles/index.scss'

export const MantineActionIcon: FC<TActionIconProps> = ({ children }) => {
  const theme = useTheme()
  const { colorScheme } = useMantineColorScheme()
  const data = useActionIconContext()

  const intent =
    data.color && ['info', 'success', 'warning', 'danger', 'primary', 'muted'].includes(String(data.color))
      ? String(data.color)
      : 'primary'

  const rootClass = clsx(
    'action-icon-root',
    intent && `action-icon-root--${intent}`,
    data.size && `action-icon-size--${data.size}`,
  )

  const mergedClassNames: TActionIconProps['classNames'] = {
    ...(typeof data.classNames === 'object' ? data.classNames : {}),
    root: clsx(typeof data.classNames === 'object' ? data.classNames?.root : '', rootClass),
  }

  const { classNames: _classNames, icon, ...actionIconProps } = data

  const iconContent = icon ? <Icon icon={icon} size={data.size} weight={data.weight} /> : children

  return (
    <MantineBaseActionIcon
      {...actionIconProps}
      loaderProps={{
        color:
          theme.other?.tokens?.[colorScheme as keyof SemanticTokens]?.[`${intent}.solid` as TokenKey] ||
          theme.other?.tokens?.[colorScheme as keyof SemanticTokens]?.['text.primary'],
      }}
      size={sizes[data.size as ActionIconSizes] || data.size}
      classNames={mergedClassNames}
      data-variant={data.variant || 'default'}
      data-disabled={data.disabled}
    >
      <div className="action-icon-content">{iconContent}</div>
    </MantineBaseActionIcon>
  )
}
