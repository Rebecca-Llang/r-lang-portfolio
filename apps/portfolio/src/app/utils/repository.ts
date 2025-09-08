import { repoDisplayNames, details } from '../constants/project-info';

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

export const getRepoName = (repoName: string) =>
  repoDisplayNames[repoName] || repoName;
