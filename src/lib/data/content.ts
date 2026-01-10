import config from './config.json';

export const profile = config.profile;
export const about = config.about;
export const experiences = config.experiences;
export const skills = config.skills;

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  items: string[];
}
