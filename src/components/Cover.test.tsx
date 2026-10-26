import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Cover } from './Cover'

describe('Cover', () => {
  it('renders the image when the project has a cover', () => {
    render(
      <Cover
        channel="cyan"
        project={{ slug: 'a', title: 'A', cover: { src: '/images/a.jpg', alt: 'A mountain' } }}
      />,
    )
    const img = screen.getByRole('img', { name: 'A mountain' })
    expect(img).toHaveAttribute('src', '/images/a.jpg')
  })

  it('renders a labelled placeholder when there is no cover', () => {
    render(<Cover channel="magenta" project={{ slug: 'b', title: 'Project B' }} />)
    const placeholder = screen.getByRole('img', { name: 'Placeholder cover for Project B' })
    expect(placeholder).toHaveAttribute('data-channel', 'magenta')
  })

  it('gives the same slug the same dot size every time', () => {
    const dot = (slug: string) => {
      const { unmount } = render(<Cover channel="yellow" project={{ slug, title: slug }} />)
      const value = screen.getByRole('img').style.getPropertyValue('--dot')
      unmount()
      return value
    }
    expect(dot('same')).toBe(dot('same'))
    expect(dot('same')).toMatch(/^\d+px$/)
  })
})
