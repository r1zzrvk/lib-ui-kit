import { createContext, ReactNode, useContext, useMemo } from 'react'

import { TButtonProps } from '../lib'
import { getButtonTokens } from './utils'

export const ButtonContext = createContext<TButtonProps>({})

export function useButtonContext(value?: TButtonProps): TButtonProps {
  const context = useContext(ButtonContext)
  const data = value || context

  getButtonTokens(data.size)

  return useMemo(() => {
    return {
      ...data,
      ...getButtonTokens(data.size),
      fw: data.fw || 500,
    }
  }, [data])
}

export type TButtonContext = {
  children: ReactNode
  value: TButtonProps
}

export const ContextProvider = ({ children, value }: TButtonContext) => {
  return <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>
}
