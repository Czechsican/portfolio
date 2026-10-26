import { Link } from 'react-router-dom'
import { photography, print, websites } from '../content/projects'
import { sections, site } from '../content/site'
import type { Section } from '../content/types'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const counts: Partial<Record<Section['id'], number>> = {
  websites: websites.length,
  photography: photography.length,
  print: print.length,
}

const detail = (section: Section) => {
  const count = counts[section.id]
  if (count === undefined) return section.blurb
  return `${count} ${count === 1 ? 'project' : 'projects'}. ${section.blurb}`
}

export function Home() {
  useDocumentTitle()

  return (
    <div className="home">
      <div className="home__intro">
        <h1 className="home__name">{site.name}</h1>
        <p className="home__tagline">{site.tagline}</p>
      </div>
      <nav aria-label="Sections">
        <ul className="panels">
          {sections.map((s) => (
            <li key={s.id} className="panels__item">
              <Link className="panel" to={s.path} data-channel={s.channel}>
                <span className="panel__label">{s.label}</span>
                <span className="panel__detail">{detail(s)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
