import {
  GitHubRepo,
  Collaborator,
  ProjectWithGitHub,
  ProjectRole,
} from '../models/projects';
import { getProjectByRepoName, projects } from '../constants/projects';
import { getGitHubHeaders } from '../utils/github-api';
import { getFallbackLanguages } from '../utils/repository';

function getFallbackProjects(): ProjectWithGitHub[] {
  return projects.map((project) => {
    // Handle kea-commerce special case (different GitHub org)
    const isKeaCommerce = project.githubRepo === 'kea-commerce';
    const orgName = isKeaCommerce ? 'kea-commerce' : 'Rebecca-Llang';

    return {
      ...project,
      html_url: `https://github.com/${orgName}/${project.githubRepo}`,
      updated_at: project.lastUpdated,
      languages_url: `https://api.github.com/repos/${orgName}/${project.githubRepo}/languages`,
      avatar_url: project.contributors?.[0]?.avatar_url || '',
    };
  });
}

export async function getRepos() {
  try {
    const headers = getGitHubHeaders();

    const [personalRes, keaRes] = await Promise.all([
      fetch('https://api.github.com/users/Rebecca-Llang/repos', {
        headers,
        next: { revalidate: 2000 },
      }),
      fetch('https://api.github.com/repos/kea-commerce/kea-commerce', {
        headers,
      }),
    ]);

    if (!personalRes.ok) {
      // eslint-disable-next-line no-console
      console.error(
        'GitHub API error for personal repos:',
        personalRes.status,
        personalRes.statusText
      );
      return getFallbackProjects();
    }

    if (!keaRes.ok) {
      // eslint-disable-next-line no-console
      console.error(
        'GitHub API error for kea-commerce:',
        keaRes.status,
        keaRes.statusText
      );
      return getFallbackProjects();
    }

    const [personalData, keaData] = await Promise.all([
      personalRes.json(),
      keaRes.json(),
    ]);

    if (!Array.isArray(personalData)) {
      // eslint-disable-next-line no-console
      console.error('GitHub API returned non-array for personal repos');
      return getFallbackProjects();
    }

    const personalRepos = personalData.filter(
      (repo: GitHubRepo) =>
        !repo.private && !repo.name.includes('Rebecca-LLang')
    );

    const projectsWithGitHubData = [...personalRepos, keaData]
      .map((repo: GitHubRepo) => {
        const projectData = getProjectByRepoName(repo.name);

        if (!projectData) {
          return {
            id: repo.id,
            name: repo.name,
            githubRepo: repo.name,
            description: repo.description || 'N/A',
            role: ProjectRole.UNKNOWN,
            technologies: {
              languages: [],
              frameworks: [],
              apis: [],
            },
            lastUpdated: repo.updated_at,
            html_url: repo.html_url,
            updated_at: repo.updated_at,
            languages_url: repo.languages_url,
            avatar_url: 'https://avatars.githubusercontent.com/u/125948480?v=4',
          } as ProjectWithGitHub;
        }

        return {
          ...projectData,
          html_url: repo.html_url,
          updated_at: repo.updated_at,
          languages_url: repo.languages_url,
          avatar_url: projectData.contributors?.[0]?.avatar_url || '',
        } as ProjectWithGitHub;
      })
      .filter((project): project is ProjectWithGitHub => project !== null);

    return projectsWithGitHubData;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error getting repositories:', error);
    return getFallbackProjects();
  }
}

export async function getLanguages(languagesURL: string, repoName: string) {
  try {
    const headers = getGitHubHeaders();

    const res = await fetch(languagesURL, { headers });

    if (!res.ok) {
      return getFallbackLanguages(repoName);
    }

    const languages = await res.json();
    const repoLanguages = Object.keys(languages);

    return repoLanguages.length > 0
      ? repoLanguages
      : getFallbackLanguages(repoName);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error getting languages:', error);
    return getFallbackLanguages(repoName);
  }
}

export const getContributors = async (repoName: string) => {
  try {
    const headers = getGitHubHeaders();

    const apiUrl =
      repoName === 'kea-commerce'
        ? 'https://api.github.com/repos/kea-commerce/kea-commerce/contributors'
        : `https://api.github.com/repos/Rebecca-Llang/${repoName}/contributors`;

    const res = await fetch(apiUrl, { headers });

    if (!res.ok) {
      // Return fallback contributors from projects data when API fails
      const projectData = getProjectByRepoName(repoName);
      return projectData?.contributors || [];
    }

    const contributors = await res.json();
    return contributors.map((peer: Collaborator) => ({
      login: peer.login,
      html_url: peer.html_url,
      avatar_url: peer.avatar_url,
    }));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error getting contributors:', error);
    const projectData = getProjectByRepoName(repoName);
    return projectData?.contributors || [];
  }
};
