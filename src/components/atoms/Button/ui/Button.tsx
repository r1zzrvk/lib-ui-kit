import { Button as BaseButton, ButtonProps as BaseButtonProps } from '@mantine/core'
import { ButtonHTMLAttributes, FC } from 'react'

import { ButtonProvider, useButtonContext } from '../lib/ButtonContext'

export type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
/** Primary button component for user interaction */

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const data = useButtonContext(props)

  return (
    <ButtonProvider value={props}>
      <BaseButton {...data}>{children}</BaseButton>
    </ButtonProvider>
  )
}
