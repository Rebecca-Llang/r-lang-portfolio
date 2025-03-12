import { getRepos, getContributors, getLanguages, getRepoName } from '.';
import { Repo, Peer } from '../models/projects';
import Image from 'next/image';

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
        details: repo.details,
      };
    })
  );
  const orderedRepos = fullRepos.sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );

  return (
    <>
      <h1>Projects</h1>
      <h2>My Github Projects</h2>
      <ul className="border-blue-400">
        {orderedRepos.map((repo) => (
          <li className="p-6" key={repo.id}>
            <p>Project: {repo.name}</p>
            <p>
              Repo:
              <a
                className="text-blue-900 hover:text-blue-800"
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {' ' + repo.ogRepoName}
              </a>
            </p>
            <p>Role: {repo.details.role}</p>
            <p>
              Description: {repo.description || 'No description available.'}
            </p>

            <p>Details: {repo.details.details}</p>

            <p>Languages: {repo.languages.join(', ') || 'N/A'}</p>
            <p>
              Collaborators:{' '}
              {repo.collaborators.length > 0
                ? repo.collaborators.map((peer: Peer, index: number) => (
                    <>
                      <a
                        key={peer.login}
                        href={peer.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 hover:text-blue-800"
                      >
                        {peer.login}
                      </a>
                      <div>
                        <Image
                          src={peer.avatar_url}
                          width={50}
                          height={50}
                          alt={`${peer.login}'s GitHub avatar`}
                        />
                      </div>
                      {index < repo.collaborators.length - 1 ? ', ' : ''}
                    </>
                  ))
                : 'N/A'}
            </p>
            <p>
              Last Updated:
              {' ' +
                new Date(repo.updated_at).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
