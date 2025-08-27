import { FC } from 'react'

import { ContextProvider, TAlertProps } from '../lib'
import { MantineAlert } from './ui'

export const Alert: FC<TAlertProps> = ({ children, ...props }) => {
  return (
    <ContextProvider value={props}>
      <MantineAlert>{children}</MantineAlert>
    </ContextProvider>
  )
}
