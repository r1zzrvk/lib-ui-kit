import { FC } from 'react'

import { ContextProvider, TTitleProps } from '../lib'
import { MantineTitle } from './ui'

/** Title component with semantic color variants */
export const Title: FC<TTitleProps> = ({ children, ...props }) => {
  return (
    <ContextProvider value={props}>
      <MantineTitle>{children}</MantineTitle>
    </ContextProvider>
  )
}
