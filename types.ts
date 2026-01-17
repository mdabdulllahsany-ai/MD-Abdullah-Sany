export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Innovation' | 'Web' | 'Games';
  techStack: string[];
  image?: string;
  featured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'AI & Programming' | 'Design & Creative';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Tech' | 'Design' | 'AI';
  icon?: string;
}