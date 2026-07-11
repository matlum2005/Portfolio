export interface SkillItem {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface Project {
  title: string;
  tag: string;
  desc: string;
  long: string;
  stack: string[];
  gradient: string;
  icon: string; // lucide icon name
  demoUrl?: string;
  githubUrl?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  icon: string;
}

export interface Achievement {
  title: string;
  desc: string;
  icon: string;
}

export interface Certificate {
  title: string;
  org: string;
  year: string;
}

export interface Repo {
  name: string;
  desc: string;
  lang: string;
  stars: number;
}

export interface LanguageStat {
  name: string;
  pct: number;
  color: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface Service {
  title: string;
  desc: string;
  icon: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  tag: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}
