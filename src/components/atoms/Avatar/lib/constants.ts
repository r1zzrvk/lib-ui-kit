import { ESizes } from '@types'

import { AvatarSizes } from './types'

export const sizes: Record<Exclude<AvatarSizes, undefined>, number> = {
  [ESizes.XS2]: 16,
  [ESizes.XS]: 24,
  [ESizes.SM]: 32,
  [ESizes.MD]: 40,
  [ESizes.LG]: 48,
  [ESizes.XL]: 56,
  [ESizes.XL2]: 72,
} as const
