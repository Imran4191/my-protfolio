import { useState } from 'react'
import { ArrowUpRight, Minus, Plus } from 'lucide-react'
import { projects, categories } from '../data/projects'

// Plates show the project wordmark, sized down as the name gets longer.
function markSize(name) {
  const n = name.length
  if (n <= 8) return 'clamp(2rem, 5.6vw, 3rem)'
  if (n <= 12) return 'clamp(1.65rem, 4.6vw, 2.35rem)'
  return 'clamp(1.3rem, 3.6vw, 1.85rem)'
}

function ProjectCard({ project, rank }) {
  const [open, setOpen] = useState(false)
  const panelId = `detail-${rank}`

  return (
    <article className="card">
      <div className="chrome">
        <span className="chrome__dots" aria-hidden="true">
          <i /><i /><i />
        </span>
        {project.url ? (
          <a className="chrome__bar" href={project.url} target="_blank" rel="noreferrer">
            <span>{project.domain}</span>
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        ) : (
          <span className="chrome__bar"><span>{project.domain}</span></span>
        )}
      </div>

      <div className="screen">
        {project.shot ? (
          <img src={project.shot} alt={`${project.name} website`} loading="lazy" />
        ) : (
          <div
            className="plate"
            role="img"
            aria-label={`${project.name} — ${project.kind}`}
            style={{ '--pb': project.tint.bg, '--pf': project.tint.fg, '--pa': project.tint.accent }}
          >
            <span className="plate__mark" style={{ fontSize: markSize(project.name) }}>
              {project.name}
            </span>
            <span className="plate__rule" />
            <span className="plate__kind">{project.kind}</span>
          </div>
        )}
      </div>

      <div className="card__body">
        <div className="card__top">
          <span className="card__index">{String(rank).padStart(2, '0')}</span>
          <h3 className="card__name">{project.name}</h3>
          <span className="card__year">{project.year}</span>
        </div>
        <p className="card__kind">{project.kind}</p>
        <p className="card__summary">{project.summary}</p>

        <div className="chips">
          {project.tech.map((t) => (
            <span className="chip" key={t}>{t}</span>
          ))}
        </div>

        {open && (
          <ul className="card__detail" id={panelId}>
            {project.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
        )}

        <div className="card__foot">
          <button
            className="disclose"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
          >
            {open ? <Minus size={14} aria-hidden="true" /> : <Plus size={14} aria-hidden="true" />}
            {open ? 'Hide detail' : 'What I built'}
          </button>
          {project.url && (
            <a className="card__link" href={project.url} target="_blank" rel="noreferrer">
              Open site
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Work() {
  const [filter, setFilter] = useState(categories[0])

  const shown = filter === categories[0]
    ? projects
    : projects.filter((p) => p.category === filter)

  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="section__head">
          <h2 className="section__title">Selected work</h2>
          <p className="section__note">
            A selection, ranked rather than listed. The first six are the builds I would want to be
            judged on; after that it runs from client sites down to internal systems and plugins.
          </p>
        </div>

        <div className="filters" role="group" aria-label="Filter projects by type">
          {categories.map((c) => (
            <button
              key={c}
              className="filter"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="work__grid">
          {shown.map((p) => (
            <ProjectCard key={p.name} project={p} rank={projects.indexOf(p) + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
