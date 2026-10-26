import type { CSSProperties } from 'react'
import type { Channel, Project } from '../content/types'

const hash = (text: string) => [...text].reduce((sum, ch) => (sum * 31 + ch.charCodeAt(0)) >>> 0, 7)

interface CoverProps {
  project: Pick<Project, 'slug' | 'title' | 'cover'>
  channel: Channel
}

/** The project's cover image, or a halftone placeholder in the section colour. */
export function Cover({ project, channel }: CoverProps) {
  if (project.cover) {
    return <img className="cover" src={project.cover.src} alt={project.cover.alt} loading="lazy" />
  }
  
  const style = { '--dot': `${9 + (hash(project.slug) % 9)}px` } as CSSProperties
  return (
    <div
      className="cover cover--placeholder"
      data-channel={channel}
      style={style}
      role="img"
      aria-label={`Placeholder cover for ${project.title}`}
    />
  )
}
