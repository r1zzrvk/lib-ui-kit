import { mergeThemeOverrides } from '@mantine/core'

import { TTheme } from '@types'

import { colors, fonts, primitives } from './tokens'

/**
 * @description Provides the theme object to the application
 * */
export const theme: TTheme = mergeThemeOverrides(colors, fonts, primitives)
