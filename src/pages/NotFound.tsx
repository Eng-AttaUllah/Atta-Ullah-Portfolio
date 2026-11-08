import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'

export default function NotFound() {
  usePageTitle('404')

  return (
    <section className="not-found">
      <div className="container">
        <div className="nf-code">404</div>
        <h1 className="nf-title">
          This page got <em>lost in the noise</em>.
        </h1>
        <p className="nf-copy">
          The URL doesn&apos;t point anywhere — but the work does. Head home or go straight to the
          projects.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'center',
          }}
        >
          <Link to="/" className="btn btn--lime">
            <ArrowLeft />
            Back home
          </Link>
          <Link to="/work" className="btn btn--ghost">
            View work
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
