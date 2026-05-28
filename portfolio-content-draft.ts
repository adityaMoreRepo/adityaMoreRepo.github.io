// ============================================================
// PORTFOLIO DATA — Aditya More
// This file will live at: src/app/data/portfolio.data.ts
// ============================================================

export interface Experience {
  company: string;
  client?: string;
  role: string;
  period: string;
  location: string;
  tech: string[];
  bullets: string[];
  current?: boolean;
}

export interface Skill {
  name: string;
  icon: string; // devicon class or emoji fallback
  level: 'Expert' | 'Proficient' | 'Intermediate' | 'Familiar';
  category: 'Backend' | 'Frontend' | 'Cloud & DevOps' | 'Databases' | 'Tools';
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  comingSoon?: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

// ─── PERSONAL INFO ──────────────────────────────────────────
export const PERSONAL = {
  name: 'Aditya More',
  firstName: 'Aditya',
  lastName: 'More',
  title: 'Backend Engineer',
  taglines: [
    'Backend Engineer',
    'Java & Spring Boot Specialist',
    'Cloud-Native Developer',
    'Microservices Architect',
  ],
  bio: `Backend Engineer with 4+ years of experience building scalable, 
  event-driven systems using Java, Spring Boot, and Kafka. 
  Passionate about designing clean APIs, cloud-native architectures, 
  and solving complex problems with elegant solutions.`,
  email: 'adimore131@gmail.com',
  phone: '+91 9028895041',
  location: 'Pune, India',
  profileImage: 'assets/images/profile.jpg',
  resumeUrl: 'assets/resume/Aditya_More_Resume.pdf', // add your PDF here
};

// ─── SOCIAL LINKS ────────────────────────────────────────────
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/adityaMoreRepo',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aditya-more-83520a150',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    url: 'mailto:adimore131@gmail.com',
    icon: 'mail',
  },
];

// ─── STATS (Hero / About section) ───────────────────────────
export const STATS = [
  { value: '4+', label: 'Years Experience' },
  { value: '3', label: 'Companies' },
  { value: '10+', label: 'Technologies' },
  { value: '70%', label: 'AWS Cost Reduction' },
];

// ─── EXPERIENCE ──────────────────────────────────────────────
export const EXPERIENCES: Experience[] = [
  {
    company: 'Infosys',
    client: 'BNY Mellon',
    role: 'Backend Engineer',
    period: 'Aug 2025 – Present',
    location: 'Pune, India',
    tech: ['Java', 'Spring Boot', 'Kafka', 'Angular', 'Oracle', 'IBM MQ'],
    current: true,
    bullets: [
      'Developed and maintained backend services for wealth management and custody platforms supporting critical banking workflows.',
      'Integrated micro-frontends with enterprise platform (NetX) via Spring Boot services, reducing integration overhead.',
      'Implemented Kafka-based event listeners for asynchronous workflows, enabling reliable high-volume event processing.',
      'Automated workflows using CNM jobs and Bash scripting, reducing manual effort by ~30% and minimizing operational errors.',
      'Integrated IBM PIL Queue with COBOL copybook mapping to enable communication with legacy systems.',
    ],
  },
  {
    company: 'Mindstix Software Labs',
    client: 'WGACA',
    role: 'Member of Technical Staff',
    period: 'Apr 2025 – Jul 2025',
    location: 'Pune, India',
    tech: ['Java', 'Spring Boot', 'Azure', 'VTEX', 'Square POS'],
    bullets: [
      'Contributed to Salesforce to VTEX migration, including system analysis and integration design.',
      'Built event-driven inventory sync across VTEX, Square (POS), and third-party platforms.',
    ],
  },
  {
    company: 'Quest Global',
    client: 'HP',
    role: 'Software Engineer',
    period: 'Mar 2023 – Apr 2025',
    location: 'Pune, India',
    tech: ['Java', 'Spring Boot', 'Go', 'AWS', 'Docker', 'Kubernetes', 'Veracode', 'SonarQube'],
    bullets: [
      'Designed subscription management middleware for e-commerce platforms, reducing integration time by 30%.',
      'Optimized AWS S3 storage, reducing data consumption by 70% and saving $1,000–$5,000 annually.',
      'Implemented rate limiting and improved system stability for high-traffic applications.',
      'Enhanced security by integrating Veracode and SonarQube, reducing vulnerabilities by 40%.',
      'Built a Go-based CLI tool and automated testing workflows using Docker, Bash, and Makefile, reducing testing time by 50% and deployment time by 25%.',
    ],
  },
];

// ─── EDUCATION ───────────────────────────────────────────────
export const EDUCATION = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Electronics and Telecommunications',
    institution: 'Sinhgad College of Engineering',
    university: 'Pune University',
    period: 'Jun 2015 – Jun 2019',
    location: 'Pune, India',
    gpa: '8.0 / 10.0',
    coursework: ['Data Structures', 'Algorithms', 'Microprocessors', 'Embedded Systems'],
  },
];

// ─── SKILLS ──────────────────────────────────────────────────
export const SKILLS: Skill[] = [
  // Backend
  { name: 'Java', icon: 'devicon-java-plain', level: 'Expert', category: 'Backend' },
  { name: 'Spring Boot', icon: 'devicon-spring-plain', level: 'Expert', category: 'Backend' },
  { name: 'Go', icon: 'devicon-go-plain', level: 'Intermediate', category: 'Backend' },
  { name: 'Python', icon: 'devicon-python-plain', level: 'Intermediate', category: 'Backend' },
  { name: 'Kafka', icon: '⚡', level: 'Proficient', category: 'Backend' },
  { name: 'REST APIs', icon: '🔗', level: 'Expert', category: 'Backend' },
  { name: 'Microservices', icon: '🏗️', level: 'Proficient', category: 'Backend' },

  // Frontend
  { name: 'Angular', icon: 'devicon-angularjs-plain', level: 'Intermediate', category: 'Frontend' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain', level: 'Intermediate', category: 'Frontend' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain', level: 'Intermediate', category: 'Frontend' },
  { name: 'HTML/CSS', icon: 'devicon-html5-plain', level: 'Intermediate', category: 'Frontend' },

  // Cloud & DevOps
  { name: 'AWS', icon: 'devicon-amazonwebservices-original', level: 'Proficient', category: 'Cloud & DevOps' },
  { name: 'Docker', icon: 'devicon-docker-plain', level: 'Proficient', category: 'Cloud & DevOps' },
  { name: 'Kubernetes', icon: 'devicon-kubernetes-plain', level: 'Intermediate', category: 'Cloud & DevOps' },
  { name: 'Azure DevOps', icon: 'devicon-azure-plain', level: 'Intermediate', category: 'Cloud & DevOps' },
  { name: 'Linux', icon: 'devicon-linux-plain', level: 'Proficient', category: 'Cloud & DevOps' },
  { name: 'Git', icon: 'devicon-git-plain', level: 'Proficient', category: 'Cloud & DevOps' },

  // Databases
  { name: 'MySQL', icon: 'devicon-mysql-plain', level: 'Proficient', category: 'Databases' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', level: 'Proficient', category: 'Databases' },
  { name: 'Oracle SQL', icon: 'devicon-oracle-original', level: 'Proficient', category: 'Databases' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain', level: 'Intermediate', category: 'Databases' },

  // Tools
  { name: 'Maven', icon: '📦', level: 'Proficient', category: 'Tools' },
  { name: 'IntelliJ IDEA', icon: 'devicon-intellij-plain', level: 'Expert', category: 'Tools' },
  { name: 'Bash', icon: '🖥️', level: 'Familiar', category: 'Tools' },
];

// ─── PROJECTS ────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  // TODO: Add real projects here. Using placeholders for now.
  {
    title: 'Subscription Management Middleware',
    description:
      'Designed and built a middleware system for e-commerce subscription management at HP, reducing third-party integration time by 30% and serving high-traffic production loads.',
    tech: ['Java', 'Spring Boot', 'AWS', 'REST APIs'],
    featured: true,
    comingSoon: false,
  },
  {
    title: 'AWS S3 Storage Optimizer',
    description:
      'Engineered an intelligent S3 storage optimization solution that reduced data consumption by 70%, saving $1,000–$5,000 annually in cloud infrastructure costs.',
    tech: ['Java', 'AWS S3', 'AWS Lambda', 'Spring Boot'],
    featured: true,
    comingSoon: false,
  },
  {
    title: 'Go CLI Dev Tool',
    description:
      'Built a Go-based CLI tool with automated testing workflows using Docker, Bash, and Makefile — reducing testing time by 50% and deployment time by 25%.',
    tech: ['Go', 'Docker', 'Bash', 'Makefile'],
    githubUrl: 'https://github.com/adityaMoreRepo',
    featured: true,
    comingSoon: false,
  },
  {
    title: 'More Projects Coming Soon',
    description: 'Currently working on exciting new projects. Check back soon!',
    tech: ['Java', 'Spring Boot', 'Angular'],
    featured: false,
    comingSoon: true,
  },
];
