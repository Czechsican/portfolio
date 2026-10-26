import { PhotoGallery } from '../components/PhotoGallery'
import { ProjectGrid } from '../components/ProjectGrid'
import { sectionById } from '../content/site'
import type { Project, Section } from '../content/types'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

interface SectionIndexProps {
  sectionId: Section['id']
  projects: Project[]
  /** Set when projects have their own pages. */
  linked?: boolean
}

/** The list page for websites, photography and print. */
export function SectionIndex({ sectionId, projects, linked = false }: SectionIndexProps) {
  const section = sectionById(sectionId)
  useDocumentTitle(section.label)

  return (
    <div className="page" data-channel={section.channel}>
      <h1 className="page__title">{section.label}</h1>
      <p className="page__intro">{section.blurb}</p>
      <ProjectGrid
        projects={projects}
        channel={section.channel}
        basePath={linked ? section.path : undefined}
      />
      {sectionId === 'photography' && <PhotoGallery />}
    </div>
  )
}
