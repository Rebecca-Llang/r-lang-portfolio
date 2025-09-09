import { repoDisplayNames, details } from '../constants/project-info';

export function getFallbackLanguages(repoName: string): string[] {
  // First try to find by original repo name (e.g., 'r-lang-portfolio')
  let projectDetails = details.find((detail) => {
    const displayName = getRepoName(repoName);
    return detail.repoName.toLowerCase() === displayName.toLowerCase();
  });

  // If not found, try to find by repo name directly
  if (!projectDetails) {
    projectDetails = details.find(
      (detail) =>
        detail.repoName.toLowerCase() === repoName.toLowerCase() ||
        detail.repoName.toLowerCase().replace(/\s+/g, '-') ===
          repoName.toLowerCase()
    );
  }

  return projectDetails?.languages || ['No languages found'];
}

export const getRepoName = (repoName: string) =>
  repoDisplayNames[repoName] || repoName;
