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
    tagline: 'Age-aware ad blocking, entirely on-device.',
    category: 'AI / ML',
    status: 'in_progress',
    statusLabel: 'In progress',
    year: '2026',
    role: 'Team of 4 · Final year project',
    accent: '#d7ff3e',
    stack: ['Python', 'Kotlin', 'TensorFlow Lite', 'ML Kit OCR', 'Android'],
    links: [{ label: 'GitHub repository', href: 'https://github.com/Eng-AttaUllah/AdVeto', kind: 'github' }],
    description:
      'Reads the ad on your screen — pixels and words — and decides if it is okay for the age set on that phone. Everything runs on-device.',
    highlights: [
      'Image + text, fused',
      'On-device int8 model',
      'Consent-first capture',
      'Failures are first-class',
    ],
    metrics: [
      { value: '29–35', label: 'API levels' },
      { value: 'int8', label: 'Quantised' },
      { value: '2', label: 'Models fused' },
      { value: '0', label: 'Cloud calls' },
    ],
    pipeline: [
      'Capture screen',
      'Find the ad',
      'Image + OCR',
      'Fuse scores',
      'Age policy',
      'Allow / cover / skip',
    ],
    featured: true,
    note: 'Prototype. Not on the Play Store yet.',
  },
  {
    slug: 'theft-detection',
    index: '02',
    name: 'Shop Theft Detection',
    tagline: 'Offline CCTV that spots shoplifting as it happens.',
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
      'Watches a shop camera and flags theft — loitering, shelf grabs, counter intrusions, camera tampering. No internet, no GPU.',
    highlights: [
      'Eight behaviour rules',
      'ByteTrack person tracking',
      'One 0–1 theft score',
      'Console + JSONL alerts',
    ],
    metrics: [
      { value: '8', label: 'Behaviour rules' },
      { value: '100%', label: 'Offline' },
      { value: '2', label: 'Tracker modes' },
      { value: '0', label: 'GPU needed' },
    ],
    pipeline: [
      'Camera feed',
      'Detect people',
      'Track them',
      'Check behaviour',
      'Score the risk',
      'Alert + snapshot',
    ],
    featured: true,
  },
  {
    slug: 'ai-shopkeeper',
    index: '03',
    name: 'AI Shopkeeper',
    tagline: 'A tiny shop OS that works without the internet.',
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
      'Shop management for one small shop, running on a laptop over the local Wi-Fi. Stock, sales, khata, reports — plus an assistant that asks before it acts.',
    highlights: [
      'No cloud, no internet',
      'Khata + sales + stock',
      'Assistant reads real data',
      'Nothing saves without a tap',
    ],
    metrics: [
      { value: '1', label: 'Shop, fully local' },
      { value: '7', label: 'Modules' },
      { value: 'SQLite', label: 'Single-file data' },
      { value: 'CI/CD', label: 'Tests + deploy' },
    ],
    pipeline: [
      'Shopkeeper asks',
      'Reads real numbers',
      'Drafts an action',
      'Human confirms',
      'SQLite commit',
      'Report + backup',
    ],
    featured: true,
  },
  {
    slug: 'daymark',
    index: '04',
    name: 'Daymark',
    tagline: 'A task manager with zero dependencies and zero cloud.',
    category: 'Web',
    status: 'shipped',
    statusLabel: 'Shipped',
    year: '2026',
    role: 'Solo build',
    accent: '#f9a8d4',
    stack: ['JavaScript', 'HTML', 'CSS', 'localStorage', 'jsdom'],
    links: [],
    description:
      'Plain HTML, CSS and JavaScript. Tasks live in localStorage, survive refreshes, and never leave the device. 163 assertions keep it honest.',
    highlights: [
      'Zero dependencies',
      'Everything local',
      'Images compressed in-browser',
      'Keyboard + ARIA friendly',
    ],
    metrics: [
      { value: '0', label: 'Dependencies' },
      { value: '163', label: 'Assertions' },
      { value: '10+', label: 'Features' },
      { value: 'Local', label: 'Only storage' },
    ],
    pipeline: [
      'Add a task',
      'Save to localStorage',
      'Filter / search',
      'Edit inline',
      'Undo toast',
      'Tabs stay in sync',
    ],
  },
  {
    slug: 'spam-detector',
    index: '05',
    name: 'Spam Detector',
    tagline: 'SMS spam detection you can tune by hand.',
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
      'TF-IDF and Logistic Regression, with an optional DistilBERT model. A Streamlit UI lets you switch models and move the sensitivity slider.',
    highlights: [
      '98% accuracy',
      'Two model families',
      '10-fold cross-validation',
      'Slider-tuned threshold',
    ],
    metrics: [
      { value: '98%', label: 'Accuracy' },
      { value: '2', label: 'Model families' },
      { value: '10-fold', label: 'Cross-validation' },
      { value: 'CLI + UI', label: 'Interfaces' },
    ],
    pipeline: [
      'Raw SMS',
      'Clean text',
      'TF-IDF',
      'Model',
      'Tune threshold',
      'Spam / ham',
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
