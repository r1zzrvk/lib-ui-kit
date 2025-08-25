import { mergeThemeOverrides } from '@mantine/core'

import { semanticTokens } from './constants'
import { colors, fonts, primitives } from './constants/tokens'
import { TTheme } from './types'

/**
 * @description Provides the theme object to the application
 * */
export const theme: TTheme = mergeThemeOverrides(semanticTokens, colors, fonts, primitives)
