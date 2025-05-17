import { Button as BaseButton } from '@mantine/core'
import { FC } from 'react'

import { TButtonProps, ContextProvider, useButtonContext } from '../lib'

/** Primary button component for user interaction */

export const Button: FC<TButtonProps> = ({ children, ...props }) => {
  const data = useButtonContext(props)

  return (
    <ContextProvider value={props}>
      <BaseButton {...data}>{children}</BaseButton>
    </ContextProvider>
  )
}
