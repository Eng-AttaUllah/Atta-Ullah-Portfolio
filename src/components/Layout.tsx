import { useEffect } from 'react'
import Lenis from 'lenis'
import { useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Nav } from './Nav'
import { ScrollProgress } from './ScrollProgress'
import { registerLenis, scrollToElement, scrollToTop } from '../lib/smoothScroll'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => scrollToElement(hash, -88), 120)
      return () => window.clearTimeout(timer)
    }
    scrollToTop(true)
  }, [pathname, hash])

  return null
}

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    })
    registerLenis(lenis)

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = window.requestAnimationFrame(raf)
    }
    frame = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(frame)
      registerLenis(null)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const previous = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => {
      window.history.scrollRestoration = previous
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollProgress />
      <Nav />
      <ScrollManager />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
