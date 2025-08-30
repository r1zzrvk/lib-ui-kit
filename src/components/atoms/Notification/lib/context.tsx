import { createContext, FC, useContext, useMemo } from 'react'

import { TContextValue, TNotificationProps, TProviderProps } from './types'

const NotificationContext = createContext<TContextValue>({})

export const useNotificationContext = (): TContextValue => {
  return useContext(NotificationContext)
}

export const ContextProvider: FC<TProviderProps> = ({ children, value }) => {
  const defaultColor = 'text.primary'

  const contextValue = useMemo<TContextValue>(() => {
    const base: TNotificationProps = {
      ...value,
      radius: 'md',
    }

    return { ...base, defaultColor: defaultColor }
  }, [defaultColor, value])

  return <NotificationContext.Provider value={contextValue}>{children}</NotificationContext.Provider>
}
