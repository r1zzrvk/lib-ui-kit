import { createContext, FC, useContext, useMemo } from 'react'

import { TEXT_DEFAULT_COLOR } from './constants'
import { TContextValue, TProviderProps, TTextProps } from './types'

const TextContext = createContext<TContextValue>({})

export const useTextContext = (): TContextValue => {
  return useContext(TextContext)
}

export const ContextProvider: FC<TProviderProps> = ({ children, value }) => {
  const contextValue = useMemo<TContextValue>(() => {
    const base: TTextProps = {
      color: TEXT_DEFAULT_COLOR,
      ...value,
    }

    return base
  }, [value])

  return <TextContext.Provider value={contextValue}>{children}</TextContext.Provider>
}
