import { FC } from 'react'

import { ContextProvider, TButtonProps } from '../lib'
import { MantineButton } from './ui'

/** Primary button component for user interaction */

export const Button: FC<TButtonProps> = ({ children, ...props }) => {
  return (
    <ContextProvider value={props}>
      <MantineButton>{children}</MantineButton>
    </ContextProvider>
  )
}
