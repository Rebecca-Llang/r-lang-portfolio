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
    <div className="container mx-auto max-w-[90%] px-4">
      <div className="text-center pt-5 pb-5">
        <h1>Projects</h1>
        <h2>My Github Projects</h2>
      </div>

      {orderedRepos.map((repo) => (
        <ul key={repo.id}>
          <div
            className={`border-2 border-eggshell border-opacity-30 rounded-md p-4 mb-6`}
          >
            <li className="p-6" key={repo.ogRepoName}>
              <h3 className="pr-4 pb-5">{repo.name}</h3>

              <p className="pb-3">
                Repo:
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-grow h3"
                >
                  {' ' + repo.ogRepoName}
                </a>
              </p>
              <p className="pb-3">Role: {repo.details.role}</p>
              <p className="pb-3">
                Description: {repo.description || 'No description available.'}
              </p>

              <p className="pb-3">Details: {repo.details.details}</p>

              <p className="flex flex-wrap gap-2 pb-4">
                Languages:{' '}
                {repo.languages.map((language, index) => (
                  <span
                    key={index}
                    className="bg-accent text-white text-sm px-3 py-1 rounded-full"
                  >
                    {language}
                  </span>
                )) || 'N/A'}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center pb-6">
                {repo.collaborators.length > 0 ? (
                  repo.collaborators.map((peer: Peer) => (
                    <div key={peer.login} className="flex items-center gap-2">
                      <Image
                        src={peer.avatar_url}
                        width={50}
                        height={50}
                        alt={`${peer.login}'s GitHub avatar`}
                        className="rounded-full"
                      />
                      <a
                        href={peer.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-grow"
                      >
                        {peer.login}
                      </a>
                    </div>
                  ))
                ) : (
                  <p>N/A</p>
                )}
              </div>

              <div className="pt-3">
                Last Updated:
                {' ' +
                  new Date(repo.updated_at).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
              </div>
            </li>
          </div>
        </ul>
      ))}
    </div>
  );
}
