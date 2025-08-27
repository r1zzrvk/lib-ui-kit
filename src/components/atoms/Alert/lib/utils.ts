import { SemanticTokens, TokenKey, TTheme } from '@theme'

export const getTitleColor = (variant?: string, intent?: string | null, colorScheme?: string, theme?: TTheme) => {
  switch (variant) {
    case 'default':
      return theme?.other?.tokens?.[colorScheme as keyof SemanticTokens]?.['text.primary']
    case 'transparent':
      return theme?.other?.tokens?.[colorScheme as keyof SemanticTokens]?.[`text.${intent}` as TokenKey]
    case 'light':
      return theme?.other?.tokens?.light?.[`${intent}.solid` as TokenKey]
    case 'outline':
      return theme?.other?.tokens?.[colorScheme as keyof SemanticTokens]?.[`text.${intent}` as TokenKey]
    case 'filled':
      return theme?.other?.tokens?.[colorScheme as keyof SemanticTokens]?.['text.inverted']
    default:
      return theme?.other?.tokens?.[colorScheme as keyof SemanticTokens]?.['text.inverted']
  }
}
