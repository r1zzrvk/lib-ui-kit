import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { describe, expect, it } from 'vitest'

import { Alert } from '../ui/Alert'

describe('Alert', () => {
  it('renders children', () => {
    render(<Alert>Test alert</Alert>)
    expect(screen.getByText('Test alert')).toBeInTheDocument()
  })

  it('applies variant', () => {
    render(
      <Alert color="info" variant="light">
        Info alert
      </Alert>,
    )
    const element = screen.getByText('Info alert').closest('.mantine-Alert-root')
    expect(element).toHaveAttribute('data-variant', 'light')
  })
})
