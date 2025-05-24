import { createContext, useContext, useMemo } from 'react'

import { TContextValue, TProviderProps, TButtonProps } from '../lib'
import { getButtonTokens } from './utils'

const ButtonContext = createContext<TContextValue>({})

export function useButtonContext(): TContextValue {
  return useContext(ButtonContext)
}

export const ContextProvider = ({ children, value }: TProviderProps) => {
  const contextValue = useMemo<TContextValue>(() => {
    const base: TButtonProps = {
      size: 'md',
      variant: 'filled',
      fw: 500,
      ...value,
    }

    const tokens = getButtonTokens(base.size!)

    return {
      ...base,
      ...tokens,
      fw: base.fw!,
    }
  }, [value])

  return <ButtonContext.Provider value={contextValue}>{children}</ButtonContext.Provider>
}
