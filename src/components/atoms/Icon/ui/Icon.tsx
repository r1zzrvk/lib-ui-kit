import { FC } from 'react'

import { ContextProvider, TIconProps } from '../lib'
import { IconSelector } from '../components'

// TODO: use this for token creating and theming
// enum EColorVariant {
//   PRIMARY = 'primary',
//   SECONDARY = 'secondary',
//   TRANSPARENT = 'transparent',
//   INFO = 'info',
//   WARNING = 'warning',
//   ERROR = 'error',
//   SUCCESS = 'SUCCESS',
// }

// const mode = useColorScheme()
//   const themeColors = theme.colors?.blue
//   const reversed = [...themeColors].reverse()

//   themeColor?.[0]

/**
 * Icon component for displaying various icons from Phosphor Icons library
 * @see https://phosphoricons.com
 */

export const Icon: FC<TIconProps> = props => {
  return (
    <ContextProvider value={props}>
      <IconSelector />
    </ContextProvider>
  )
}
