export interface Project {
  id: number;
  name: string;
  order: number;
  githubRepo: string;
  description: string;
  role: ProjectRole;
  technologies: {
    languages: string[];
    frameworks?: string[];
    apis?: string[];
  };
  demoLink?: string;
  collaborators?: Collaborator[];
  contributors?: Collaborator[];
  lastUpdated: string;
  cvDescription?: string;
  cvDetails?: string;
  cvTech?: string[];
}

export enum ProjectRole {
  PERSONAL = 'Personal Project',
  GROUP_PO = 'Group Project: Product Owner and Programmer',
  GROUP_DEV = 'Group Project: Developer, Collaborator and Programmer',
  UNKNOWN = 'Ask!',
}

export interface Collaborator {
  avatar_url: string;
  html_url: string;
  login: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  updated_at: string;
  languages_url: string;
  private: boolean;
  avatar_url: string;
}

export interface ProjectWithGitHub extends Project {
  html_url: string;
  updated_at: string;
  languages_url: string;
  avatar_url: string;
  languages?: string[];
}

export const repoDisplayNames: Record<string, string> = {
  'my-karaoke-playlist': 'My Karaoke Playlist',
  'donate-mate': 'DonateMate',
  'r-lang-portfolio': "Rebecca Lang's Portfolio",
  'kea-commerce': 'Kea Commerce',
  'nora-ai': 'Nora AI',
  'kairos-ai': 'Kairos AI',
};
