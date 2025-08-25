import { sizes } from './constants'
import { TAvatarSize } from './types'

export const getSize = (size: TAvatarSize): number | undefined => {
  if (!size) {
    return undefined
  }

  return sizes[size as keyof typeof sizes]
}
