import { theme } from '@constants'
import { ESizes } from '@types'

import { TButtonProps } from './types'

export const getButtonTokens = (size: TButtonProps['size']): TButtonProps | undefined => {
  const { fontSizes, lineHeights, spacing, radius } = theme

  switch (size) {
    case ESizes.XS:
      return {
        radius: radius?.[ESizes.XS],
        p: `${spacing?.[ESizes.XS3]} ${spacing?.[ESizes.XS2]}`,
        fz: fontSizes?.[ESizes.XS2],
        lh: lineHeights?.[ESizes.XS],
      }
    case ESizes.SM:
      return {
        radius: radius?.[ESizes.SM],
        p: `${spacing?.[ESizes.XS3]} ${spacing?.[ESizes.MD]}`,
        fz: fontSizes?.[ESizes.SM],
        lh: lineHeights?.[ESizes.SM],
      }
    case ESizes.MD:
      return {
        radius: radius?.[ESizes.MD],
        p: `${spacing?.[ESizes.XS3]} ${spacing?.[ESizes.MD]}`,
        fz: fontSizes?.[ESizes.MD],
        lh: lineHeights?.[ESizes.MD],
      }
    case ESizes.LG:
      return {
        radius: radius?.[ESizes.LG],
        p: `${spacing?.[ESizes.XS3]} ${spacing?.[ESizes.LG]}`,
        fz: fontSizes?.lg,
        lh: lineHeights?.lg,
      }
    case ESizes.XL:
      return {
        radius: radius?.[ESizes.XL],
        p: `${spacing?.[ESizes.XS3]} ${spacing?.[ESizes.LG]}`,
        fz: fontSizes?.[ESizes.XL],
        lh: lineHeights?.[ESizes.XL],
      }
    default:
  }
}
