import type { Section } from './types'

export const site = {
  // Replace with your name. It appears in the header, the home page and the tab title.
  name: 'Czechsican',
  tagline: 'Software Developer, photographer and graphic designer.',
}

export const sections: Section[] = [
  {
    id: 'websites',
    path: '/websites',
    label: 'Websites',
    channel: 'cyan',
    blurb: 'Sites and apps built with TypeScript and React.',
  },
  {
    id: 'photography',
    path: '/photography',
    label: 'Photography',
    channel: 'magenta',
    blurb: 'Series, covers and commissions.',
  },
  {
    id: 'print',
    path: '/print',
    label: 'Print',
    channel: 'yellow',
    blurb: 'Signage, posters and merch.',
  },
  {
    id: 'about',
    path: '/about',
    label: 'About',
    channel: 'ink',
    blurb: 'Who is behind the work.',
  },
]

export const sectionById = (id: Section['id']): Section => {
  const found = sections.find((s) => s.id === id)
  if (!found) throw new Error(`Unknown section: ${id}`)
  return found
}
