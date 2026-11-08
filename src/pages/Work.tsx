import { useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { categories, projects } from '../data/projects'
import { usePageTitle } from '../lib/usePageTitle'

export default function Work() {
  usePageTitle('Work')
  const [filter, setFilter] = useState('All')

  const visible =
    filter === 'All' ? projects : projects.filter((project) => project.category === filter)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker mono">
            <span className="num">01</span>
            <span className="rule" />
            <span>Work</span>
          </div>
          <h1 className="page-title">
            All <em>work</em>.
          </h1>
          <p className="page-lede">
            Five projects across machine learning, computer vision and full-stack web. Some are
            shipped, some are in progress — all of them were built to answer a question I actually
            had.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="work-toolbar">
          <div className="filter-row" role="group" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-chip${filter === category ? ' active' : ''}`}
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
              >
                {category}
              </button>
            ))}
          </div>
          <span className="work-count">
            Showing <b>{String(visible.length).padStart(2, '0')}</b> of{' '}
            {String(projects.length).padStart(2, '0')}
          </span>
        </div>

        <Reveal>
          <div className="work-grid" key={filter}>
            {visible.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Reveal>

        {visible.length === 0 ? (
          <p className="empty-state mono">No projects in this category yet.</p>
        ) : null}
      </div>
    </>
  )
}
