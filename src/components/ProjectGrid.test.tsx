import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import type { Project } from '../content/types'
import { ProjectGrid } from './ProjectGrid'

const projects: Project[] = [
  { slug: 'one', title: 'One', location: 'Calgary', summary: 'First', body: ['x'], tags: ['a', 'b'] },
  { slug: 'two', title: 'Two', location: 'Toronto', summary: 'Second', body: ['y'], tags: [] },
]

const renderGrid = (props: Partial<Parameters<typeof ProjectGrid>[0]> = {}) =>
  render(
    <MemoryRouter>
      <ProjectGrid projects={projects} channel="cyan" {...props} />
    </MemoryRouter>,
  )

describe('ProjectGrid', () => {
  it('links each card to its project page when a base path is given', () => {
    renderGrid({ basePath: '/websites' })
    expect(screen.getByRole('link', { name: /One/ })).toHaveAttribute('href', '/websites/one')
    expect(screen.getByRole('link', { name: /Two/ })).toHaveAttribute('href', '/websites/two')
  })

  it('renders plain cards without links when there is no base path', () => {
    renderGrid()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.getByText('One')).toBeInTheDocument()
  })

  it('shows location and tags', () => {
    renderGrid()
    expect(screen.getByText('Calgary, a, b')).toBeInTheDocument()
  })

  it('shows an empty message when there are no projects', () => {
    renderGrid({ projects: [] })
    expect(screen.getByText(/No projects yet/)).toBeInTheDocument()
  })
})
