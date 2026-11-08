import {
  ArrowUpRight,
  Atom,
  Boxes,
  Brain,
  Database,
  Eye,
  FileCode2,
  GitBranch,
  GraduationCap,
  Grid3x3,
  Hammer,
  Inbox,
  Layers,
  MapPin,
  Sparkles,
  Table2,
  Terminal,
  Wind,
  type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { bio } from '../data/about'
import { nowItems, site, stats, toolkit } from '../data/site'
import { Clock } from './Clock'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import { SocialIcon } from './SocialIcon'

const toolIcons: Record<string, LucideIcon> = {
  Python: Terminal,
  'scikit-learn': Brain,
  TensorFlow: Boxes,
  OpenCV: Eye,
  NumPy: Grid3x3,
  Pandas: Table2,
  React: Atom,
  'Next.js': Layers,
  TypeScript: FileCode2,
  Tailwind: Wind,
  SQL: Database,
  Git: GitBranch,
}

const nowIcons: Record<string, LucideIcon> = {
  hammer: Hammer,
  cap: GraduationCap,
  sparkles: Sparkles,
  inbox: Inbox,
}

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
                <b>01</b> — The short version
              </span>
              <h3>
                I turn messy signals into <em>useful</em> things.
              </h3>
              <p>{bio[0]}</p>
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
                <cite className="hand">a rule, not a slogan</cite>
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
                <b>03</b> — Tools I reach for
              </span>
              <div className="toolkit-grid">
                {toolkit.map((tool) => {
                  const Icon = toolIcons[tool] ?? Sparkles
                  return (
                    <div className="toolkit-item" key={tool}>
                      <span className="toolkit-icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <span>{tool}</span>
                    </div>
                  )
                })}
              </div>
              <span className="toolkit-note hand">the ones I reach for first</span>
            </article>

            <article className="bento-card bento-now">
              <span className="card-label">
                <b>04</b> — These days
              </span>
              <dl className="now-list">
                {nowItems.map((item) => {
                  const Icon = nowIcons[item.icon] ?? Sparkles
                  return (
                    <div className="now-row" key={item.label}>
                      <dt>
                        <Icon aria-hidden="true" />
                        {item.label}
                      </dt>
                      <dd>{item.value}</dd>
                    </div>
                  )
                })}
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
