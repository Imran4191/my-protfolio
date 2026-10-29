import { Mail, Phone, MapPin, Download, ArrowDown } from 'lucide-react'
import { profile, stats } from '../data/site'
import { projects } from '../data/projects'

export default function Hero({ go }) {
  const live = projects.filter((p) => p.url && p.domain.includes('.'))
  const marquee = [...live, ...live]

  return (
    <header className="hero" id="top">
      <div className="shell">
        {profile.available && (
          <p className="hero__status rise" style={{ animationDelay: '0.05s' }}>
            <span className="hero__dot" aria-hidden="true" />
            Open to full-time roles and freelance projects
          </p>
        )}

        <h1 className="hero__title">
          {profile.headline.map((line, i) => (
            <span key={line} className="rise" style={{ animationDelay: `${0.12 + i * 0.09}s` }}>
              {line}
            </span>
          ))}
        </h1>

        <div className="hero__cols">
          <div>
            <p className="hero__lede rise" style={{ animationDelay: '0.34s' }}>
              {profile.standfirst}
            </p>

            <div className="hero__actions rise" style={{ animationDelay: '0.42s' }}>
              <button className="btn btn--solid" onClick={() => go('work')}>
                See the work
                <ArrowDown size={16} aria-hidden="true" />
              </button>
              <a className="btn btn--ghost" href={profile.cv} download>
                Download CV
                <Download size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="hero__meta rise" style={{ animationDelay: '0.5s' }}>
              <a href={`mailto:${profile.email}`}>
                <Mail size={16} aria-hidden="true" />
                {profile.email}
              </a>
              <a href={`tel:${profile.phoneHref}`}>
                <Phone size={16} aria-hidden="true" />
                {profile.phone}
              </a>
              <span>
                <MapPin size={16} aria-hidden="true" />
                {profile.location}
              </span>
            </div>
          </div>

          <dl className="hero__facts rise" style={{ animationDelay: '0.54s' }}>
            {stats.map((s) => (
              <div className="hero__fact" key={s.label}>
                <dt className="hero__fact-label">{s.label}</dt>
                <dd className="hero__fact-value">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="ticker rise" style={{ animationDelay: '0.6s' }}>
        <p className="ticker__label">Live right now</p>
        <div className="ticker__window">
        <div className="ticker__track">
          {marquee.map((p, i) => (
            <a
              key={`${p.domain}-${i}`}
              className="ticker__item"
              href={p.url}
              target="_blank"
              rel="noreferrer"
              tabIndex={i < live.length ? 0 : -1}
              aria-hidden={i >= live.length}
            >
              {p.domain}
            </a>
          ))}
        </div>
        </div>
      </div>
    </header>
  )
}
