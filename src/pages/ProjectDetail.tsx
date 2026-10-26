import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Cover } from '../components/Cover'
import { Lightbox } from '../components/Lightbox'
import { sectionById } from '../content/site'
import type { Project, Section } from '../content/types'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { NotFound } from './NotFound'

interface ProjectDetailProps {
  sectionId: Section['id']
  projects: Project[]
}

/** A single project page, used for websites and photography. */
export function ProjectDetail({ sectionId, projects }: ProjectDetailProps) {
  const { slug } = useParams()
  const [open, setOpen] = useState<number | null>(null)
  const section = sectionById(sectionId)
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]
  useDocumentTitle(project ? `${project.title}, ${section.label}` : 'Not found')

  if (!project) {
    return (
      <NotFound
        message={`There is no ${section.label.toLowerCase()} project called “${slug}”.`}
        backTo={section.path}
        backLabel={`Back to ${section.label}`}
      />
    )
  }

  const next = projects[(index + 1) % projects.length]
  const details: [string, string][] = [['Location', project.location]]
  if (project.role) details.push(['Role', project.role])
  if (project.tags.length) details.push(['Tags', project.tags.join(', ')])

  const links = [
    ...(project.url
      ? [{ url: project.url, label: project.urlLabel ?? 'Visit the live site' }]
      : []),
    ...(project.links ?? []),
  ]

  /**
   * The main image first, then the rest: the order the lightbox steps through. A project with a
   * separate `hero` keeps its card `cover` as the first thumbnail.
   */
  const main = project.hero ?? project.cover
  const gallery = [
    ...(main ? [main] : []),
    ...(project.hero && project.cover ? [project.cover] : []),
    ...(project.images ?? []),
  ].map((image) => ({ key: image.src, src: image.src, name: image.alt }))
  const offset = main ? 1 : 0
  const thumbs = gallery.slice(offset)

  return (
    <article className="page project" data-channel={section.channel}>
      <p className="project__back">
        <Link to={section.path}>{section.label}</Link>
      </p>
      <h1 className="page__title">{project.title}</h1>
      <p className="page__intro">{project.summary}</p>

      <dl className="facts">
        {details.map(([term, value]) => (
          <div key={term} className="facts__row">
            <dt>{term}</dt>
            <dd>{value}</dd>
          </div>
        ))}
        {links.length > 0 && (
          <div className="facts__row">
            <dt>{links.length > 1 ? 'Links' : 'Link'}</dt>
            <dd className="facts__links">
              {links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                  {link.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </dd>
          </div>
        )}
      </dl>

      <div className="project__media">
        {main ? (
          <button
            type="button"
            className="project__open"
            aria-label={`View ${project.title} full size`}
            onClick={() => setOpen(0)}
          >
            <img className="cover" src={main.src} alt={main.alt} loading="lazy" />
          </button>
        ) : (
          <Cover project={project} channel={section.channel} />
        )}
        {thumbs.length > 0 && (
          <ul className="thumbs" aria-label={`${project.title} images`}>
            {thumbs.map((image, i) => (
              <li key={image.key}>
                <button
                  type="button"
                  className="project__open"
                  aria-label={`View image ${i + 1} of ${thumbs.length} full size`}
                  onClick={() => setOpen(i + offset)}
                >
                  <img className="thumbs__img" src={image.src} alt={image.name} loading="lazy" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="prose">
        {project.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {projects.length > 1 && (
        <p className="project__next">
          Next in {section.label.toLowerCase()}:{' '}
          <Link to={`${section.path}/${next.slug}`}>{next.title}</Link>
        </p>
      )}
      {open !== null && (
        <Lightbox
          photos={gallery}
          index={open}
          onIndexChange={setOpen}
          onClose={() => setOpen(null)}
        />
      )}
    </article>
  )
}
