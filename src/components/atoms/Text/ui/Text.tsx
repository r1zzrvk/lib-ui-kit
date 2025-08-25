import { FC } from 'react'

import { ContextProvider, TTextProps } from '../lib'
import { MantineText } from './ui'

/** Text component with semantic color variants */
export const Text: FC<TTextProps> = ({ children, ...props }) => {
  return (
    <ContextProvider value={props}>
      <MantineText>{children}</MantineText>
    </ContextProvider>
  )
}
