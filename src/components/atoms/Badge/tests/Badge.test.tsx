import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Badge } from '@components/atoms/Badge'

describe('Badge', () => {
  it('renders children', () => {
    const { container } = render(<Badge color="primary">Test badge</Badge>)
    expect(container.textContent).toContain('Test badge')
  })
})
