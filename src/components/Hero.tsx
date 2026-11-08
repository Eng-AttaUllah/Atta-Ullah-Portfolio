import { ArrowUpRight, Download, MapPin, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { site, stats } from '../data/site'
import { asset } from '../lib/asset'
import { Clock } from './Clock'
import { Magnetic } from './Magnetic'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()

  const fade = (delay: number, y = 22) => ({
    initial: reduce ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: EASE },
  })

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow--a" />
        <div className="hero-glow hero-glow--b" />
      </div>

      <div className="container hero-inner">
        <div className="hero-main">
          <motion.div className="hero-kicker mono" {...fade(0.05)}>
            <span className="status-dot" />
            <span>Open to work · 2026</span>
            <span className="slash">/</span>
            <span className="desktop-only">{site.role}</span>
          </motion.div>

          <h1 className="hero-title">
            <motion.span className="hero-line" {...fade(0.12)}>
              Turning
            </motion.span>{' '}
            <motion.span className="hero-line hero-line--indent" {...fade(0.2)}>
              raw data into
            </motion.span>{' '}
            <motion.span className="hero-line" {...fade(0.28)}>
              <em>predictions</em>.
            </motion.span>
          </h1>

          <motion.p className="hero-lede" {...fade(0.36)}>
            I&apos;m <strong>{site.name}</strong> — an AI undergraduate from Mardan. I make models
            that catch spam, spot theft and read ads — then build the interfaces around them.
          </motion.p>

          <motion.div className="hero-actions" {...fade(0.44)}>
            <Magnetic>
              <Link to="/work" className="btn btn--lime">
                View selected work
                <ArrowUpRight />
              </Link>
            </Magnetic>
            <a className="btn btn--ghost" href={asset(site.resumePdf)} download>
              Download CV
              <Download />
            </a>
          </motion.div>

          <motion.div className="hero-meta" {...fade(0.52)}>
            <span>
              <MapPin />
              {site.locationShort}
            </span>
            <span>
              <Clock seconds />
            </span>
            <span>
              <Sparkles />
              CGPA {site.cgpa}
            </span>
          </motion.div>
        </div>

        <motion.aside className="hero-aside" {...fade(0.28, 30)}>
          <div className="portrait-wrap">
            <svg className="orbit-badge" viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <path
                  id="orbit-path"
                  d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                  fill="none"
                />
              </defs>
              <text>
                <textPath href="#orbit-path">
                  OPEN TO WORK · AI &amp; ML · LET&apos;S BUILD ·
                </textPath>
              </text>
            </svg>

            <div className="portrait-card">
              <span className="portrait-sticker">Open to work · 2026</span>
              <img
                src={asset('profile-cutout.webp')}
                alt={`${site.name}, ${site.role}`}
                width={900}
                height={1125}
                fetchPriority="high"
              />
              <div className="portrait-caption">
                <div>
                  <strong>{site.name}</strong>
                  <span>{site.role}</span>
                  <span className="portrait-note hand">probably debugging</span>
                </div>
                <Clock seconds />
              </div>
            </div>
          </div>
        </motion.aside>
      </div>

      <div className="container">
        <motion.div className="hero-stats" {...fade(0.6)}>
          {stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <div className="hero-stat-value">{stat.value}</div>
              <div className="hero-stat-label">{stat.label}</div>
              <div className="hero-stat-detail">{stat.detail}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
