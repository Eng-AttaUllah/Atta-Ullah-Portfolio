import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { nav, site } from '../data/site'
import { startScroll, stopScroll } from '../lib/smoothScroll'
import { Magnetic } from './Magnetic'

export function Nav() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const isWork = location.pathname.startsWith('/work')
  const isResume = location.pathname.startsWith('/resume')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!open) {
      startScroll()
      return
    }

    stopScroll()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      startScroll()
    }
  }, [open])

  return (
    <>
      <header className={`site-nav${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link className="brand" to="/">
            <span className="brand-mark" aria-hidden="true">
              {site.initials}
            </span>
            <span>
              <span className="brand-name">{site.name}</span>
              <span className="brand-role" aria-hidden="true">
                {site.role}
              </span>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`nav-link${
                  (item.to === '/work' && isWork) || (item.to === '/resume' && isResume)
                    ? ' is-active'
                    : ''
                }`}
                aria-current={item.to === '/work' && isWork ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <span className="nav-availability">
              <span className="status-dot" />
              Available
            </span>
            <Magnetic className="desktop-only">
              <Link to="/resume" className="btn btn--ghost btn--small">
                <Download />
                Résumé
              </Link>
            </Magnetic>
            <button
              type="button"
              className={`menu-toggle${open ? ' open' : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav
        id="mobile-menu"
        className={`mobile-menu${open ? ' open' : ''}`}
        aria-label="Mobile menu"
        aria-hidden={!open}
      >
        <div className="mobile-nav">
          {[...nav, { label: 'Résumé', to: '/resume' }].map((item, index) => (
            <Link
              key={item.label}
              to={item.to}
              className="mobile-nav-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
              <span className="mono">0{index + 1}</span>
            </Link>
          ))}
        </div>

        <div className="mobile-menu-foot">
          <div>
            <a className="mono accent" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <div className="mobile-socials" style={{ marginTop: 14 }}>
              {site.socials.slice(0, 3).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.icon === 'email' ? undefined : '_blank'}
                  rel={social.icon === 'email' ? undefined : 'noreferrer'}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <span className="status-dot" aria-hidden="true" />
        </div>
      </nav>
    </>
  )
}
