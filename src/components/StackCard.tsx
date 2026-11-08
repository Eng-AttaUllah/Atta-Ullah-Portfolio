import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { ProjectPoster } from './ProjectPoster'

interface StackCardProps {
  project: Project
  position: number
  total: number
}

export function StackCard({ project, position, total }: StackCardProps) {
  const style = {
    '--accent': project.accent,
    top: `calc(var(--nav-h) + 20px + ${position * 12}px)`,
  } as CSSProperties

  return (
    <Link to={`/work/${project.slug}`} className="stack-card" style={style}>
      <div className="stack-content">
        <div className="stack-top">
          <span className="stack-index">
            {project.index} / {String(total).padStart(2, '0')}
          </span>
          <span className="stack-status">
            <i />
            {project.statusLabel}
          </span>
        </div>

        <div>
          <h3 className="stack-title">{project.name}</h3>
          <p className="stack-tagline">{project.tagline}</p>
          <div className="stack-pills">
            {project.stack.map((item) => (
              <span className="pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="stack-bottom">
          <span className="stack-link">
            View case study
            <span className="arrow-circle">
              <ArrowUpRight />
            </span>
          </span>
          <span className="stack-year">{project.year}</span>
        </div>
      </div>

      <div className="stack-visual">
        <ProjectPoster project={project} />
      </div>
    </Link>
  )
}
