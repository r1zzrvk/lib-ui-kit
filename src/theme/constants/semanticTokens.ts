import { createTheme, MantineThemeOverride } from '@mantine/core'

const text = {
  light: {
    'text.primary': 'dark.9',
    'text.secondary': 'gray.7',
    'text.muted': 'gray.6',
    'text.inverted': 'gray.0',
    'text.info': 'blue.6',
    'text.success': 'green.6',
    'text.warning': 'yellow.6',
    'text.danger': 'red.6',
  },
  dark: {
    'text.primary': 'gray.1',
    'text.secondary': 'gray.4',
    'text.muted': 'gray.5',
    'text.inverted': 'dark.9',
    'text.info': 'blue.8',
    'text.success': 'green.8',
    'text.warning': 'yellow.8',
    'text.danger': 'red.8',
  },
}

const bg = {
  light: {
    'bg.base': 'white',
    'bg.raised': 'gray.0',
    'bg.soft': 'gray.1',
    'bg.info': 'blue.0',
    'bg.warning': 'yellow.0',
    'bg.success': 'green.0',
    'bg.danger': 'red.0',
  },
  dark: {
    'bg.base': 'dark.7',
    'bg.raised': 'dark.6',
    'bg.soft': 'dark.5',
    'bg.info': 'blue.9',
    'bg.warning': 'yellow.9',
    'bg.success': 'green.9',
    'bg.danger': 'red.9',
  },
}

const border = {
  light: {
    'border.subtle': 'gray.3',
    'border.strong': 'gray.5',
    'border.info': 'blue.6',
    'border.success': 'green.6',
    'border.warning': 'yellow.6',
    'border.danger': 'red.6',
  },
  dark: {
    'border.subtle': 'dark.4',
    'border.strong': 'dark.3',
    'border.info': 'blue.8',
    'border.success': 'green.8',
    'border.warning': 'yellow.8',
    'border.danger': 'red.8',
  },
}

const primary = {
  light: {
    'primary.solid': 'orange.6',
    'primary.soft': 'orange.0',
    'primary.hover': 'orange.7',
    'primary.contrast': 'white',
    'primary.border': 'orange.6',
  },
  dark: {
    'primary.solid': 'orange.8',
    'primary.soft': 'orange.11',
    'primary.hover': 'orange.7',
    'primary.contrast': 'dark.9',
    'primary.border': 'orange.8',
  },
}

const info = {
  light: {
    'info.solid': 'blue.6',
    'info.soft': 'blue.0',
    'info.hover': 'blue.7',
    'info.contrast': 'white',
    'info.border': 'blue.6',
  },
  dark: {
    'info.solid': 'blue.8',
    'info.soft': 'blue.11',
    'info.hover': 'blue.7',
    'info.contrast': 'dark.9',
    'info.border': 'blue.8',
  },
}

const success = {
  light: {
    'success.solid': 'green.6',
    'success.soft': 'green.0',
    'success.hover': 'green.7',
    'success.contrast': 'white',
    'success.border': 'green.6',
  },
  dark: {
    'success.solid': 'green.8',
    'success.soft': 'green.11',
    'success.hover': 'green.7',
    'success.contrast': 'dark.9',
    'success.border': 'green.8',
  },
}

const warning = {
  light: {
    'warning.solid': 'yellow.6',
    'warning.soft': 'yellow.0',
    'warning.hover': 'yellow.7',
    'warning.contrast': 'white',
    'warning.border': 'yellow.6',
  },
  dark: {
    'warning.solid': 'yellow.8',
    'warning.soft': 'yellow.11',
    'warning.hover': 'yellow.7',
    'warning.contrast': 'dark.9',
    'warning.border': 'yellow.8',
  },
}

const danger = {
  light: {
    'danger.solid': 'red.6',
    'danger.soft': 'red.0',
    'danger.hover': 'red.7',
    'danger.contrast': 'white',
    'danger.border': 'red.6',
  },
  dark: {
    'danger.solid': 'red.8',
    'danger.soft': 'red.11',
    'danger.hover': 'red.7',
    'danger.contrast': 'dark.9',
    'danger.border': 'red.8',
  },
}

export const semanticTokens: MantineThemeOverride = createTheme({
  other: {
    tokens: {
      light: {
        ...text.light,
        ...bg.light,
        ...border.light,
        ...primary.light,
        ...info.light,
        ...success.light,
        ...warning.light,
        ...danger.light,
      },

      dark: {
        ...text.dark,
        ...bg.dark,
        ...border.dark,
        ...primary.dark,
        ...info.dark,
        ...success.dark,
        ...warning.dark,
        ...danger.dark,
      },
    },
  },
})
