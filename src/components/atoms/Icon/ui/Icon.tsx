import { FC } from 'react'

import { ContextProvider, TIconProps } from '../lib'
import { IconSelector } from '../components'

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
