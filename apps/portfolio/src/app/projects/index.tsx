import { Repo, Peer } from '../models/projects';
import { details } from '../constants/project-info';
import { getGitHubHeaders } from '../utils/github-api';
import { getFallbackLanguages, getRepoName } from '../utils/repository';

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
    return [];
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
      return [];
    }

    const contributors = await res.json();
    return contributors.map((peer: Peer) => ({
      login: peer.login,
      html_url: peer.html_url,
      avatar_url: peer.avatar_url,
    }));
  } catch (error) {
    return [];
  }
};
