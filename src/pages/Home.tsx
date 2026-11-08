import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AboutBento } from '../components/AboutBento'
import { Credentials } from '../components/Credentials'
import { Hero } from '../components/Hero'
import { Journey } from '../components/Journey'
import { Marquee } from '../components/Marquee'
import { SectionHead } from '../components/SectionHead'
import { StackCard } from '../components/StackCard'
import { featuredProjects } from '../data/projects'
import { usePageTitle } from '../lib/usePageTitle'

export default function Home() {
  usePageTitle()

  return (
    <>
      <Hero />
      <Marquee />

      <section className="section" id="work">
        <div className="container">
          <SectionHead
            index="01"
            kicker="Selected work"
            title={
              <>
                Things I&apos;ve <em>built</em>.
              </>
            }
            link={{ label: 'All projects', to: '/work' }}
          />

          <div className="stack">
            {featuredProjects.map((project, index) => (
              <StackCard
                key={project.slug}
                project={project}
                position={index}
                total={featuredProjects.length}
              />
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 38,
            }}
          >
            <Link to="/work" className="btn btn--ghost">
              Explore all projects
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      <AboutBento />
      <Journey />
      <Credentials />
    </>
  )
}
