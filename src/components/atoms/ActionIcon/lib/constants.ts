import { ESizes } from '@types'

import { ActionIconSizes } from './types'

export const sizes: Record<Exclude<ActionIconSizes, undefined>, number> = {
  [ESizes.XS]: 18,
  [ESizes.SM]: 24,
  [ESizes.MD]: 32,
  [ESizes.LG]: 40,
  [ESizes.XL]: 48,
} as const
