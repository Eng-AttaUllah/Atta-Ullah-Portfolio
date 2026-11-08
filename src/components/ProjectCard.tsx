import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { ProjectPoster } from './ProjectPoster'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="work-card"
      style={{ '--accent': project.accent } as CSSProperties}
    >
      <ProjectPoster project={project} />
      <div className="work-card-body">
        <div className="work-card-top">
          <span className="work-card-index">{project.index}</span>
          <span className="work-card-cat">{project.category}</span>
        </div>
        <h2 className="work-card-title">{project.name}</h2>
        <p className="work-card-tagline">{project.tagline}</p>
        <div className="work-card-foot">
          <div className="work-card-stack">
            {project.stack.slice(0, 3).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <span className="work-card-arrow">
            <ArrowUpRight />
          </span>
        </div>
      </div>
    </Link>
  )
}
