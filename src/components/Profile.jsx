import { profile, pillars } from '../data/site'

export default function Profile() {
  return (
    <section className="profile" id="about" aria-label="About">
      <div className="shell">
        <div className="profile__top">
          <div className="profile__portrait">
            <img src={profile.portrait} alt={profile.name} loading="lazy" />
          </div>

          <p className="profile__intro">
            I am {profile.name}, a full stack developer in {profile.location}. Most of my work is the
            unglamorous kind a business actually runs on: a checkout that takes bKash and card and
            cash on delivery, a plugin that files invoices so nobody has to type them, a directory
            that fills itself from scraped data, a phone agent that answers at two in the morning. I
            write the code, and I look after the server it runs on.
          </p>
        </div>

        <div className="pillars">
          {pillars.map((p) => (
            <article className="pillar" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
