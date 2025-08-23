import type { CSSVariablesResolver, MantineTheme } from '@mantine/core'

/**
 * Get color from semantic tokens by key
 * @param theme - Mantine theme object
 * @param colorScheme - light or dark theme
 * @param tokenKey - token key (e.g. 'primary.solid')
 * @returns color value
 */
const getSemanticToken = (theme: MantineTheme, colorScheme: 'light' | 'dark', tokenKey: string) => {
  // For bg.base we use special logic
  if (tokenKey === 'bg.base') {
    return colorScheme === 'light' ? theme.white : theme.colors.dark[7]
  }

  // Get value from semantic tokens
  const semanticValue = theme.other?.tokens?.[colorScheme]?.[tokenKey]
  if (!semanticValue) {
    console.warn(`Semantic token not found: ${tokenKey}`)
    return theme.colors.gray[5] // fallback
  }

  // Parse value like 'orange.6' to theme.colors.orange[6]
  if (semanticValue === 'white') return theme.white
  if (semanticValue === 'black') return theme.black

  const [colorGroup, shade] = semanticValue.split('.')
  return theme.colors[colorGroup]?.[shade] || semanticValue
}

export const cssVariablesResolver: CSSVariablesResolver = theme => ({
  variables: {},

  // ===== LIGHT =====
  light: {
    // TEXT
    '--text-primary': getSemanticToken(theme, 'light', 'text.primary'),
    '--text-secondary': getSemanticToken(theme, 'light', 'text.secondary'),
    '--text-muted': getSemanticToken(theme, 'light', 'text.muted'),
    '--text-inverted': getSemanticToken(theme, 'light', 'text.inverted'),
    '--text-info': getSemanticToken(theme, 'light', 'text.info'),
    '--text-success': getSemanticToken(theme, 'light', 'text.success'),
    '--text-warning': getSemanticToken(theme, 'light', 'text.warning'),
    '--text-danger': getSemanticToken(theme, 'light', 'text.danger'),

    // BG
    '--bg-base': getSemanticToken(theme, 'light', 'bg.base'),
    '--bg-raised': getSemanticToken(theme, 'light', 'bg.raised'),
    '--bg-soft': getSemanticToken(theme, 'light', 'bg.soft'),
    '--bg-info': getSemanticToken(theme, 'light', 'bg.info'),
    '--bg-warning': getSemanticToken(theme, 'light', 'bg.warning'),
    '--bg-success': getSemanticToken(theme, 'light', 'bg.success'),
    '--bg-danger': getSemanticToken(theme, 'light', 'bg.danger'),

    // BORDER
    '--border-subtle': getSemanticToken(theme, 'light', 'border.subtle'),
    '--border-strong': getSemanticToken(theme, 'light', 'border.strong'),
    '--border-info': getSemanticToken(theme, 'light', 'border.info'),
    '--border-success': getSemanticToken(theme, 'light', 'border.success'),
    '--border-warning': getSemanticToken(theme, 'light', 'border.warning'),
    '--border-danger': getSemanticToken(theme, 'light', 'border.danger'),

    // PRIMARY
    '--primary-solid': getSemanticToken(theme, 'light', 'primary.solid'),
    '--primary-soft': getSemanticToken(theme, 'light', 'primary.soft'),
    '--primary-hover': getSemanticToken(theme, 'light', 'primary.hover'),
    '--primary-contrast': getSemanticToken(theme, 'light', 'primary.contrast'),
    '--primary-border': getSemanticToken(theme, 'light', 'primary.border'),

    // INFO
    '--info-solid': getSemanticToken(theme, 'light', 'info.solid'),
    '--info-soft': getSemanticToken(theme, 'light', 'info.soft'),
    '--info-hover': getSemanticToken(theme, 'light', 'info.hover'),
    '--info-contrast': getSemanticToken(theme, 'light', 'info.contrast'),
    '--info-border': getSemanticToken(theme, 'light', 'info.border'),

    // SUCCESS
    '--success-solid': getSemanticToken(theme, 'light', 'success.solid'),
    '--success-soft': getSemanticToken(theme, 'light', 'success.soft'),
    '--success-hover': getSemanticToken(theme, 'light', 'success.hover'),
    '--success-contrast': getSemanticToken(theme, 'light', 'success.contrast'),
    '--success-border': getSemanticToken(theme, 'light', 'success.border'),

    // WARNING
    '--warning-solid': getSemanticToken(theme, 'light', 'warning.solid'),
    '--warning-soft': getSemanticToken(theme, 'light', 'warning.soft'),
    '--warning-hover': getSemanticToken(theme, 'light', 'warning.hover'),
    '--warning-contrast': getSemanticToken(theme, 'light', 'warning.contrast'),
    '--warning-border': getSemanticToken(theme, 'light', 'warning.border'),

    // DANGER
    '--danger-solid': getSemanticToken(theme, 'light', 'danger.solid'),
    '--danger-soft': getSemanticToken(theme, 'light', 'danger.soft'),
    '--danger-hover': getSemanticToken(theme, 'light', 'danger.hover'),
    '--danger-contrast': getSemanticToken(theme, 'light', 'danger.contrast'),
    '--danger-border': getSemanticToken(theme, 'light', 'danger.border'),
  },

  // ===== DARK =====
  dark: {
    // TEXT
    '--text-primary': getSemanticToken(theme, 'dark', 'text.primary'),
    '--text-secondary': getSemanticToken(theme, 'dark', 'text.secondary'),
    '--text-muted': getSemanticToken(theme, 'dark', 'text.muted'),
    '--text-inverted': getSemanticToken(theme, 'dark', 'text.inverted'),
    '--text-info': getSemanticToken(theme, 'dark', 'text.info'),
    '--text-success': getSemanticToken(theme, 'dark', 'text.success'),
    '--text-warning': getSemanticToken(theme, 'dark', 'text.warning'),
    '--text-danger': getSemanticToken(theme, 'dark', 'text.danger'),

    // BG
    '--bg-base': getSemanticToken(theme, 'dark', 'bg.base'),
    '--bg-raised': getSemanticToken(theme, 'dark', 'bg.raised'),
    '--bg-soft': getSemanticToken(theme, 'dark', 'bg.soft'),
    '--bg-info': getSemanticToken(theme, 'dark', 'bg.info'),
    '--bg-warning': getSemanticToken(theme, 'dark', 'bg.warning'),
    '--bg-success': getSemanticToken(theme, 'dark', 'bg.success'),
    '--bg-danger': getSemanticToken(theme, 'dark', 'bg.danger'),

    // BORDER
    '--border-subtle': getSemanticToken(theme, 'dark', 'border.subtle'),
    '--border-strong': getSemanticToken(theme, 'dark', 'border.strong'),
    '--border-info': getSemanticToken(theme, 'dark', 'border.info'),
    '--border-success': getSemanticToken(theme, 'dark', 'border.success'),
    '--border-warning': getSemanticToken(theme, 'dark', 'border.warning'),
    '--border-danger': getSemanticToken(theme, 'dark', 'border.danger'),

    // PRIMARY
    '--primary-solid': getSemanticToken(theme, 'dark', 'primary.solid'),
    '--primary-soft': getSemanticToken(theme, 'dark', 'primary.soft'),
    '--primary-hover': getSemanticToken(theme, 'dark', 'primary.hover'),
    '--primary-contrast': getSemanticToken(theme, 'dark', 'primary.contrast'),
    '--primary-border': getSemanticToken(theme, 'dark', 'primary.border'),

    // INFO
    '--info-solid': getSemanticToken(theme, 'dark', 'info.solid'),
    '--info-soft': getSemanticToken(theme, 'dark', 'info.soft'),
    '--info-hover': getSemanticToken(theme, 'dark', 'info.hover'),
    '--info-contrast': getSemanticToken(theme, 'dark', 'info.contrast'),
    '--info-border': getSemanticToken(theme, 'dark', 'info.border'),

    // SUCCESS
    '--success-solid': getSemanticToken(theme, 'dark', 'success.solid'),
    '--success-soft': getSemanticToken(theme, 'dark', 'success.soft'),
    '--success-hover': getSemanticToken(theme, 'dark', 'success.hover'),
    '--success-contrast': getSemanticToken(theme, 'dark', 'success.contrast'),
    '--success-border': getSemanticToken(theme, 'dark', 'success.border'),

    // WARNING
    '--warning-solid': getSemanticToken(theme, 'dark', 'warning.solid'),
    '--warning-soft': getSemanticToken(theme, 'dark', 'warning.soft'),
    '--warning-hover': getSemanticToken(theme, 'dark', 'warning.hover'),
    '--warning-contrast': getSemanticToken(theme, 'dark', 'warning.contrast'),
    '--warning-border': getSemanticToken(theme, 'dark', 'warning.border'),

    // DANGER
    '--danger-solid': getSemanticToken(theme, 'dark', 'danger.solid'),
    '--danger-soft': getSemanticToken(theme, 'dark', 'danger.soft'),
    '--danger-hover': getSemanticToken(theme, 'dark', 'danger.hover'),
    '--danger-contrast': getSemanticToken(theme, 'dark', 'danger.contrast'),
    '--danger-border': getSemanticToken(theme, 'dark', 'danger.border'),
  },
})
