import { getRepos, getContributors, getLanguages } from '.';
import { getRepoName } from '../utils/repository';
import { ProjectWithGitHub, Collaborator } from '../models/projects';
import Image from 'next/image';
import { FaLink } from 'react-icons/fa';
import Icon from '../components/icon-comp';

export default async function Projects() {
  const repos = await getRepos();

  if (!repos || repos.length === 0) {
    return (
      <div className="container mx-auto max-w-[90%] px-4">
        <div className="text-center pt-5 pb-5">
          <h1>Projects</h1>
          <h2>My Github Projects</h2>
        </div>
        <div className="text-center py-8">
          <p className="text-gray-600">
            Unable to load projects at the moment. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  const fullProjects = await Promise.all(
    repos.map(async (project: ProjectWithGitHub) => {
      const [languages, collaborators] = await Promise.all([
        getLanguages(project.languages_url, project.githubRepo),
        getContributors(project.githubRepo),
      ]);

      return {
        ...project,
        name: getRepoName(project.githubRepo),
        languages,
        collaborators,
      };
    })
  );
  const orderedProjects = fullProjects.sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );

  return (
    <div className="container mx-auto max-w-[90%] px-4">
      <div className="text-center pt-5 pb-5">
        <h1>Projects</h1>
        <h2>My Github Projects</h2>
      </div>

      <ul>
        {orderedProjects.map((project) => (
          <li
            key={project.id}
            id={project.githubRepo}
            className="relative border-2 border-eggshell border-opacity-30 rounded-md p-4 mb-6 overflow-hidden"
          >
            <div
              className="absolute inset-0 rounded-md opacity-5 pointer-events-none"
              style={{ backgroundColor: '#A67C52' }}
            />
            <div className="relative p-6">
              <h3 className="pr-4 pb-5">{project.name}</h3>

              <p className="pb-3 flex items-center gap-1">
                Repo:
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-grow h3 flex items-center gap-1"
                >
                  {project.githubRepo}
                  <Icon icon={<FaLink size={16} />} />
                </a>
              </p>

              {project.demoLink && (
                <p className="pb-3 flex items-center gap-1">
                  Live Demo:
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-grow h3 flex items-center gap-1 text-accent"
                  >
                    View Live Demo
                    <Icon icon={<FaLink size={16} />} />
                  </a>
                </p>
              )}

              <p className="pb-3">Role: {project.role}</p>
              <p className="pb-3">
                Description:{' '}
                {project.description || 'No description available.'}
              </p>

              <p className="flex flex-wrap gap-2 pb-4">
                Languages:{' '}
                {project.languages?.length
                  ? project.languages.map((language, index) => (
                      <span
                        key={index}
                        className="bg-accent text-white text-sm px-3 py-1 rounded-full"
                      >
                        {language}
                      </span>
                    ))
                  : 'N/A'}
              </p>

              {project.technologies.frameworks && (
                <p className="flex flex-wrap gap-2 pb-4">
                  Frameworks:{' '}
                  {project.technologies.frameworks.map((framework, index) => (
                    <span
                      key={index}
                      className="bg-accent text-white text-sm px-3 py-1 rounded-full"
                    >
                      {framework}
                    </span>
                  ))}
                </p>
              )}

              {project.technologies.apis && (
                <p className="flex flex-wrap gap-2 pb-4">
                  APIs:{' '}
                  {project.technologies.apis.map((api, index) => (
                    <span
                      key={index}
                      className="bg-accent text-white text-sm px-3 py-1 rounded-full"
                    >
                      {api}
                    </span>
                  ))}
                </p>
              )}

              <p>Contributors:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center pb-6">
                {project.collaborators && project.collaborators.length > 0 ? (
                  project.collaborators.map((peer: Collaborator) => (
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
                Last Updated:{' '}
                {new Date(project.updated_at).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
