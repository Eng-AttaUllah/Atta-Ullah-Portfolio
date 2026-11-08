import { Briefcase, Download, GraduationCap, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { timeline } from '../data/about'
import { Reveal } from './Reveal'

const typeLabel = {
  experience: 'Experience',
  education: 'Education',
  activity: 'Community',
}

const typeIcon = {
  experience: Briefcase,
  education: GraduationCap,
  activity: Users,
}

export function Journey() {
  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="journey-grid">
          <div className="journey-side">
            <div className="section-kicker mono">
              <span className="num">03</span>
              <span className="rule" />
              <span>Journey</span>
            </div>
            <h2 className="h2">
              The road so <em>far</em>.
            </h2>
            <p>Still early. Still shipping. That&apos;s most of the story.</p>
            <Link to="/resume" className="btn btn--ghost btn--small">
              <Download />
              Full résumé
            </Link>
          </div>

          <div className="timeline">
            {timeline.map((item) => {
              const Icon = typeIcon[item.type]
              return (
                <Reveal key={`${item.year}-${item.role}`}>
                  <div className="timeline-item">
                    <div className="timeline-head">
                      <span className="timeline-year">{item.year}</span>
                      <span className={`timeline-type timeline-type--${item.type}`}>
                        <Icon aria-hidden="true" />
                        {typeLabel[item.type]}
                      </span>
                    </div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-org">{item.org}</div>
                    <p className="timeline-detail">{item.detail}</p>
                    {item.tags ? (
                      <div className="timeline-tags">
                        {item.tags.map((tag) => (
                          <span className="pill" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
