export interface SocialLink {
  label: string
  handle: string
  href: string
  icon: 'github' | 'linkedin' | 'instagram' | 'email' | 'phone'
}

export const site = {
  name: 'Atta Ullah',
  firstName: 'Atta',
  lastName: 'Ullah',
  initials: 'AU',
  role: 'AI & Software Engineer',
  roleLong: 'BS Computer Science (Artificial Intelligence) undergraduate',
  location: 'Mardan, Khyber Pakhtunkhwa, Pakistan',
  locationShort: 'Mardan, PK',
  email: 'attikhan0344@gmail.com',
  phone: '+92 319-2527926',
  availability: 'Open to internships & entry-level roles',
  tagline: 'Turning raw data into predictions, and ideas into working projects.',
  shortBio:
    'Computer Science undergraduate specialising in Artificial Intelligence at Abdul Wali Khan University Mardan — building things that reason, see, and ship.',
  intro:
    "I'm Atta Ullah, an Artificial Intelligence undergraduate focused on machine learning, computer vision, and the craft of turning messy data into useful products.",
  objective:
    'Computer Science undergraduate (5th semester) specializing in Artificial Intelligence at Abdul Wali Khan University Mardan, with a CGPA of 3.26/4.00 (76.2%). Strong foundation in programming, data structures, databases, and web development, complemented by professional certifications in AI and web technologies.',
  cgpa: '3.26 / 4.00',
  resumePdf: 'resume/Atta-Ullah-Resume.pdf',
  socials: [
    {
      label: 'GitHub',
      handle: '@Eng-AttaUllah',
      href: 'https://github.com/Eng-AttaUllah',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      handle: 'in/attaullah',
      href: 'https://www.linkedin.com/in/attaullah',
      icon: 'linkedin',
    },
    {
      label: 'Instagram',
      handle: '@realattaullahkhan',
      href: 'https://www.instagram.com/realattaullahkhan/',
      icon: 'instagram',
    },
    {
      label: 'Email',
      handle: 'attikhan0344@gmail.com',
      href: 'mailto:attikhan0344@gmail.com',
      icon: 'email',
    },
    {
      label: 'Phone',
      handle: '+92 319-2527926',
      href: 'tel:+923192527926',
      icon: 'phone',
    },
  ] satisfies SocialLink[],
}

export const nav = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/#about' },
  { label: 'Journey', to: '/#journey' },
  { label: 'Contact', to: '/#contact' },
]

export const stats = [
  { value: '3.26', label: 'CGPA / 4.00', detail: 'AWKUM · BS CS (AI)' },
  { value: '06', label: 'Shipped projects', detail: 'AI, vision & web' },
  { value: '07', label: 'Certifications', detail: 'Coursera & industry' },
  { value: '02', label: 'Internships', detail: 'AI/ML · Frontend' },
]

export const marqueeItems = [
  'Machine Learning',
  'Computer Vision',
  'Python',
  'React',
  'TypeScript',
  'Data Science',
  'Next.js',
  'OpenCV',
  'scikit-learn',
  'Human-first design',
]

export const skillGroups = [
  {
    label: 'AI & Data',
    items: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'TensorFlow', 'OpenCV', 'Matplotlib'],
  },
  {
    label: 'Web & Product',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML & CSS', 'SQL / Prisma'],
  },
  {
    label: 'Foundations',
    items: ['C / C++', 'Data Structures', 'Algorithms', 'Operating Systems', 'Networks', 'OOP'],
  },
  {
    label: 'Tools',
    items: ['Git & GitHub', 'Jupyter', 'Linux', 'Streamlit', 'Figma', 'MS Office'],
  },
]

export const nowItems = [
  { label: 'Building', value: 'AdVeto — on-device ad-risk detection' },
  { label: 'Studying', value: 'BS CS (AI) · 5th semester · AWKUM' },
  { label: 'Learning', value: 'Applied ML, vision & shipping products' },
  { label: 'Open to', value: 'AI/ML internships & junior roles' },
]
