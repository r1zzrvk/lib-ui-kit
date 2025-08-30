import { BOX_BGS, BOX_BORDERS, BOX_COLORS } from './constants'
import { TBoxProps } from './types'

export const getBoxColorClass = (color?: TBoxProps['color']): string | null =>
  color && BOX_COLORS.includes(color as (typeof BOX_COLORS)[number]) ? `box-root--color-${color}` : null

export const getBoxBgClass = (bg?: TBoxProps['bg']): string | null =>
  bg && BOX_BGS.includes(bg as (typeof BOX_BGS)[number]) ? `box-root--bg-${bg}` : null

export const getBoxBorderClass = (border?: TBoxProps['border']): string | null =>
  border && BOX_BORDERS.includes(border as (typeof BOX_BORDERS)[number]) ? `box-root--border-${border}` : null
