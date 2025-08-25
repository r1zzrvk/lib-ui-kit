import { TokenKey, TTheme } from 'theme/types'

type TGetColorTokenParams = {
  colorScheme: 'light' | 'dark' | 'auto'
  theme: TTheme
  key: TokenKey
}

export const getColorToken = ({ theme, colorScheme, key }: TGetColorTokenParams) =>
  colorScheme === 'dark' ? theme.other?.tokens?.dark?.[key] : theme.other?.tokens?.light?.[key]
