import { defineConfig } from 'eslint/config'
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import _import from 'eslint-plugin-import'
import react from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  {
    extends: fixupConfigRules(
      compat.extends(
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:import/errors',
        'plugin:import/warnings',
      ),
    ),

    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      import: fixupPluginRules(_import),
      react: fixupPluginRules(react),
      prettier,
      'react-hooks': fixupPluginRules(reactHooks),
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          modules: true,
          experimentalObjectRestSpread: true,
        },

        project: './tsconfig.app.json',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    ignores: [
      'build/',
      'node_modules/',
      '.prettierrc.json',
      'tsconfig.tsbuildinfo',
      'vitest.workspace.ts',
      'vitest.config.ts',
      'vite.config.ts',
      'postcss.config.cjs',
      'eslint.config.mjs',
      'tsconfig.app.json',
      '.storybook/**',
      'coverage/**',
      // 'EXAMPLE/**',
    ],
    rules: {
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
        },
      ],

      quotes: ['error', 'single'],
      'jsx-a11y/anchor-is-valid': ['off'],

      'import/order': [
        'error',
        {
          groups: ['external', 'type', ['builtin', 'internal'], ['parent', 'sibling'], 'index', 'unknown'],

          pathGroups: [
            {
              pattern: '@**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@components/**',
              group: 'internal',
            },
          ],

          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
        },
      ],

      semi: ['error', 'never'],
      'linebreak-style': 'off',
      'no-alert': 'warn',
      'no-shadow': 'off',
      'operator-linebreak': 'off',
      'no-else-return': 'error',
      'no-cond-assign': 'error',
      'no-lonely-if': 'warn',
      indent: 'off',
      'arrow-parens': 'off',
      'object-curly-newline': 'off',
      'max-len': ['off', 150],
      'no-duplicate-case': 'warn',
      'no-param-reassign': 'off',
      'implicit-arrow-linebreak': 'off',
      'react/jsx-filename-extension': 'off',

      'react/jsx-key': [
        'warn',
        {
          checkFragmentShorthand: true,
        },
      ],

      'react/jsx-no-duplicate-props': 'warn',
      'react/jsx-props-no-spreading': 'off',
      'react/no-unescaped-entities': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react-hooks/exhaustive-deps': 'warn',

      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],

      'max-lines-per-function': ['warn', 200],
      'import/no-default-export': 'warn',
      'import/extensions': 'off',
      'import/named': 'off',
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-handler-names': ['warn'],
      'no-unused-expressions': 'warn',
      'no-unused-vars': 'off',

      'no-plusplus': [
        'error',
        {
          allowForLoopAfterthoughts: true,
        },
      ],

      '@typescript-eslint/no-unused-expressions': ['error', {}],
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
  {
    files: ['**/*.stories.*'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
])
