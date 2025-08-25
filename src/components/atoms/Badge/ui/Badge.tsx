import { FC } from 'react'

import { ContextProvider, TBadgeProps } from '../lib'
import { MantineBadge } from './ui'
/** Badge component for displaying small count or status */

export const Badge: FC<TBadgeProps> = ({ children, ...props }) => {
  return (
    <ContextProvider value={props}>
      <MantineBadge>{children}</MantineBadge>
    </ContextProvider>
  )
}
