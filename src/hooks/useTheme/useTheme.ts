import { MantineThemeOverride, mergeThemeOverrides } from '@mantine/core'
import { useMemo } from 'react'

import { colors, fonts, primitives } from '@constants'

import '@mantine/core/styles.css'

const theme: MantineThemeOverride = mergeThemeOverrides(colors, fonts, primitives)

export const useTheme = (): MantineThemeOverride => {
  return useMemo(() => theme, [])
}
