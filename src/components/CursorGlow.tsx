import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'

export function CursorGlow() {
  const reduce = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-1000)
  const y = useMotionValue(-1000)
  const springX = useSpring(x, { stiffness: 120, damping: 24, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 120, damping: 24, mass: 0.6 })

  useEffect(() => {
    if (reduce) return
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!finePointer.matches) return

    setEnabled(true)

    const move = (event: PointerEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    const leave = () => {
      x.set(-1000)
      y.set(-1000)
    }

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
    }
  }, [reduce, x, y])

  if (!enabled) return null

  return (
    <motion.div
      className="cursor-glow"
      aria-hidden="true"
      style={{ x: springX, y: springY }}
    />
  )
}
