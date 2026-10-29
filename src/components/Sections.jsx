import { ArrowUpRight, Mail, Phone, Github, Linkedin, Download } from 'lucide-react'
import { capabilities, experience, education, stack, profile } from '../data/site'

export function Capabilities() {
  return (
    <section className="section section--dark" id="services">
      <div className="shell">
        <div className="section__head">
          <div>
            <h2 className="section__title">What I do beyond the code</h2>
            <span className="section__count">{capabilities.length} areas</span>
          </div>
          <p className="section__note">
            A site is only half the job. These are the parts clients usually have to hire a second
            person for — the server, the security, the automation and the search visibility.
          </p>
        </div>

        <div className="caps">
          {capabilities.map((c) => (
            <article className="cap" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <div className="cap__items">
                {c.items.map((i) => <span key={i}>{i}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section className="section section--tint" id="experience">
      <div className="shell">
        <div className="section__head">
          <div>
            <h2 className="section__title">Experience</h2>
            <span className="section__count">Jan 2021 — present</span>
          </div>
          <p className="section__note">
            Five years of continuous production work: four years and nine months on a London
            e-commerce group, now building and operating sites from Dhaka.
          </p>
        </div>

        <div className="roles">
          {experience.map((role) => (
            <article className="role" key={role.company}>
              <div className="role__meta">
                <p className="role__period">{role.period}</p>
                <h3 className="role__company">
                  {role.company}
                  {role.current && <span className="badge-now">now</span>}
                </h3>
                <p className="role__where">{role.location}</p>
              </div>
              <div>
                <h4 className="role__title">{role.role}</h4>
                <p className="role__body">{role.body}</p>
                <ul className="role__list">
                  {role.achievements.map((a) => <li key={a}>{a}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="edu">
          <div>
            <h3>Education</h3>
            <p>{education.degree}</p>
            <p>{education.school} · {education.period}</p>
            <p className="edu__result">{education.result}</p>
          </div>
          <div>
            <h3>Training</h3>
            <p>{education.certification}</p>
            <p className="edu__result">BASIS certified</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Stack() {
  return (
    <section className="section" id="stack">
      <div className="shell">
        <div className="section__head">
          <div>
            <h2 className="section__title">Stack</h2>
            <span className="section__count">Things I use in production, not things I have read about</span>
          </div>
          <p className="section__note">
            Strongest in PHP and the WordPress and Shopify ecosystems, comfortable in JavaScript and
            React, and responsible for the infrastructure under most of what I ship.
          </p>
        </div>

        <div className="stack">
          {stack.map((row) => (
            <div className="stack__row" key={row.group}>
              <h3 className="stack__group">{row.group}</h3>
              <div className="stack__items">
                {row.items.map((i) => <span key={i}>{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const links = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    { label: 'Phone & WhatsApp', value: profile.phone, href: `tel:${profile.phoneHref}`, Icon: Phone },
    { label: 'GitHub', value: 'github.com/Imran4191', href: profile.github, Icon: Github },
    { label: 'LinkedIn', value: 'Md Imran Hossain', href: profile.linkedin, Icon: Linkedin },
  ]

  return (
    <section className="section section--dark" id="contact">
      <div className="shell contact__grid">
        <div>
          <h2 className="contact__lead">Tell me what you are trying to launch.</h2>
          <p className="contact__sub">
            Full-time roles, contract work or a single build — I reply to everything, usually the
            same day. Dhaka time, but I have spent five years working to UK hours.
          </p>
          <p style={{ marginTop: '1.75rem' }}>
            <a className="btn btn--solid" href={profile.cv} download>
              Download CV
              <Download size={16} aria-hidden="true" />
            </a>
          </p>
        </div>

        <div className="contact__links">
          {links.map((link) => (
            <a
              className="contact__link"
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span>
                <span className="contact__link-label">{link.label}</span>
                <span className="contact__link-value">{link.value}</span>
              </span>
              <link.Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="shell foot__inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          {' · '}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          {' · '}
          <a href={`mailto:${profile.email}`}>Email</a>
        </p>
      </div>
    </footer>
  )
}
