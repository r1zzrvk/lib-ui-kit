import { FC } from 'react'

import { ContextProvider, TActionIconProps } from '../lib'
import { MantineActionIcon } from './ui'

/** Primary action icon component for user interaction */

export const ActionIcon: FC<TActionIconProps> = ({ children, ...props }) => {
  return (
    <ContextProvider value={props}>
      <MantineActionIcon>{children}</MantineActionIcon>
    </ContextProvider>
  )
}
