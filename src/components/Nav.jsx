import { ArrowUpRight } from 'lucide-react'

const links = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'What I do' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
]

export default function Nav({ active, go }) {
  return (
    <nav className="nav" aria-label="Primary">
      <div className="shell nav__inner">
        <button className="nav__name" onClick={() => go('top')}>
          Imran Hossain
        </button>

        <div className="nav__links">
          {links.map((l) => (
            <button
              key={l.id}
              className="nav__link"
              aria-current={active === l.id}
              onClick={() => go(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>

        <a className="nav__cta" href="#contact" onClick={(e) => { e.preventDefault(); go('contact') }}>
          Get in touch
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </nav>
  )
}
