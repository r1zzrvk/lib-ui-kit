import { createContext, FC, useContext } from 'react'

import { TContextValue, TProviderProps } from './types'

const ActionIconContext = createContext<TContextValue>({})

export const useActionIconContext = (): TContextValue => {
  return useContext(ActionIconContext)
}

export const ContextProvider: FC<TProviderProps> = ({ children, value }) => {
  return <ActionIconContext.Provider value={value}>{children}</ActionIconContext.Provider>
}
