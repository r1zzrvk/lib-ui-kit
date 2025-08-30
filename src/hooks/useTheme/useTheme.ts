import { useMemo } from 'react'

import '@mantine/core/styles.css'
import { theme, TTheme } from '@theme'

/**
 * @function Provides theme object and mantine styles to the application
 * */
export const useTheme = (): TTheme => {
  return useMemo(() => theme, [])
}
