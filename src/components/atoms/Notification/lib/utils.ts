import { SemanticTokens, TokenKey, TTheme } from '@theme'

import { NOTIFICATION_COLORS } from './constants'
import { TNotificationProps } from './types'

export const getNotificationColor = (
  color?: TNotificationProps['color'],
  colorScheme?: 'light' | 'dark',
  theme?: TTheme,
  defaultColor?: string,
) => {
  const intent = color && NOTIFICATION_COLORS.includes(color as (typeof NOTIFICATION_COLORS)[number]) && String(color)

  return !intent
    ? theme?.other?.tokens?.[colorScheme as keyof SemanticTokens]?.[defaultColor as TokenKey]
    : theme?.other?.tokens?.[colorScheme as keyof SemanticTokens]?.[`${intent}.solid` as TokenKey]
}
