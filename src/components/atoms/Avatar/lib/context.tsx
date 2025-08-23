import { createContext, useContext, useMemo } from 'react'

import { TContextValue, TProviderProps } from './types'
import { getSize } from './utils'

const AvatarContext = createContext<TContextValue>({})

export function useAvatarContext(): TContextValue {
  return useContext(AvatarContext)
}

export const ContextProvider = ({ children, value }: TProviderProps) => {
  const { size } = value

  const contextValue = useMemo<TContextValue>(() => {
    return {
      ...value,
      size: getSize(size) || size,
    }
  }, [value, size])

  return <AvatarContext.Provider value={contextValue}>{children}</AvatarContext.Provider>
}
