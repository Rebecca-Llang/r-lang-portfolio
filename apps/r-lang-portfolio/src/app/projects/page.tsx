import { getRepos, getContributors, getLanguages, getRepoName } from '.';
import { Repo } from '../models/projects';

export default async function Projects() {
  const repos = await getRepos();

  const fullRepos = await Promise.all(
    repos.map(async (repo: Repo) => {
      const [languages, collaborators] = await Promise.all([
        getLanguages(repo.languages_url),
        getContributors(repo.name),
      ]);

      return {
        id: repo.id,
        ogRepoName: repo.name,
        name: getRepoName(repo.name),
        html_url: repo.html_url,
        description: repo.description || 'N/A',
        updated_at: repo.updated_at,
        languages,
        collaborators,
      };
    })
  );
  const orderedRepos = fullRepos.sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );

  return (
    <div>
      <h1>Projects</h1>
      <h2>My Github Projects</h2>

      <ul className="border-blue-400">
        {orderedRepos.map((repo) => (
          <li className="p-6" key={repo.id}>
            <p>Project: {repo.name}</p>

            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              Repo: {repo.ogRepoName}
            </a>

            <p>
              Description: {repo.description || 'No description available.'}
            </p>

            <p>Languages: {repo.languages.join(', ') || 'N/A'}</p>
            <p>
              Collaborators:{' '}
              {repo.collaborators.length > 0
                ? repo.collaborators
                    .map((peers: { login: string }) => peers.login)
                    .join(', ')
                : 'N/A'}
            </p>
            <p>
              Last Updated:{' '}
              {new Date(repo.updated_at).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
