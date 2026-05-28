import { Experience, Skill, Project, SocialLink, Education, Stat } from '../core/models/portfolio.models';

// ─── PERSONAL INFO ───────────────────────────────────────────
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
  bio: `Backend Engineer with 4+ years of experience building scalable, event-driven 
  systems using Java, Spring Boot, and Kafka. Passionate about designing clean APIs, 
  cloud-native architectures, and solving complex problems with elegant, maintainable solutions.`,
  email: 'adimore131@gmail.com',
  location: 'Pune, India',
  profileImage: 'assets/images/profile.jpg',
  resumeUrl: 'assets/resume/Aditya_More_Resume.pdf',
};

// ─── SOCIAL LINKS ─────────────────────────────────────────────
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/adityaMoreRepo', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/aditya-more-83520a150', icon: 'linkedin' },
  { label: 'Email', url: 'mailto:adimore131@gmail.com', icon: 'mail' },
];

// ─── STATS ─────────────────────────────────────────────────
export const STATS: Stat[] = [
  { value: '4+', label: 'Years Experience' },
  { value: '3', label: 'Companies' },
  { value: '15+', label: 'Technologies' },
  { value: '70%', label: 'AWS Cost Saved' },
];

// ─── EXPERIENCE ───────────────────────────────────────────────
export const EXPERIENCES: Experience[] = [
  {
    company: 'Infosys',
    client: 'BNY Mellon',
    role: 'Backend Engineer',
    period: 'Aug 2025 – Present',
    location: 'Pune, India',
    tech: ['Java', 'Spring Boot', 'Kafka', 'Angular', 'Oracle', 'IBM MQ', 'COBOL'],
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
      'Built a Go-based CLI tool and automated testing workflows using Docker, Bash, and Makefile — reducing testing time by 50% and deployment time by 25%.',
    ],
  },
];

// ─── EDUCATION ─────────────────────────────────────────────
export const EDUCATION: Education[] = [
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

// ─── SKILLS ───────────────────────────────────────────────────
export const SKILLS: Skill[] = [
  // Backend
  { name: 'Java', icon: 'devicon-java-plain', level: 'Expert', category: 'Backend' },
  { name: 'Spring Boot', icon: 'devicon-spring-plain', level: 'Expert', category: 'Backend' },
  { name: 'Go', icon: 'devicon-go-plain', level: 'Intermediate', category: 'Backend' },
  { name: 'Python', icon: 'devicon-python-plain', level: 'Intermediate', category: 'Backend' },
  { name: 'Kafka', icon: 'devicon-apachekafka-original', level: 'Proficient', category: 'Backend' },
  { name: 'Spring MVC', icon: 'devicon-spring-plain', level: 'Proficient', category: 'Backend' },
  { name: 'Hibernate', icon: 'devicon-java-plain', level: 'Proficient', category: 'Backend' },

  // Frontend
  { name: 'Angular', icon: 'devicon-angularjs-plain', level: 'Intermediate', category: 'Frontend' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain', level: 'Intermediate', category: 'Frontend' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain', level: 'Intermediate', category: 'Frontend' },
  { name: 'HTML / CSS', icon: 'devicon-html5-plain', level: 'Intermediate', category: 'Frontend' },

  // Cloud & DevOps
  { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark', level: 'Proficient', category: 'Cloud & DevOps' },
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
  { name: 'Maven', icon: 'devicon-maven-plain', level: 'Proficient', category: 'Tools' },
  { name: 'IntelliJ IDEA', icon: 'devicon-intellij-plain', level: 'Expert', category: 'Tools' },
  { name: 'Bash', icon: 'devicon-bash-plain', level: 'Familiar', category: 'Tools' },
];

// ─── PROJECTS ──────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    title: 'Subscription Management Middleware',
    description: 'Designed and built middleware for e-commerce subscription management at HP — reducing third-party integration time by 30% while serving high-traffic production loads reliably.',
    tech: ['Java', 'Spring Boot', 'AWS', 'REST APIs', 'Docker'],
    featured: true,
  },
  {
    title: 'AWS S3 Storage Optimizer',
    description: 'Engineered an intelligent S3 optimization solution that reduced data consumption by 70%, saving $1,000–$5,000 annually in cloud infrastructure costs with zero downtime.',
    tech: ['Java', 'AWS S3', 'AWS Lambda', 'Spring Boot', 'Python'],
    featured: true,
  },
  {
    title: 'Go-Based Developer CLI Tool',
    description: 'Built a Go-based CLI tool with automated testing workflows using Docker, Bash, and Makefile — reducing testing time by 50% and deployment time by 25%.',
    tech: ['Go', 'Docker', 'Bash', 'Makefile', 'CI/CD'],
    githubUrl: 'https://github.com/adityaMoreRepo',
    featured: true,
  },
  {
    title: 'Kafka Event-Driven Banking Platform',
    description: 'Implemented Kafka-based event listeners for asynchronous workflows at BNY Mellon, enabling reliable high-volume event processing for critical wealth management operations.',
    tech: ['Java', 'Kafka', 'Spring Boot', 'Oracle', 'IBM MQ'],
    featured: false,
  },
  {
    title: 'VTEX E-Commerce Migration',
    description: 'Contributed to Salesforce → VTEX migration and built event-driven inventory sync across VTEX, Square POS, and third-party platforms for WGACA.',
    tech: ['Java', 'Spring Boot', 'Azure', 'VTEX', 'Square POS'],
    featured: false,
  },
  {
    title: 'More Projects Coming Soon',
    description: 'Currently working on exciting open-source projects. Stay tuned!',
    tech: ['Java', 'Spring Boot', 'Angular'],
    githubUrl: 'https://github.com/adityaMoreRepo',
    featured: false,
    comingSoon: true,
  },
];
