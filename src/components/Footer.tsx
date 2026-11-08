import { useState } from 'react'
import { ArrowUp, ArrowUpRight, Check, Copy } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { scrollToTop } from '../lib/smoothScroll'
import { Clock } from './Clock'
import { Reveal } from './Reveal'
import { SocialIcon } from './SocialIcon'

export function Footer() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
    } catch {
      const area = document.createElement('textarea')
      area.value = site.email
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      document.body.removeChild(area)
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="contact" id="contact">
      <span className="contact-ghost" aria-hidden="true">
        ATTA
      </span>

      <div className="container contact-inner">
        <Reveal>
          <div className="section-kicker mono">
            <span className="num">05</span>
            <span className="rule" />
            <span>Contact</span>
          </div>
          <h2 className="contact-title">
            Let&apos;s build something <em>worth shipping.</em>
          </h2>
          <p className="contact-lede">
            I&apos;m open to AI/ML internships, junior engineering roles, and interesting
            collaborations. If you have a problem that needs a model — or a product that needs a
            builder — my inbox is open.
          </p>

          <div className="contact-email-row">
            <a className="contact-email" href={`mailto:${site.email}`}>
              {site.email}
              <ArrowUpRight />
            </a>
            <button
              type="button"
              className="icon-btn"
              onClick={copyEmail}
              aria-label={copied ? 'Email copied' : 'Copy email address'}
              title={copied ? 'Copied' : 'Copy email address'}
            >
              {copied ? <Check /> : <Copy />}
            </button>
            <span className="mono" style={{ color: 'var(--faint)' }}>
              {copied ? 'Copied to clipboard' : 'Click to copy'}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="socials">
            {site.socials.map((social) => (
              <a
                key={social.label}
                className="social-link"
                href={social.href}
                target={social.icon === 'email' || social.icon === 'phone' ? undefined : '_blank'}
                rel={
                  social.icon === 'email' || social.icon === 'phone' ? undefined : 'noreferrer'
                }
              >
                <SocialIcon icon={social.icon} />
                <span className="social-label">{social.label}</span>
                <span className="social-handle">{social.handle}</span>
              </a>
            ))}
          </div>
        </Reveal>

        <div className="footer-bottom">
          <div className="footer-group">
            <span>© 2026 {site.name}</span>
            <span>·</span>
            <span>Built with React, Tailwind &amp; Motion</span>
          </div>
          <div className="footer-group">
            <Clock />
            <span>·</span>
            <span>{site.locationShort}</span>
          </div>
          <div className="footer-group">
            <Link to="/resume" className="back-top">
              Résumé
            </Link>
            <span>·</span>
            <button type="button" className="back-top" onClick={() => scrollToTop(false)}>
              <ArrowUp />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
