import type { IconType } from 'react-icons';

export interface Education {
  title: string;
  institution: string;
  date: string;
  description: string;
}

export interface Experience {
  title: string;
  company: string;
  dateRange: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Interest {
  name: string;
}

export interface Contact {
  title: string;
  details: string;
  icon?: IconType;
  link?: string;
  linkIcon?: IconType;
}

export enum CVSection {
  ABOUT_ME = 'About Me',
  EDUCATION = 'Education',
  SKILLS = 'Skills',
  EXPERIENCE = 'Experience',
  PROJECTS = 'Projects',
  CONTACT = 'Contact',
  INTERESTS = 'Interests',
}

export type CVContent = Education | Experience | SkillCategory | Interest;

export const aboutMeContent = `Kia ora! I'm Rebecca, a full-stack software engineer passionate about people and creating user-focused solutions. My curiosity about technology, how it's built, refined, and shaped to serve users, led me to pursue a career in this field. I graduated from Dev Academy, where I gained hands-on experience across the full stack, working with modern technologies, Agile methodologies, and collaborative development. My final project focused heavily on web accessibility and UX, areas that continue to inspire my work. Since graduating, I've been expanding my skills through projects like a production quality e-commerce site built with TypeScript, React, Next.js, TailwindCSS, and Nx in a monorepo structure, as well as AI chatbots, and my portfolio deployed on Render. This work has sharpened my abilities in frontend (React, Next.js, responsive design, accessibility), backend/API development, CI/CD pipelines and testing (Cypress). I enjoy applying modern patterns and integrations, such as the GitHub API and Resend, and furthering my capabilities as a developer. I value people, creativity, and active participation. With experience in pair programming, group projects, and collaborative teams, I thrive in environments where learning and skill-sharing are part of the culture, while also enjoying the focus of solving problems independently. My background in customer service and management has taught me how to build positive team dynamics, navigate interpersonal challenges, and translate user needs into practical solutions. I approach challenges with energy, adaptability, and a commitment to continuous learning, and I'm driven to create technology that is accessible, inclusive, and genuinely useful.`;
