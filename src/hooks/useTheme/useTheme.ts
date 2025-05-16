import { useMemo } from 'react'

import '@mantine/core/styles.css'
import { TTheme } from '@types'
import { theme } from '@constants'

/**
 * @function Provides theme object and mantine styles to the application
 * */
export const useTheme = (): TTheme => {
  return useMemo(() => theme, [])
}
