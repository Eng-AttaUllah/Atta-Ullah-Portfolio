import type { CSSProperties, ReactNode } from 'react'
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  BellRing,
  Binary,
  Boxes,
  Brain,
  Calculator,
  Camera,
  ClipboardList,
  Cpu,
  Crop,
  Database,
  Eye,
  ExternalLink,
  Feather,
  Gauge,
  GitBranch,
  GitMerge,
  HardDrive,
  HardDriveDownload,
  ImageDown,
  Keyboard,
  Layers,
  MailCheck,
  MessageCircleQuestion,
  MessageSquare,
  MousePointerClick,
  Package,
  Pencil,
  Plus,
  Radar,
  RefreshCw,
  Route,
  ScanText,
  Search,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  Undo2,
  UserSearch,
  WifiOff,
  type LucideIcon,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { ProjectPoster } from '../components/ProjectPoster'
import { SocialIcon } from '../components/SocialIcon'
import type { ProjectLink } from '../data/projects'
import { getNextProject, getProject, projects } from '../data/projects'
import { usePageTitle } from '../lib/usePageTitle'
import NotFound from './NotFound'

const highlightIcons: Record<string, LucideIcon[]> = {
  adveto: [Layers, Cpu, ShieldCheck, ShieldAlert],
  'theft-detection': [Radar, GitBranch, Gauge, BellRing],
  'ai-shopkeeper': [WifiOff, ClipboardList, Sparkles, MousePointerClick],
  daymark: [Feather, HardDrive, ImageDown, Keyboard],
  'spam-detector': [Target, Boxes, RefreshCw, SlidersHorizontal],
}

const pipelineIcons: Record<string, LucideIcon[]> = {
  adveto: [Camera, Crop, ScanText, GitMerge, ShieldCheck, ShieldAlert],
  'theft-detection': [Camera, UserSearch, Route, Eye, Gauge, BellRing],
  'ai-shopkeeper': [
    MessageCircleQuestion,
    Calculator,
    ClipboardList,
    BadgeCheck,
    Database,
    HardDriveDownload,
  ],
  daymark: [Plus, HardDrive, Search, Pencil, Undo2, RefreshCw],
  'spam-detector': [MessageSquare, Sparkles, Binary, Brain, SlidersHorizontal, MailCheck],
}

function LinkIcon({ kind }: { kind: ProjectLink['kind'] }): ReactNode {
  if (kind === 'github') return <SocialIcon icon="github" />
  if (kind === 'package') return <Package />
  return <ExternalLink />
}

export default function ProjectDetail() {
  const { slug = '' } = useParams()
  const project = getProject(slug)
  usePageTitle(project ? project.name : 'Project not found')

  if (!project) return <NotFound />

  const next = getNextProject(project.slug)
  const highlightGlyphs = highlightIcons[project.slug] ?? []
  const pipelineGlyphs = pipelineIcons[project.slug] ?? []

  return (
    <div
      className="container detail-page"
      style={{ '--accent': project.accent } as CSSProperties}
    >
      <Link to="/work" className="back-link">
        <ArrowLeft />
        All work
      </Link>

      <header className="detail-hero">
        <div className="detail-kicker mono">
          <span className="index">{project.index}</span>
          <span>/</span>
          <span>{project.category}</span>
          <span>/</span>
          <span>{project.year}</span>
        </div>

        <div className="detail-head">
          <div>
            <h1 className="detail-title">{project.name}</h1>
            <p className="detail-tagline">{project.tagline}</p>
          </div>

          <dl className="detail-meta">
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{project.category}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.statusLabel}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="detail-poster">
        <ProjectPoster project={project} />
      </div>

      <div className="detail-body">
        <div className="detail-copy">
          <h2>The short version</h2>
          <p>{project.description}</p>

          <div className="metrics-strip">
            {project.metrics.map((metric) => (
              <div className="metric-cell" key={metric.label}>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>

          <h2>The good bits</h2>
          <ul className="highlight-list">
            {project.highlights.map((highlight, index) => {
              const Icon = highlightGlyphs[index] ?? Sparkles
              return (
                <li key={highlight}>
                  <span className="highlight-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span>{highlight}</span>
                </li>
              )
            })}
          </ul>

          {project.pipeline ? (
            <div className="pipeline">
              <h2>Under the hood</h2>
              <div className="pipeline-flow">
                {project.pipeline.map((step, index) => {
                  const Icon = pipelineGlyphs[index] ?? Sparkles
                  return (
                    <div className="pipeline-step" key={step}>
                      <div className="pipeline-node" aria-hidden="true">
                        <Icon />
                      </div>
                      <b>{String(index + 1).padStart(2, '0')}</b>
                      <span>{step}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : null}
        </div>

        <aside className="detail-side">
          <h3>Links</h3>
          <div className="detail-links">
            {project.links.length > 0 ? (
              project.links.map((link) => (
                <a
                  className="detail-link"
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                  <LinkIcon kind={link.kind} />
                </a>
              ))
            ) : (
              <p className="detail-note" style={{ borderTop: 'none', marginTop: 0 }}>
                This one lives on my machine for now — ask me for a walkthrough.
              </p>
            )}
          </div>

          <h3 className="detail-side-label">Stack</h3>
          <div className="stack-pills">
            {project.stack.map((item) => (
              <span className="pill" key={item}>
                {item}
              </span>
            ))}
          </div>

          {project.note ? <p className="detail-note">{project.note}</p> : null}
        </aside>
      </div>

      <Link to={`/work/${next.slug}`} className="next-project">
        <div>
          <div className="next-project-label">Next project</div>
          <div className="next-project-name">
            {next.name}
            <span>
              <ArrowUpRight />
            </span>
          </div>
        </div>
        <span className="mono" style={{ color: 'var(--faint)' }}>
          {next.index} / {String(projects.length).padStart(2, '0')}
        </span>
      </Link>
    </div>
  )
}
