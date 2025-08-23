import { MantineThemeOverride } from '@mantine/core'

type Intent = 'info' | 'success' | 'warning' | 'danger'
type Variant = 'solid' | 'soft' | 'hover' | 'contrast' | 'border' | 'softHover'
type TokenValue = string

/**
 * @description Token keys for semantic tokens
 */
export type TokenKey =
  | `text.${'primary' | 'secondary' | 'muted' | 'inverted' | Intent}`
  | `bg.${'base' | 'raised' | 'soft' | Intent}`
  | `border.${'subtle' | 'strong' | Intent}`
  | `primary.${'solid' | 'soft' | 'hover' | 'contrast' | 'border' | 'softHover'}`
  | `${Intent}.${Variant}`

export type SemanticTokens = {
  light: Record<TokenKey, TokenValue>
  dark: Record<TokenKey, TokenValue>
}

/**
 * @description Mantine theme type extended with Lib theme tokens
 * @extends MantineThemeOverride
 * @see https://mantine.dev/theming/theme-object/
 *  */
export type TTheme = Omit<
  MantineThemeOverride,
  'spacing' | 'breakpoints' | 'fontSizes' | 'lineHeights' | 'radius' | 'headings'
> & {
  /**
   * Spacing values for the theme:
   * xs4 = 2, xs3 = 4, xs2 = 8, xs = 12, sm = 16, md = 24, lg = 32, xl = 40, xl2 = 52, xl3 = 64, xl4 = 80,
   */
  spacing?: MantineThemeOverride['spacing'] & {
    xs4?: string
    xs3?: string
    xs2?: string
    xl2?: string
    xl3?: string
    xl4?: string
  }
  /**
   * Breakpoints values for the theme:
   * xs = 320, sm = 600, md = 1024, lg = 1280, xl = 1440
   */
  breakpoints?: MantineThemeOverride['breakpoints']
  /**
   * Font size values for the theme:
   * xs2 = 12, xs = 14, sm = 16, md = 20, lg = 24, xl = 32, xl2 = 40
   */
  fontSizes?: MantineThemeOverride['fontSizes'] & {
    xs2?: string
    xl2?: string
  }
  /**
   * Line heights values for the theme:
   * xs2 = 16, xs = 18, sm = 20, md = 24, lg = 28, xl = 36, xl2 = 44
   */
  lineHeights?: MantineThemeOverride['lineHeights'] & {
    xs2?: string
    xl2?: string
  }
  /**
   * Radius values for the theme:
   * xs3 = 4 , xs2 = 8, xs = 10, sm = 12, md = 16, lg = 18, xl = 24, xl2 = 32, xl3 = 40, round = 1000
   */
  radius?: MantineThemeOverride['radius'] & {
    xs3?: string
    xs2?: string
    xl2?: string
    xl3?: string
    round?: string
  }
  /**
   * Heading values for the theme:
   * h1 = 40/44/700, h2 = 32/36/500, h3 = 24/28/500, h4 = 20/24/500
   */
  headings?: MantineThemeOverride['headings']
  other?: {
    tokens?: SemanticTokens
  }
}

/**
 * @description Color variants for components
 *  */
export type ColorVariants = {
  text: Intent | 'primary' | 'secondary' | 'muted' | 'inverted'
  interaction: Intent | 'primary' | 'secondary' | 'muted' | 'inverted'
  bg: 'base' | 'raised' | 'soft' | Variant
  border: 'subtle' | 'strong'
}
