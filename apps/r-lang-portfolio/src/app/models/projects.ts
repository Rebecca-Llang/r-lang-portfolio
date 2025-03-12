export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  updated_at: string;
  languages_url: string;
  private: boolean;
  avatar_url: string;
  details?: {
    details: string;
    role: string;
  };
}

export type Details = {
  repoName: string;
  details: string;
  role: string;
};

export type Peer = {
  avatar_url: string;
  html_url: string;
  login: string;
};
