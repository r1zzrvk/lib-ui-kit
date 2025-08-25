import { TEXT_COLORS } from './constants'
import { TTextProps } from './types'

/**
 * @description Returns class name for provided text color token
 */
export const getTextColorClass = (color?: TTextProps['color']): string | null => {
  return color && TEXT_COLORS.includes(color as (typeof TEXT_COLORS)[number]) ? `text-root--${color}` : null
}
