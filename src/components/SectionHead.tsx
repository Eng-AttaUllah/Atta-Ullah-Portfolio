import type { CSSProperties, ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface SectionHeadProps {
  index: string
  kicker: string
  title: ReactNode
  link?: { label: string; to: string }
}

export function SectionHead({ index, kicker, title, link }: SectionHeadProps) {
  return (
    <div className="section-head">
      <div>
        <div className="section-kicker mono">
          <span className="num">{index}</span>
          <span className="rule" />
          <span>{kicker}</span>
        </div>
        <h2 className="h2">{title}</h2>
      </div>
      {link ? (
        <Link className="section-link" to={link.to}>
          {link.label}
          <ArrowUpRight />
        </Link>
      ) : null}
    </div>
  )
}

export function accentVars(accent: string): CSSProperties {
  return { '--accent': accent } as CSSProperties
}
