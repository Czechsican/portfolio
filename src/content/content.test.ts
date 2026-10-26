import { describe, expect, it } from 'vitest'
import { photography, print, websites } from './projects'
import { sectionById, sections } from './site'

const collections = { websites, photography, print }

describe.each(Object.entries(collections))('%s content', (_name, projects) => {
  it('has at least one project', () => {
    expect(projects.length).toBeGreaterThan(0)
  })

  it('uses unique, URL-safe slugs', () => {
    const slugs = projects.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  })

  it('gives every project the fields the pages rely on', () => {
    for (const p of projects) {
      expect(p.title.trim()).not.toBe('')
      expect(p.summary.trim()).not.toBe('')
      expect(p.body.length).toBeGreaterThan(0)
      expect(p.location.trim()).not.toBe('')
    }
  })

  it('has alt text for every image', () => {
    for (const p of projects) {
      for (const image of [p.cover, ...(p.images ?? [])]) {
        if (image) expect(image.alt.trim()).not.toBe('')
      }
    }
  })
})

describe('sections', () => {
  it('lists websites, photography, print and about, each on its own path', () => {
    expect(sections.map((s) => s.id)).toEqual(['websites', 'photography', 'print', 'about'])
    expect(new Set(sections.map((s) => s.path)).size).toBe(sections.length)
  })

  it('looks sections up by id and rejects unknown ids', () => {
    expect(sectionById('print').label).toBe('Print')
    // @ts-expect-error deliberately invalid id
    expect(() => sectionById('nope')).toThrow(/Unknown section/)
  })
})
