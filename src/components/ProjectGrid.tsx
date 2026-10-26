import { Link } from 'react-router-dom'
import type { Channel, Project } from '../content/types'
import { Cover } from './Cover'

interface ProjectGridProps {
  projects: Project[]
  channel: Channel
  /** When set, each card links to `${basePath}/${slug}`. Without it, cards are not links. */
  basePath?: string
}

export function ProjectGrid({ projects, channel, basePath }: ProjectGridProps) {
  if (projects.length === 0) {
    return <p className="empty">No projects yet. Add one in src/content.</p>
  }

  return (
    <ul className="grid">
      {projects.map((project) => {
        const card = (
          <>
            <Cover project={project} channel={channel} />
            <span className="card__title">{project.title}</span>
            <span className="card__meta">
              {project.location}, {project.tags.join(', ')}
            </span>
            <span className="card__summary">{project.summary}</span>
          </>
        )
        return (
          <li key={project.slug} className="card">
            {basePath ? (
              <Link className="card__link" to={`${basePath}/${project.slug}`}>
                {card}
              </Link>
            ) : (
              <div className="card__link card__link--static">{card}</div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
