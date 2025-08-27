import { createContext, FC, useContext, useMemo } from 'react'

import { TAlertProps, TContextValue, TProviderProps } from './types'

const AlertContext = createContext<TContextValue>({})

export const useAlertContext = (): TContextValue => {
  return useContext(AlertContext)
}

export const ContextProvider: FC<TProviderProps> = ({ children, value }) => {
  const contextValue = useMemo<TContextValue>(() => {
    const base: TAlertProps = {
      color: 'info',
      variant: 'default',
      radius: 'xl',
      ...value,
    }

    return base
  }, [value])

  return <AlertContext.Provider value={contextValue}>{children}</AlertContext.Provider>
}
