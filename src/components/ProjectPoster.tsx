import type { CSSProperties } from 'react'
import { FileCode, ListChecks, MailX, ScanEye, ScanLine, Store } from 'lucide-react'
import type { Project } from '../data/projects'

const icons = {
  adveto: ScanEye,
  docsmith: FileCode,
  'theft-detection': ScanLine,
  'ai-shopkeeper': Store,
  daymark: ListChecks,
  'spam-detector': MailX,
}

interface ProjectPosterProps {
  project: Project
  className?: string
}

export function ProjectPoster({ project, className }: ProjectPosterProps) {
  const Icon = icons[project.slug as keyof typeof icons] ?? ScanEye
  const words = project.name.split(' ')
  const first = words[0]
  const rest = words.slice(1).join(' ')

  return (
    <div
      className={`poster${className ? ` ${className}` : ''}`}
      style={{ '--accent': project.accent } as CSSProperties}
      role="img"
      aria-label={`Abstract artwork for ${project.name}`}
    >
      <div className="poster-glow" />
      <div className="poster-orbit poster-orbit--a" />
      <div className="poster-orbit poster-orbit--b" />
      <div className="poster-orbit poster-orbit--c" />
      <div className="poster-top">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>
      <Icon className="poster-icon" strokeWidth={0.9} />
      <span className="poster-number">{project.index}</span>
      <span className="poster-name">
        <span>{first}</span>
        {rest ? ` ${rest}` : ''}
      </span>
      <div className="poster-tags">
        {project.stack.slice(0, 2).map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="poster-scan" />
    </div>
  )
}
