import * as PhosphorIcons from '@phosphor-icons/react'
import { FC } from 'react'

import { useIconContext } from '../../lib'

export const IconSelector: FC = () => {
  const { icon, componentName, ...rest } = useIconContext()

  if (!icon || !componentName) {
    return null
  }

  const IconComponent = (PhosphorIcons as unknown as Record<string, FC<unknown>>)[componentName]

  if (!IconComponent) {
    console.warn(`Icon "${icon}" (${componentName}) not found in Phosphor`)
    return null
  }

  return <IconComponent {...rest} />
}
