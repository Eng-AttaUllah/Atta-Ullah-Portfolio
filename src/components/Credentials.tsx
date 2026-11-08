import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { certifications } from '../data/about'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

const issuerMeta: Record<string, { initials: string; color: string }> = {
  Scrimba: { initials: 'Sc', color: '#d7ff3e' },
  'DeepLearning.AI': { initials: 'DL', color: '#c4b5fd' },
  Microsoft: { initials: 'MS', color: '#67e8f9' },
  Meta: { initials: 'Me', color: '#ff9e64' },
  'UC Irvine': { initials: 'UCI', color: '#f9a8d4' },
  ZyroInterns: { initials: 'Zy', color: '#fde68a' },
}

export function Credentials() {
  return (
    <section className="section" id="credentials">
      <div className="container">
        <SectionHead
          index="04"
          kicker="Credentials"
          title={
            <>
              Proof of <em>work</em>.
            </>
          }
          link={{ label: 'Full résumé', to: '/resume' }}
        />

        <Reveal>
          <div className="cred-grid">
            {certifications.map((cert) => {
              const meta = issuerMeta[cert.issuer] ?? { initials: cert.issuer.slice(0, 2), color: '#d7ff3e' }
              return (
                <article className="cred-card" key={cert.name}>
                  <div className="cred-top">
                    <span
                      className="cred-badge"
                      style={{ '--badge': meta.color } as CSSProperties}
                      aria-hidden="true"
                    >
                      {meta.initials}
                    </span>
                    {cert.honor ? <span className="cred-honor">Honours</span> : null}
                  </div>
                  <h3 className="cred-name">{cert.short ?? cert.name}</h3>
                  <div className="cred-meta">
                    <span>{cert.issuer}</span>
                    <span>{cert.period}</span>
                  </div>
                </article>
              )
            })}

            <Link className="cred-card" to="/resume">
              <div className="cred-top">
                <span
                  className="cred-badge"
                  style={{ '--badge': '#d7ff3e' } as CSSProperties}
                  aria-hidden="true"
                >
                  CV
                </span>
                <ArrowUpRight size={15} />
              </div>
              <h3 className="cred-name">The full story</h3>
              <div className="cred-meta">
                <span>Experience, education &amp; activities</span>
                <span>Résumé</span>
              </div>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
