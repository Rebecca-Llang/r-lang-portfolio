import { Repo, Peer } from '../models/projects';
import { details, repoDisplayNames } from '../constants/project-info';

export async function getRepos() {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'portfolio-app',
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [personalRes, keaRes] = await Promise.all([
      fetch('https://api.github.com/users/Rebecca-Llang/repos', {
        headers,
        next: { revalidate: 2000 },
      }),
      fetch('https://api.github.com/repos/kea-commerce/kea-commerce', {
        headers,
      }),
    ]);

    const [personalData, keaData] = await Promise.all([
      personalRes.json(),
      keaRes.json(),
    ]);

    const personalRepos = personalData.filter(
      (repo: Repo) => !repo.private && !repo.name.includes('Rebecca-LLang')
    );

    const reposWithDetails = [...personalRepos, keaData].map((repo: Repo) => {
      const repoDetails = details.find(
        (d) => getRepoName(repo.name) === d.repoName
      ) || { details: 'N/A', role: 'N/A' };

      return {
        ...repo,
        details: repoDetails,
      };
    });

    return reposWithDetails;
  } catch (error) {
    // console.error('Error fetching repos:', error);
    return [];
  }
}

export function getFallbackLanguages(repoName: string): string[] {
  const normalName =
    Object.keys(repoDisplayNames).find(
      (key) =>
        key.toLowerCase() === repoName.toLowerCase() ||
        repoDisplayNames[key].toLowerCase() === repoName.toLowerCase()
    ) || repoName;

  const projectDetails = details.find(
    (detail) =>
      detail.repoName.toLowerCase() === normalName.toLowerCase() ||
      detail.repoName.toLowerCase().replace(/\s+/g, '-') ===
        normalName.toLowerCase()
  );

  return projectDetails?.languages || ['No languages found'];
}

export async function getLanguages(languagesURL: string, repoName: string) {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'portfolio-app',
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

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
    // console.error('Error fetching languages:', error);
    return getFallbackLanguages(repoName);
  }
}

export const getContributors = async (repoName: string) => {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'portfolio-app',
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const apiUrl =
      repoName === 'kea-commerce'
        ? 'https://api.github.com/repos/kea-commerce/kea-commerce/contributors'
        : `https://api.github.com/repos/Rebecca-Llang/${repoName}/contributors`;

    const res = await fetch(apiUrl, { headers });

    if (!res.ok) {
      // console.error(`Failed to fetch contributors for ${repoName}`);
      return [];
    }

    const contributors = await res.json();
    return contributors.map((peer: Peer) => ({
      login: peer.login,
      html_url: peer.html_url,
      avatar_url: peer.avatar_url,
    }));
  } catch (error) {
    // console.error('Error fetching contributors:', error);
    return [];
  }
};

export const getRepoName = (repoName: string) =>
  repoDisplayNames[repoName] || repoName;
