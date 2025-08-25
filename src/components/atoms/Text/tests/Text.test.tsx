import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Text } from '../ui/Text'

describe('Text', () => {
  it('applies color class based on token', () => {
    const { container } = render(<Text color="info">Hello</Text>)
    const element = container.querySelector('.text-root')
    expect(element).toHaveClass('text-root--info')
  })
})
