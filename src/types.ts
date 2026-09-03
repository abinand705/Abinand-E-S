export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'fullstack' | 'creative' | 'tools' | 'analytics';
  tags: string[];
  link?: string;
  githubLink: string;
  featured: boolean;
  accentColor: 'indigo' | 'cyan' | 'emerald' | 'purple' | 'amber';
  highlights: string[];
  stats?: {
    label: string;
    value: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  color: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    experience: string;
    category: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  iconName: string;
  badge: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  type: string;
  location: string;
  description: string;
  contributions: string[];
  technologies: string[];
  projectLink?: string;
  projectName?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  year: string;
  location: string;
  description: string;
  specialization: string;
  highlights: string[];
  coursework: string[];
}

export interface TimelineItem {
  year: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  type: 'education' | 'experience' | 'milestone';
  description: string;
  achievements: string[];
  skills: string[];
}
