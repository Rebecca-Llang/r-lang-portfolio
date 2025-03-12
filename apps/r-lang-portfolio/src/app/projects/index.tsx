import { Repo, Peer } from '../models/projects';
import { details, repoDisplayNames } from '../constants/project-info';

export async function getRepos() {
  try {
    const [personalRes, keaRes] = await Promise.all([
      fetch('https://api.github.com/users/Rebecca-Llang/repos', {
        next: { revalidate: 172800 },
      }),
      fetch('https://api.github.com/repos/kea-commerce/kea-commerce'),
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
    console.error('Error fetching repos:', error);
    return [];
  }
}

export async function getLanguages(languagesURL: string) {
  try {
    const res = await fetch(languagesURL);

    if (!res.ok) {
      console.error(`Failed to fetch languages from ${languagesURL}`);
      return ['No languages found'];
    }

    const languages = await res.json();
    const repoLanguages = Object.keys(languages);
    return repoLanguages.length > 0
      ? repoLanguages
      : ['No languages specified'];
  } catch (error) {
    console.error('Error fetching languages:', error);
    return ['Error fetching languages'];
  }
}

export const getContributors = async (repoName: string) => {
  try {
    const token = process.env.GITHUB_TOKEN;
    const apiUrl =
      repoName === 'kea-commerce'
        ? 'https://api.github.com/repos/kea-commerce/kea-commerce/contributors'
        : `https://api.github.com/repos/Rebecca-Llang/${repoName}/contributors`;

    const res = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error(`Failed to fetch contributors for ${repoName}`);
      return [];
    }

    const contributors = await res.json();
    return contributors.map((peer: Peer) => ({
      login: peer.login,
      html_url: peer.html_url,
      avatar_url: peer.avatar_url,
    }));
  } catch (error) {
    console.error('Error fetching contributors:', error);
    return [];
  }
};

export const getRepoName = (repoName: string) =>
  repoDisplayNames[repoName] || repoName;
