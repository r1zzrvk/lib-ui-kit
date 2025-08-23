import { FC } from 'react'
import { Avatar } from '@mantine/core'

import { TAvatarProps, useAvatarContext } from '../lib'

import '../styles/index.scss'

export const MantineAvatar: FC<TAvatarProps> = ({ children }) => {
  const data = useAvatarContext()

  return <Avatar {...data}>{children}</Avatar>
}
