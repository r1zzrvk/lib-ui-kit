import { colors, fonts, primitives } from '@constants'
import { MantineThemeOverride, mergeThemeOverrides } from '@mantine/core'
import '@mantine/core/styles.css'
import { useMemo } from 'react'

const theme: MantineThemeOverride = mergeThemeOverrides(colors, fonts, primitives)

export const useTheme = (): MantineThemeOverride => {
  return useMemo(() => theme, [theme])
}
            