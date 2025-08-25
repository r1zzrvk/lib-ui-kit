import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Box } from '../ui'

describe('Box', () => {
  it('renders with default class', () => {
    const { container } = render(<Box>Content</Box>)
    const element = container.querySelector('.box-root')
    expect(element).toBeTruthy()
  })

  it('applies color class', () => {
    const { container } = render(<Box color="success">Test</Box>)
    const element = container.querySelector('.box-root')
    expect(element?.classList.contains('box-root--color-success')).toBe(true)
  })

  it('applies background and border classes', () => {
    const { container } = render(
      <Box bg="info" border="danger">
        Test
      </Box>,
    )
    const element = container.querySelector('.box-root')
    expect(element?.classList.contains('box-root--bg-info')).toBe(true)
    expect(element?.classList.contains('box-root--border-danger')).toBe(true)
  })
})
