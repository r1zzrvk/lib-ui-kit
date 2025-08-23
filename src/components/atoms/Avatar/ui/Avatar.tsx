import { FC } from 'react'

import { ContextProvider, TAvatarProps } from '../lib'
import { MantineAvatar } from './ui'

/** Avatar component for displaying user image or initials */
export const Avatar: FC<TAvatarProps> = ({ children, ...props }) => {
  return (
    <ContextProvider value={props}>
      <MantineAvatar>{children}</MantineAvatar>
    </ContextProvider>
  )
}
