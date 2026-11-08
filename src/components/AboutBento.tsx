import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { bio } from '../data/about'
import { nowItems, skillGroups, site, stats } from '../data/site'
import { Clock } from './Clock'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import { SocialIcon } from './SocialIcon'

export function AboutBento() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead
          index="02"
          kicker="About"
          title={
            <>
              A builder at the <em>intersection</em>.
            </>
          }
        />

        <Reveal>
          <div className="bento">
            <article className="bento-card bento-bio">
              <span className="card-label">
                <b>01</b> — Profile
              </span>
              <h3>
                I turn raw signals into <em>decisions</em> people can trust.
              </h3>
              <p>{bio[0]}</p>
              <p>{bio[1]}</p>
              <div className="bio-links">
                <a
                  className="bio-link"
                  href={site.socials[0].href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon icon="github" />
                  GitHub
                  <ArrowUpRight />
                </a>
                <a
                  className="bio-link"
                  href={site.socials[1].href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon icon="linkedin" />
                  LinkedIn
                  <ArrowUpRight />
                </a>
                <Link className="bio-link" to="/resume">
                  Full résumé
                  <ArrowUpRight />
                </Link>
              </div>
            </article>

            <article className="bento-card bento-quote">
              <div>
                <span className="card-label">
                  <b>02</b> — Working principle
                </span>
                <div className="quote-mark" aria-hidden="true">
                  “
                </div>
              </div>
              <div>
                <blockquote>Make it work. Make it honest. Then make it fast.</blockquote>
                <cite>How I build</cite>
              </div>
            </article>

            {stats.map((stat) => (
              <article className="bento-card bento-stat" key={stat.label}>
                <span className="card-label">{stat.label}</span>
                <div className="bento-stat-value">{stat.value}</div>
                <div className="bento-stat-detail">{stat.detail}</div>
              </article>
            ))}

            <article className="bento-card bento-skills">
              <span className="card-label">
                <b>03</b> — Toolkit
              </span>
              <div className="skills-groups">
                {skillGroups.map((group) => (
                  <div className="skill-group" key={group.label}>
                    <h4>{group.label}</h4>
                    <div className="skill-tags">
                      {group.items.map((item) => (
                        <span className="skill-tag" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="bento-card bento-now">
              <span className="card-label">
                <b>04</b> — Currently
              </span>
              <dl className="now-list">
                {nowItems.map((item) => (
                  <div className="now-row" key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="now-foot">
                <span>
                  <MapPin size={12} style={{ display: 'inline', marginRight: 5 }} />
                  {site.locationShort}
                </span>
                <Clock />
              </div>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
