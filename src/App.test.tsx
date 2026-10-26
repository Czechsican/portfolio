import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { photography, print, websites } from './content/projects'
import { site } from './content/site'
import { renderApp } from './test/renderApp'

describe('home page', () => {
  it('shows the name and a panel for each section', () => {
    renderApp('/')
    expect(screen.getByRole('heading', { level: 1, name: site.name })).toBeInTheDocument()

    const panels = within(screen.getByRole('navigation', { name: 'Sections' }))
    for (const label of ['Websites', 'Photography', 'Print', 'About']) {
      expect(panels.getByRole('link', { name: new RegExp(label) })).toBeInTheDocument()
    }
  })

  it('reports project counts on the panels', () => {
    renderApp('/')
    const panels = within(screen.getByRole('navigation', { name: 'Sections' }))
    expect(panels.getByRole('link', { name: /Websites/ })).toHaveTextContent(
      `${websites.length} projects`,
    )
  })

  it('opens a section from its panel', async () => {
    const { user } = renderApp('/')
    const panels = within(screen.getByRole('navigation', { name: 'Sections' }))
    await user.click(panels.getByRole('link', { name: /Photography/ }))
    expect(screen.getByRole('heading', { level: 1, name: 'Photography' })).toBeInTheDocument()
  })

  it('sets the tab title to the site name', () => {
    renderApp('/')
    expect(document.title).toBe(site.name)
  })
})

describe('navigation', () => {
  it('marks the current section in the header', () => {
    renderApp('/print')
    const nav = within(screen.getByRole('navigation', { name: 'Main' }))
    expect(nav.getByRole('link', { name: 'Print' })).toHaveAttribute('aria-current', 'page')
    expect(nav.getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-current')
  })

  it('returns home from the site name', async () => {
    const { user } = renderApp('/about')
    await user.click(screen.getByRole('link', { name: site.name }))
    expect(screen.getByRole('navigation', { name: 'Sections' })).toBeInTheDocument()
  })

  it('keeps the skip link pointing at the main landmark', () => {
    renderApp('/')
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main')
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main')
  })
})

describe('websites', () => {
  it('lists every website project', () => {
    renderApp('/websites')
    const main = within(screen.getByRole('main'))
    for (const p of websites) {
      expect(main.getByRole('link', { name: new RegExp(p.title) })).toBeInTheDocument()
    }
  })

  it('opens a project page from the list and links back', async () => {
    const { user } = renderApp('/websites')
    const first = websites[0]
    await user.click(within(screen.getByRole('main')).getByRole('link', { name: new RegExp(first.title) }))

    expect(screen.getByRole('heading', { level: 1, name: first.title })).toBeInTheDocument()
    expect(document.title).toContain(first.title)

    await user.click(within(screen.getByRole('main')).getByRole('link', { name: 'Websites' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Websites' })).toBeInTheDocument()
  })

  it('moves to the next project and wraps around at the end', async () => {
    const { user } = renderApp(`/websites/${websites[websites.length - 1].slug}`)
    await user.click(screen.getByRole('link', { name: websites[0].title }))
    expect(screen.getByRole('heading', { level: 1, name: websites[0].title })).toBeInTheDocument()
  })

  it('shows a helpful message for an unknown project', () => {
    renderApp('/websites/does-not-exist')
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Back to Websites' })).toHaveAttribute('href', '/websites')
  })
})

describe('photography', () => {
  it('lists the series and opens one', async () => {
    const { user } = renderApp('/photography')
    const series = photography[0]
    await user.click(within(screen.getByRole('main')).getByRole('link', { name: new RegExp(series.title) }))
    expect(screen.getByRole('heading', { level: 1, name: series.title })).toBeInTheDocument()
  })

  it('shows a helpful message for an unknown series', () => {
    renderApp('/photography/nope')
    expect(screen.getByRole('link', { name: 'Back to Photography' })).toHaveAttribute(
      'href',
      '/photography',
    )
  })
})

describe('print', () => {
  it('lists print work with a link to each project', () => {
    renderApp('/print')
    const main = within(screen.getByRole('main'))
    for (const p of print) {
      expect(main.getByText(p.title).closest('a')).toHaveAttribute('href', `/print/${p.slug}`)
    }
  })

  it('opens a project page', () => {
    renderApp(`/print/${print[0].slug}`)
    expect(screen.getByRole('heading', { level: 1, name: print[0].title })).toBeInTheDocument()
  })

  it('shows a not found page for an unknown project', () => {
    renderApp('/print/nope')
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument()
  })
})

describe('about', () => {
  it('renders the about page', () => {
    renderApp('/about')
    expect(screen.getByRole('heading', { level: 1, name: 'About' })).toBeInTheDocument()
    expect(document.title).toBe(`About | ${site.name}`)
  })
})

describe('unknown routes', () => {
  it('shows the not found page with a way home', () => {
    renderApp('/somewhere/else')
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Back to the home page' })).toHaveAttribute('href', '/')
  })
})
