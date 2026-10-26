import { fireEvent, render, screen } from '@testing-library/react'
import { PhotoGallery } from './PhotoGallery'

describe('PhotoGallery lightbox', () => {
  it('opens, steps through photos with the keyboard and closes on Escape', () => {
    render(<PhotoGallery />)
    fireEvent.click(screen.getAllByRole('button', { name: /full size/i })[0])
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText(/^1 \/ \d+$/)).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'ArrowRight' })
    expect(screen.getByText(/^2 \/ \d+$/)).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'ArrowLeft' })
    fireEvent.keyDown(window, { key: 'ArrowLeft' })
    expect(screen.getByText(/^\d+ \/ \d+$/).textContent).not.toMatch(/^1 /)

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
