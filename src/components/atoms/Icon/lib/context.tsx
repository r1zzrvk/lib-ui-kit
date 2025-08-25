import { createContext, useContext, useMemo } from 'react'

import { TContextValue, TProviderProps } from './types'
import { getSize } from './utils'

const IconContext = createContext<TContextValue>({
  icon: 'bookmark',
})

export function useIconContext(): TContextValue {
  return useContext(IconContext)
}

export const ContextProvider = ({ children, value }: TProviderProps) => {
  const { size, icon } = value

  const componentName = useMemo(() => {
    return icon
      .split('-')
      .map(segment => segment[0].toUpperCase() + segment.slice(1))
      .join('')
  }, [icon])

  const contextValue = useMemo<TContextValue>(() => {
    return {
      ...value,
      componentName,
      icon,
      size: getSize(size) || size,
    }
  }, [value, componentName, icon, size])

  return <IconContext.Provider value={contextValue}>{children}</IconContext.Provider>
}
