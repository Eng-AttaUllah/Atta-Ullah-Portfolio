import { Download, Printer } from 'lucide-react'
import { certifications, education, languages, timeline } from '../data/about'
import { site, skillGroups } from '../data/site'
import { asset } from '../lib/asset'
import { usePageTitle } from '../lib/usePageTitle'

export default function Resume() {
  usePageTitle('Résumé')

  const experience = timeline.filter((item) => item.type === 'experience')
  const activities = timeline.filter((item) => item.type === 'activity')

  return (
    <div className="container resume-page">
      <header className="resume-top">
        <div>
          <div className="section-kicker mono">
            <span className="num">CV</span>
            <span className="rule" />
            <span>Résumé</span>
          </div>
          <h1 className="resume-name">
            Atta <em>Ullah</em>.
          </h1>
          <p className="resume-role">
            {site.roleLong} · {site.location}
          </p>
        </div>
        <div className="resume-actions">
          <a className="btn btn--lime" href={asset(site.resumePdf)} download>
            <Download />
            Download PDF
          </a>
          <button type="button" className="btn btn--ghost" onClick={() => window.print()}>
            <Printer />
            Print
          </button>
        </div>
      </header>

      <section className="resume-section">
        <h2>Profile</h2>
        <div>
          <p className="resume-summary">{site.objective}</p>
          <div className="resume-contact-grid">
            <a href={`mailto:${site.email}`}>
              <span className="label">Email</span>
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}>
              <span className="label">Phone</span>
              {site.phone}
            </a>
            <span>
              <span className="label">Location</span>
              {site.location}
            </span>
            <a href="https://github.com/Eng-AttaUllah" target="_blank" rel="noreferrer">
              <span className="label">GitHub</span>
              github.com/Eng-AttaUllah
            </a>
            <a href="https://www.linkedin.com/in/attaullah" target="_blank" rel="noreferrer">
              <span className="label">LinkedIn</span>
              linkedin.com/in/attaullah
            </a>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <div>
          {experience.map((item) => (
            <article className="resume-entry" key={item.role}>
              <div>
                <h3>{item.role}</h3>
                <div className="org">{item.org}</div>
                <p>{item.detail}</p>
              </div>
              <div className="period">{item.year}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div>
          {education.map((item) => (
            <article className="resume-entry" key={item.degree}>
              <div>
                <h3>{item.degree}</h3>
                <div className="org">{item.school}</div>
                <p>{item.detail}</p>
                {item.extra ? <p>{item.extra}</p> : null}
              </div>
              <div className="period">{item.period}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <div className="resume-skills-grid">
          {skillGroups.map((group) => (
            <div className="resume-skill" key={group.label}>
              <h3>{group.label}</h3>
              <p>{group.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h2>Certifications</h2>
        <div className="resume-certs">
          {certifications.map((cert) => (
            <div className="resume-cert" key={cert.name}>
              <span>
                {cert.issuer} · {cert.period}
              </span>
              {cert.name}
              {cert.honor ? <em>Honours</em> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h2>Activities</h2>
        <div>
          {activities.map((item) => (
            <article className="resume-entry" key={item.role}>
              <div>
                <h3>{item.role}</h3>
                <div className="org">{item.org}</div>
                <p>{item.detail}</p>
              </div>
              <div className="period">{item.year}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h2>Languages</h2>
        <div className="resume-skills-grid">
          {languages.map((language) => (
            <div className="resume-skill" key={language.name}>
              <h3>{language.name}</h3>
              <p>{language.level}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
