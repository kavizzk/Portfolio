export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  featured?: boolean;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  tag: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  mode?: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: string;
  details?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    isPrimary?: boolean;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  category: 'Certification' | 'Paper Presentation' | 'Competition' | 'Workshop' | 'Innovation';
  year?: string;
  score?: string;
  description: string;
  icon: string;
}

export interface ContactMessage {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}
