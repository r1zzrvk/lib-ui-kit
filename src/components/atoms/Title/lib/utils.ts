import { TITLE_COLORS } from './constants'
import { TTitleProps } from './types'

/**
 * @description Returns class name for provided title color token
 */
export const getTitleColorClass = (color?: TTitleProps['color']): string | null => {
  return color && TITLE_COLORS.includes(color as (typeof TITLE_COLORS)[number]) ? `title-root--${color}` : null
}
