import { AvatarProps } from '@mantine/core'
import { ReactNode } from 'react'

import { ESizes } from '@types'

export type AvatarSizes = ESizes.XS | ESizes.SM | ESizes.MD | ESizes.LG | ESizes.XL

export type TAvatarSize = AvatarProps['size'] | AvatarSizes

export type TAvatarProps = Omit<AvatarProps, 'size'> & {
  size?: TAvatarSize
}

export type TContextValue = TAvatarProps

export type TProviderProps = {
  children: ReactNode
  value: TAvatarProps
}
