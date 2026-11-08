import Lenis from 'lenis'

let instance: Lenis | null = null

export function registerLenis(lenis: Lenis | null) {
  instance = lenis
}

export function scrollToTop(immediate = true) {
  if (instance) {
    instance.scrollTo(0, { immediate })
    return
  }
  window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' })
}

export function scrollToElement(target: string | HTMLElement, offset = -84) {
  const element =
    typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target

  if (!element) return

  if (instance) {
    instance.scrollTo(element, { offset, duration: 1.15 })
    return
  }

  const top = element.getBoundingClientRect().top + window.scrollY + offset
  window.scrollTo({ top, behavior: 'smooth' })
}

export function stopScroll() {
  document.body.style.overflow = 'hidden'
  instance?.stop()
}

export function startScroll() {
  document.body.style.overflow = ''
  instance?.start()
}
