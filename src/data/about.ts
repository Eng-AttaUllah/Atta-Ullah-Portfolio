export const bio = [
  "I'm Atta Ullah, an Artificial Intelligence undergraduate at Abdul Wali Khan University Mardan. I like the part of software where data stops being numbers and starts becoming a decision — a classifier that catches spam, a camera that notices a theft, a model that reads an ad the way a teenager would.",
  'My core stack is Python for machine learning — scikit-learn, Pandas, NumPy, TensorFlow and OpenCV — and TypeScript, React and Next.js for the product layer. I care about the unglamorous parts too: tests, offline behaviour, privacy, and what happens when the model is wrong.',
  'Between August and October 2026 I completed two internships at ZyroInterns, one in AI/ML and one in frontend development. I have also organised a technology event at AWKUM and published an open-source documentation tool on PyPI.',
]

export interface EducationEntry {
  degree: string
  school: string
  period: string
  detail: string
  extra?: string
}

export const education: EducationEntry[] = [
  {
    degree: 'BS Computer Science (Artificial Intelligence)',
    school: 'Abdul Wali Khan University Mardan (AWKUM)',
    period: '2023 — Present',
    detail: 'CGPA 3.26 / 4.00 (76.2%) · 5th semester · 84 credit hours completed',
    extra:
      'Coursework: Programming Fundamentals, OOP, Data Structures, Algorithms, Database Systems, Operating Systems, Web Technologies, Computer Networks, Artificial Intelligence',
  },
  {
    degree: 'Intermediate — Pre-Engineering',
    school: 'The Quaid International Model College, Panjpir, Swabi · BISE Mardan',
    period: '2023',
    detail: '948 / 1100 marks · A1 grade',
  },
  {
    degree: 'Matriculation — Science',
    school: 'Al-Muslim Public School, Dobian, Swabi · BISE Mardan',
    period: '2021',
    detail: '946 / 1100 marks · A1 grade',
  },
]

export interface Certification {
  name: string
  issuer: string
  period: string
  honor?: boolean
}

export const certifications: Certification[] = [
  { name: 'HTML & CSS Crash Course', issuer: 'Scrimba', period: 'Mar 2025' },
  { name: 'AI For Everyone', issuer: 'DeepLearning.AI', period: 'Mar 2025' },
  {
    name: 'Work Smarter with Microsoft PowerPoint',
    issuer: 'Microsoft',
    period: 'Feb 2025',
    honor: true,
  },
  { name: 'Marketing Analytics Foundation', issuer: 'Meta', period: 'Jan 2025' },
  {
    name: 'Word Forms and Simple Present Tense',
    issuer: 'University of California, Irvine',
    period: 'Feb 2025',
  },
  {
    name: 'AI / ML Internship',
    issuer: 'ZyroInterns',
    period: 'Aug — Oct 2026',
  },
  {
    name: 'Frontend Development Internship',
    issuer: 'ZyroInterns',
    period: 'Aug — Oct 2026',
  },
]

export interface TimelineEntry {
  type: 'experience' | 'education' | 'activity'
  year: string
  role: string
  org: string
  detail: string
  tags?: string[]
}

export const timeline: TimelineEntry[] = [
  {
    type: 'experience',
    year: '2026',
    role: 'AI / ML Intern',
    org: 'ZyroInterns',
    detail:
      'Worked across the machine-learning lifecycle — data preparation, model training, evaluation and reporting — in a remote internship programme.',
    tags: ['Python', 'ML', 'Reporting'],
  },
  {
    type: 'experience',
    year: '2026',
    role: 'Frontend Development Intern',
    org: 'ZyroInterns',
    detail:
      'Built and shipped responsive interfaces, working with component-driven frontend patterns, version control and code review.',
    tags: ['HTML/CSS', 'JavaScript', 'Git'],
  },
  {
    type: 'activity',
    year: '2026',
    role: 'Organiser — “YouTube Automation”',
    org: 'Technology & Innovation Society, AWKUM',
    detail:
      'Organised a university technology event under the AWKUM Student Council and the Office of the Provost.',
  },
  {
    type: 'education',
    year: '2023 — now',
    role: 'BS Computer Science (AI)',
    org: 'Abdul Wali Khan University Mardan',
    detail:
      '5th semester · CGPA 3.26 / 4.00 · coursework across programming, data structures, databases, networks and artificial intelligence.',
    tags: ['CGPA 3.26', 'AWKUM'],
  },
  {
    type: 'education',
    year: '2023',
    role: 'Intermediate — Pre-Engineering',
    org: 'The Quaid International Model College, Swabi',
    detail: 'BISE Mardan · 948 / 1100 marks · A1 grade.',
  },
  {
    type: 'education',
    year: '2021',
    role: 'Matriculation — Science',
    org: 'Al-Muslim Public School, Swabi',
    detail: 'BISE Mardan · 946 / 1100 marks · A1 grade.',
  },
]

export const languages = [
  { name: 'Pashto', level: 'Native' },
  { name: 'Urdu', level: 'Fluent' },
  { name: 'English', level: 'Professional working proficiency' },
]
