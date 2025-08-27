import { createContext, FC, useContext, useMemo } from 'react'

import { BOX_DEFAULT_BG, BOX_DEFAULT_COLOR } from './constants'
import { TBoxProps, TContextValue, TProviderProps } from './types'

const BoxContext = createContext<TContextValue>({})

export const useBoxContext = (): TContextValue => {
  return useContext(BoxContext)
}

export const ContextProvider: FC<TProviderProps> = ({ children, value }) => {
  const contextValue = useMemo<TContextValue>(() => {
    const base: TBoxProps = {
      color: BOX_DEFAULT_COLOR,
      bg: BOX_DEFAULT_BG,
      ...value,
    }

    return base
  }, [value])

  return <BoxContext.Provider value={contextValue}>{children}</BoxContext.Provider>
}
