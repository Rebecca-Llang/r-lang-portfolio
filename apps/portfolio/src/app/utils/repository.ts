import { repoDisplayNames, projects } from '../constants/projects';

export function getFallbackLanguages(repoName: string): string[] {
  let projectDetails = projects.find((project) => {
    const displayName = getRepoName(repoName);
    return project.name.toLowerCase() === displayName.toLowerCase();
  });

  if (!projectDetails) {
    projectDetails = projects.find(
      (project) =>
        project.name.toLowerCase() === repoName.toLowerCase() ||
        project.name.toLowerCase().replace(/\s+/g, '-') ===
          repoName.toLowerCase()
    );
  }

  return projectDetails?.technologies.languages || ['No languages found'];
}

export const getRepoName = (repoName: string) =>
  repoDisplayNames[repoName] || repoName;
