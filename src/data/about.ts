export const bio = [
  "I'm Atta — an AI undergraduate from Mardan who likes quiet, useful software. Give me a messy signal and I'll try to turn it into something people can actually use.",
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
  short?: string
  issuer: string
  period: string
  honor?: boolean
}

export const certifications: Certification[] = [
  { name: 'HTML & CSS Crash Course', short: 'HTML & CSS', issuer: 'Scrimba', period: 'Mar 2025' },
  { name: 'AI For Everyone', issuer: 'DeepLearning.AI', period: 'Mar 2025' },
  {
    name: 'Work Smarter with Microsoft PowerPoint',
    short: 'PowerPoint',
    issuer: 'Microsoft',
    period: 'Feb 2025',
    honor: true,
  },
  {
    name: 'Marketing Analytics Foundation',
    short: 'Marketing Analytics',
    issuer: 'Meta',
    period: 'Jan 2025',
  },
  {
    name: 'Word Forms and Simple Present Tense',
    short: 'Word Forms',
    issuer: 'UC Irvine',
    period: 'Feb 2025',
  },
  {
    name: 'AI / ML Internship',
    short: 'AI / ML Intern',
    issuer: 'ZyroInterns',
    period: 'Aug — Oct 2026',
  },
  {
    name: 'Frontend Development Internship',
    short: 'Frontend Intern',
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
    detail: 'Trained and evaluated models. Mostly cleaned data, honestly.',
    tags: ['Python', 'ML'],
  },
  {
    type: 'experience',
    year: '2026',
    role: 'Frontend Development Intern',
    org: 'ZyroInterns',
    detail: 'Shipped responsive interfaces and learned to love code review.',
    tags: ['HTML/CSS', 'JavaScript', 'Git'],
  },
  {
    type: 'activity',
    year: '2026',
    role: 'Organiser — “YouTube Automation”',
    org: 'Technology & Innovation Society, AWKUM',
    detail: 'Ran a campus tech event with the Innovation Society.',
  },
  {
    type: 'education',
    year: '2023 — now',
    role: 'BS Computer Science (AI)',
    org: 'Abdul Wali Khan University Mardan',
    detail: 'Fifth semester. CGPA 3.26. Still learning in public.',
    tags: ['CGPA 3.26', 'AWKUM'],
  },
  {
    type: 'education',
    year: '2023',
    role: 'Intermediate — Pre-Engineering',
    org: 'The Quaid International Model College, Swabi',
    detail: 'Pre-engineering, BISE Mardan.',
  },
  {
    type: 'education',
    year: '2021',
    role: 'Matriculation — Science',
    org: 'Al-Muslim Public School, Swabi',
    detail: 'Science, BISE Mardan.',
  },
]

export const languages = [
  { name: 'Pashto', level: 'Native' },
  { name: 'Urdu', level: 'Fluent' },
  { name: 'English', level: 'Professional working proficiency' },
]
