import { Repo, Details, Peer } from '../models/projects';

export const details: Details[] = [
  {
    repoName: 'My Karaoke Playlist',
    details:
      'This full stack personal project connects lets users build and manage their own personal karaoke playlist. Songs are able to be filtered by decade and genre.',
    role: 'Personal Project',
  },
  {
    repoName: 'Donate Mate',
    role: 'Group Project: Product Owner and Programmer',
    details:
      'I led the design, planning  and presentation of DonateMate. This app allowed donors to filter organisations by donation type, and provided profiles for donation centres to share and prioritise needs. I worked on Auth0, Maps API, and filtering by donation type. As well as a vertical slice through the organisation profile page to the database. As PO, I allocated tickets, refined scope and supported my team through their own tickets. I managed group time and availability, to maximise the final product.',
  },
  {
    repoName: "Rebecca Lang's Portfolio",
    role: 'Personal Project',
    details:
      'My personal portfolio is built using an NX monorepo and integrates the GitHub API to showcase my projects dynamically. It features React, TypeScript, and Tailwind CSS, with plans for a styling update to enhance the user experience. I also aim to incorporate an AI agent in the future, expanding its functionality and allowing for direct engagement with my portfolio.',
  },
  {
    repoName: 'Kea Commerce',
    role: 'Group Project: Developer, Collaborator and Programmer',
    details:
      'A  e-commerce site created and built by a 3 person group.  With a high-quality UE,  database and eventual admin portal. Using Agile, Kanban,  user stories and a learning focused approach to build a polished, functional app with industry standard checks from a experienced technical lead.',
  },
  {
    repoName: 'Nora AI',
    role: 'Personal Project supported by Mentor',
    details: 'Nora is my AI agent who supports me in my life',
  },
];

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

export const repoDisplayNames = {
  'my-karaoke-playlist': 'My Karaoke Playlist',
  'donate-mate': 'Donate Mate',
  'r-lang-portfolio': "Rebecca Lang's Portfolio",
  'kea-commerce': 'Kea Commerce',
  'nora-ai': 'Nora AI',
};

export const getRepoName = (repoName: string) =>
  repoDisplayNames[repoName] || repoName;
