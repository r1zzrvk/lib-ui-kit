import { createContext, FC, useContext, useMemo } from 'react'

import { TContextValue, TProviderProps } from './types'

const BadgeContext = createContext<TContextValue>({})

export const useBadgeContext = (): TContextValue => {
  return useContext(BadgeContext)
}

export const ContextProvider: FC<TProviderProps> = ({ children, value }) => {
  const contextValue = useMemo<TContextValue>(() => {
    const base: TContextValue = {
      size: 'md',
      variant: 'filled',
      color: 'primary',
      ...value,
    }

    return base
  }, [value])

  return <BadgeContext.Provider value={contextValue}>{children}</BadgeContext.Provider>
}
