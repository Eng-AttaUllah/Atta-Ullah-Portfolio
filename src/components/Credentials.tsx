import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { certifications } from '../data/about'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

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
            {certifications.map((cert) => (
              <article className="cred-card" key={cert.name}>
                <div className="cred-issuer">
                  <span>{cert.issuer}</span>
                  {cert.honor ? <span className="cred-honor">Honours</span> : null}
                </div>
                <h3 className="cred-name">{cert.name}</h3>
                <div className="cred-period">{cert.period}</div>
              </article>
            ))}

            <Link className="cred-card" to="/resume">
              <div className="cred-issuer">
                <span>Resume</span>
                <ArrowUpRight size={13} />
              </div>
              <h3
                className="cred-name"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                View every credential
                <ArrowUpRight size={17} />
              </h3>
              <div className="cred-period">Experience, education &amp; activities</div>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
