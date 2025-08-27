import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Title } from '../ui'

describe('Title', () => {
  it('renders with default class', () => {
    const { container } = render(<Title>Heading</Title>)
    const element = container.querySelector('.title-root')
    expect(element).toBeTruthy()
  })

  it('applies color class', () => {
    const { container } = render(<Title color="success">Test</Title>)
    const element = container.querySelector('.title-root')
    expect(element?.classList.contains('title-root--success')).toBe(true)
  })
})
