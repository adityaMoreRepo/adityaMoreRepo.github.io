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
  icon: string;
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

export interface Education {
  degree: string;
  field: string;
  institution: string;
  university: string;
  period: string;
  location: string;
  gpa: string;
  coursework: string[];
}

export interface Stat {
  value: string;
  label: string;
}
