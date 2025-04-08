export interface StatItem {
  title: string;
  description: string;
  number: number;
}

export interface SkillItem {
  name: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  list: SkillItem[];
}
