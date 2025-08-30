import { FC } from 'react'

import { ContextProvider, TBoxProps } from '../lib'
import { MantineBox } from './ui'

export const Box: FC<TBoxProps> = ({ children, ...props }) => {
  return (
    <ContextProvider value={props}>
      <MantineBox>{children}</MantineBox>
    </ContextProvider>
  )
}
