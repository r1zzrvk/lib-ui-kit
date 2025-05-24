import { sizes } from './constants'
import { TIconSize } from './types'

export const getSize = (size: TIconSize): number | undefined => {
  if (!size) {
    return undefined
  }

  return sizes[size]
}
