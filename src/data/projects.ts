export type ProjectStatus = 'shipped' | 'active' | 'in_progress'

export interface ProjectLink {
  label: string
  href: string
  kind: 'github' | 'external' | 'package'
}

export interface Project {
  slug: string
  index: string
  name: string
  tagline: string
  category: string
  status: ProjectStatus
  statusLabel: string
  year: string
  role: string
  accent: string
  stack: string[]
  links: ProjectLink[]
  description: string
  highlights: string[]
  metrics: { value: string; label: string }[]
  pipeline?: string[]
  featured?: boolean
  note?: string
}

export const projects: Project[] = [
  {
    slug: 'adveto',
    index: '01',
    name: 'AdVeto',
    tagline: 'Age-aware ad-risk classification, running entirely on the phone.',
    category: 'AI / ML',
    status: 'in_progress',
    statusLabel: 'In progress',
    year: '2026',
    role: 'Team of 4 · Final year project',
    accent: '#d7ff3e',
    stack: ['Python', 'Kotlin', 'TensorFlow Lite', 'ML Kit OCR', 'Android'],
    links: [{ label: 'GitHub repository', href: 'https://github.com/Eng-AttaUllah/AdVeto', kind: 'github' }],
    description:
      'AdVeto looks at the advertisement on an Android screen, reads both its pixels and its words, and decides whether it is safe for the age band configured on that device. Screen capture happens only with explicit consent; the ad region is localised, classified by an image model and an OCR text model, then fused into a single age-aware policy that returns allow, cover, or abstain.',
    highlights: [
      'Multimodal pipeline — image model plus an OCR text model, combined by score-level fusion.',
      'On-device int8 quantised classifier, benchmarked against its floating-point counterpart.',
      'MediaProjection capture with capture-denial and low-confidence states treated as first-class outcomes.',
      'Evaluated on per-class recall, macro-F1, decision latency and peak memory on a mid-range phone.',
    ],
    metrics: [
      { value: '29–35', label: 'API levels' },
      { value: 'int8', label: 'Quantised' },
      { value: '2', label: 'Fused models' },
      { value: '0', label: 'Cloud calls' },
    ],
    pipeline: [
      'Capture screen with consent',
      'Localise the ad region',
      'Image model + OCR text model',
      'Score-level fusion',
      'Age-aware policy',
      'Overlay, log & abstain',
    ],
    featured: true,
    note: 'Research prototype — not published on Play Store.',
  },
  {
    slug: 'docsmith',
    index: '02',
    name: 'DocSmith',
    tagline: 'An AI documentation engineer that reads the repo before it writes.',
    category: 'AI / DevTools',
    status: 'shipped',
    statusLabel: 'Published',
    year: '2026',
    role: 'Open source · available on PyPI',
    accent: '#c4b5fd',
    stack: ['Python', 'LLM APIs', 'Typer', 'PyPI', 'pytest'],
    links: [
      { label: 'PyPI package', href: 'https://pypi.org/project/docsmith-ai/', kind: 'package' },
      { label: 'GitHub repository', href: 'https://github.com/ilyaskhan12Q/DocSmith', kind: 'github' },
    ],
    description:
      'DocSmith analyses a GitHub repository — its frameworks, dependencies, APIs, CLI commands and architecture — and generates documentation that references the real code. Instead of throwing raw files at an LLM, it builds structured code intelligence first, creates a documentation plan, then reviews and scores its own output before anything is written.',
    highlights: [
      'Repository intelligence: detects frameworks, dependencies, functions, classes and endpoints.',
      'Structured context is built before generation — raw code is never blindly sent to the model.',
      'Self-review loop catches hallucinations, missing sections and broken references.',
      'Quality scoring across completeness, correctness, examples and usability, with automatic refinement.',
    ],
    metrics: [
      { value: '91', label: 'Demo quality score' },
      { value: '4', label: 'AI providers' },
      { value: '3', label: 'Doc types per run' },
      { value: '0.2.1', label: 'PyPI release' },
    ],
    pipeline: [
      'Fetch repository',
      'Analyse code intelligence',
      'Plan the docs',
      'Generate each document',
      'Review & score 0–100',
      'Self-refine or pass',
    ],
    featured: true,
  },
  {
    slug: 'theft-detection',
    index: '03',
    name: 'Shop Theft Detection',
    tagline: 'Offline CCTV that understands suspicious behaviour in real time.',
    category: 'Computer Vision',
    status: 'active',
    statusLabel: 'Active build',
    year: '2026',
    role: 'Solo build',
    accent: '#67e8f9',
    stack: ['Python', 'OpenCV', 'NumPy', 'ByteTrack', 'ONNX'],
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/Eng-AttaUllah/Theft-Detection',
        kind: 'github',
      },
    ],
    description:
      'A Python surveillance system that watches a shop camera or a recorded video and raises alerts when someone is stealing — walking behind the counter, taking an item from a shelf, loitering, snatching, gathering a crowd as a distraction, or tampering with the camera. Detection, tracking, behaviour rules and a fused theft-confidence score all run offline with OpenCV and NumPy.',
    highlights: [
      'Eight behaviour rules including restricted zone, loitering, item removal, crowd and tamper.',
      'Kalman-filter ByteTrack tracker with low-score association and optional appearance re-ID.',
      'Rule hits fused into one 0–1 theft-confidence score per camera.',
      'Console, JSONL and snapshot alerts — headless, with a browser preview.',
    ],
    metrics: [
      { value: '8', label: 'Behaviour rules' },
      { value: '100%', label: 'Offline' },
      { value: '2', label: 'Tracker modes' },
      { value: '0', label: 'GPU required' },
    ],
    pipeline: [
      'CCTV / video input',
      'Person & object detection',
      'ByteTrack tracking',
      'Behaviour analysis',
      'Theft confidence',
      'Console + JSONL + snapshot',
    ],
    featured: true,
  },
  {
    slug: 'ai-shopkeeper',
    index: '04',
    name: 'AI Shopkeeper',
    tagline: 'A shop operating system that works without the internet.',
    category: 'Full-stack AI',
    status: 'active',
    statusLabel: 'Active build',
    year: '2026',
    role: 'Solo build',
    accent: '#ff9e64',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', 'SQLite', 'Tailwind'],
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/Eng-AttaUllah/AI-Shopkeeper',
        kind: 'github',
      },
    ],
    description:
      'Offline-first shop management for a small retail shop. It runs on a laptop and is used from a phone browser on the local network — no internet connection needed. Products, stock, sales, customers, credit (khata), expenses, reports and backups are covered, with an optional assistant that answers questions about the shop’s real figures and prepares actions for the shopkeeper to confirm.',
    highlights: [
      'Fully offline: local Next.js server, SQLite file, no cloud dependency.',
      'Credit (khata), sales, stock, expenses, reports and backups in one flow.',
      'Assistant answers from real shop data and proposes sales, expenses, repayments and stock edits.',
      'Every AI-proposed action waits for explicit confirmation before anything is saved.',
    ],
    metrics: [
      { value: '1', label: 'Shop, fully local' },
      { value: '7', label: 'Modules' },
      { value: 'SQLite', label: 'Single-file data' },
      { value: 'CI/CD', label: 'Tests + deploy' },
    ],
    pipeline: [
      'Shopkeeper asks a question',
      'Assistant reads real figures',
      'Prepares a proposal',
      'Shopkeeper confirms',
      'Local SQLite commit',
      'Report & backup',
    ],
    featured: true,
  },
  {
    slug: 'daymark',
    index: '05',
    name: 'Daymark',
    tagline: 'A dependency-free task manager that keeps everything on your device.',
    category: 'Web',
    status: 'shipped',
    statusLabel: 'Shipped',
    year: '2026',
    role: 'Solo build',
    accent: '#f9a8d4',
    stack: ['JavaScript', 'HTML', 'CSS', 'localStorage', 'jsdom'],
    links: [],
    description:
      'A small, dependency-free task manager built with plain HTML, CSS and JavaScript. Tasks live in localStorage, so everything survives a refresh and never leaves the device. Dark mode, search, filters, inline editing, drag-and-drop ordering, image attachments with client-side compression, undo toasts and multi-tab sync are all backed by a 163-assertion jsdom test suite.',
    highlights: [
      'Zero runtime dependencies — plain HTML, CSS and JavaScript.',
      'Image attachments compressed client-side, with a live localStorage quota meter.',
      'Accessible controls: ARIA labels, live regions, keyboard operation and reduced-motion support.',
      '163-assertion jsdom suite driving the real UI end to end.',
    ],
    metrics: [
      { value: '0', label: 'Dependencies' },
      { value: '163', label: 'Assertions' },
      { value: '10+', label: 'Features' },
      { value: 'Local', label: 'Only storage' },
    ],
  },
  {
    slug: 'spam-detector',
    index: '06',
    name: 'Spam Detector',
    tagline: 'From raw SMS to a 98% spam classifier, with a UI you can tune.',
    category: 'Data / NLP',
    status: 'shipped',
    statusLabel: 'Shipped',
    year: '2025',
    role: 'Solo build',
    accent: '#fde68a',
    stack: ['Python', 'scikit-learn', 'DistilBERT', 'Streamlit', 'pytest'],
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/Eng-AttaUllah/Spam-Detector-with-98--accuracy',
        kind: 'github',
      },
    ],
    description:
      'An SMS spam classifier built as a reusable Python package. TF-IDF feeds a class-weighted Logistic Regression pipeline, with an optional fine-tuned DistilBERT model for higher accuracy. The project includes training and prediction CLIs, a Streamlit app with a model switcher and sensitivity threshold, cross-validation, model comparison and a pytest suite.',
    highlights: [
      'TF-IDF + Logistic Regression bundled in one scikit-learn Pipeline.',
      'Optional DistilBERT transformer, selectable next to the classical model.',
      'Stratified k-fold CV with accuracy, F1 and ROC-AUC; model comparison and GridSearchCV tuning.',
      'Threshold tuning for maximum F1 or a target recall, exposed as a slider in the Streamlit UI.',
    ],
    metrics: [
      { value: '98%', label: 'Accuracy' },
      { value: '2', label: 'Model families' },
      { value: '10-fold', label: 'Cross-validation' },
      { value: 'CLI + UI', label: 'Interfaces' },
    ],
    pipeline: [
      'Raw SMS',
      'Clean & vectorise',
      'TF-IDF features',
      'Logistic Regression / DistilBERT',
      'Threshold tuning',
      'Spam or ham',
    ],
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export const categories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  return projects[(index + 1) % projects.length]
}
