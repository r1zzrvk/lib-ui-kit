import { createContext, FC, useContext, useMemo } from 'react'

import { TITLE_DEFAULT_COLOR } from './constants'
import { TContextValue, TProviderProps, TTitleProps } from './types'

const TitleContext = createContext<TContextValue>({})

export const useTitleContext = (): TContextValue => {
  return useContext(TitleContext)
}

export const ContextProvider: FC<TProviderProps> = ({ children, value }) => {
  const contextValue = useMemo<TContextValue>(() => {
    const base: TTitleProps = {
      color: TITLE_DEFAULT_COLOR,
      ...value,
    }

    return base
  }, [value])

  return <TitleContext.Provider value={contextValue}>{children}</TitleContext.Provider>
}
