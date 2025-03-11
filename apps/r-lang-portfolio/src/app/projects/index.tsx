import { Repo } from '../models/projects';

export async function getRepos() {
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

  return [...personalRepos, keaData];
}

export async function getLanguages(languagesURL: string) {
  const res = await fetch(languagesURL);
  const languages = await res.json();
  const repoLanguages = Object.keys(languages);
  return repoLanguages;
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
    return contributors.map((peer: { login: string; html_url: string }) => ({
      login: peer.login,
      html_url: peer.html_url,
    }));
  } catch (error) {
    console.error('Error fetching contributors:', error);
    return [];
  }
};

export const repoDisplayNames = {
  'my-karaoke-playlist': 'My Karaoke Playlist',
  'donate-mate': 'Donate Mate',
  'ok-karaoke': 'OK Karaoke',
  'r-lang-portfolio': "Rebecca Lang's Portfolio",
  'kea-commerce': 'Kea Commerce',
};

export const getRepoName = (repoName: string) =>
  repoDisplayNames[repoName] || repoName;
