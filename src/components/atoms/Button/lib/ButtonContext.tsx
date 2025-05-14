import { createContext, ReactNode, useContext, useMemo } from "react";
import { ButtonProps } from "../ui/Button";

export const ButtonContext = createContext<ButtonProps>({});

export function useButtonContext(value?: ButtonProps) {
  const context = useContext(ButtonContext);
  const data = value || context;

  const getTokens = (size: ButtonProps['size']): ButtonProps | undefined => {
    switch (size) {
      case 'xs':
        return { radius: 10, p: '4px 8px' };
      case 'sm': 
      return { radius: 12, p: '4px 24px' };
      case 'md':
        return { radius: 16, p: '4px 24px'  };
      case 'lg':
        return { radius: 18, p: '4px 32px'  };
      case 'xl':
        return { radius: 24, p: '4px 32px'  };
      default:
    }
  }

  getTokens(data.size)

  return useMemo(() => {
    return {
      ...data,
      ...getTokens(data.size),
      fw: data.fw || 500,
    };
  }, [data]);
}

export type ButtonContextType = {
  children: ReactNode;
  value: ButtonProps;
};

export const ButtonProvider = ({ children, value }: ButtonContextType) => {
  return (
    <ButtonContext.Provider value={value}>
      {children}
    </ButtonContext.Provider>
  );
};
