import { Project, ProjectRole } from '../models/projects';

export const projects: Project[] = [
  {
    id: 1,
    name: 'My Karaoke Playlist',
    githubRepo: 'my-karaoke-playlist',
    description:
      'This full stack personal project lets users build and manage their own personal karaoke playlist. Songs are able to be filtered by decade and genre.',
    role: ProjectRole.PERSONAL,
    technologies: {
      languages: [
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Dockerfile',
        'Procfile',
      ],
      frameworks: ['React', 'Express', 'Knex.js', 'SQLite3', 'Vitest'],
    },
    lastUpdated: '2024-12-01',
    cvDescription:
      'This full stack personal project allows users to build and manage their own personal karaoke playlist. Songs are able to be filtered by decade and genre.',
    cvTech: [
      'TypeScript',
      'JavaScript',
      'React',
      'Express',
      'Knex.js',
      'SQLite3',
      'Vitest',
    ],
  },
  {
    id: 2,
    name: 'DonateMate',
    githubRepo: 'donate-mate',
    description:
      'I led the design, planning and presentation of DonateMate. This app allowed donors to filter organisations by donation type, and provided profiles for donation centres to share and prioritise needs. I worked on Auth0, Maps API, and filtering by donation type. As well as a vertical slice through the organisation profile page to the database. As PO, I allocated tickets, refined scope and supported my team through their own tickets. I managed group time and availability, to maximise the final product.',
    role: ProjectRole.GROUP_PO,
    technologies: {
      languages: [
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Dockerfile',
        'Procfile',
      ],
      frameworks: ['React', 'Express', 'Knex.js', 'SQLite3'],
      apis: ['Auth0', 'Google Maps API'],
    },
    demoLink: 'https://donatemate.pushed.nz',
    lastUpdated: '2024-10-01',
    cvDescription:
      'I led the design, planning and presentation of DonateMate. This app allowed donors to filter organisations by donation type, and provided profiles for donation centres to share and prioritise needs. I worked on Auth0, Maps API, and filtering by donation type. As well as a vertical slice through the organisation profile page to the database. As PO, I allocated tickets, refined scope and supported my team through their own tickets. I managed group time and availability, to maximise the final product.',
    cvTech: [
      'TypeScript',
      'JavaScript',
      'React',
      'Express',
      'Knex.js',
      'SQLite3',
      'Auth0',
      'Google Maps API',
    ],
  },
  {
    id: 3,
    name: 'Kea Commerce',
    githubRepo: 'kea-commerce',
    description:
      'A e-commerce site created and built by a 3 person group. With a high-quality UE, database and eventual admin portal. Using Agile, Kanban, user stories and a learning focused approach to build a polished, functional app with industry standard checks from a experienced technical lead.',
    role: ProjectRole.GROUP_DEV,
    technologies: {
      languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
      frameworks: ['NX', 'React', 'React Query', 'Tailwind CSS'],
      apis: ['React Query Dev Tools'],
    },
    lastUpdated: '2024-11-01',
    cvDescription:
      'A e-commerce site created and built by a 3 person group. With a high-quality UE, database and eventual admin portal. Using Agile, Kanban, user stories and a learning focused approach to build a polished, functional app with industry standard checks from a experienced technical lead.',
    cvTech: [
      'TypeScript',
      'JavaScript',
      'NX',
      'React',
      'React Query',
      'Tailwind CSS',
      'React Query Dev Tools',
    ],
  },
  {
    id: 4,
    name: 'Nora AI',
    githubRepo: 'nora-ai',
    description:
      'Nora is an AI agent whose role is to support, advise and chat as an ADHD/life coach. Her learning journey is based on kindness, science and collaboration.',
    role: ProjectRole.PERSONAL,
    technologies: {
      languages: ['Python'],
      frameworks: ['Ollama', 'Python'],
      apis: ['AI/LLM APIs'],
    },
    lastUpdated: '2025-01-01',
    cvDescription:
      'Nora is an AI agent whose role is to support, advise and chat as an ADHD/life coach. Her learning journey is based on kindness, science and collaboration.',
    cvTech: ['Python', 'Ollama', 'AI/LLM APIs'],
  },
  {
    id: 5,
    name: "Rebecca Lang's Portfolio",
    githubRepo: 'r-lang-portfolio',
    description:
      'My personal portfolio is built using an NX monorepo and integrates the GitHub API to showcase my projects dynamically. It features React, TypeScript, and Tailwind CSS, with plans for a styling update to enhance the user experience. I also aim to incorporate an AI agent in the future, expanding its functionality and allowing for direct engagement with my portfolio.',
    role: ProjectRole.PERSONAL,
    technologies: {
      languages: ['TypeScript', 'JavaScript', 'CSS'],
      frameworks: ['Next.js', 'React', 'Tailwind CSS', 'NX'],
      apis: ['GitHub API', 'Resend API', 'Render'],
    },
    demoLink: 'https://rebecca-lang-portfolio.onrender.com',
    lastUpdated: '2025-01-15',
    cvDescription:
      'A modern, responsive portfolio site showcasing fullstack development skills. Includes dynamic GitHub integration, contact forms with Resend API, and comprehensive E2E testing with Cypress.',
    cvTech: [
      'TypeScript',
      'JavaScript',
      'Next.js',
      'React',
      'Tailwind CSS',
      'NX',
      'GitHub API',
      'Resend API',
      'Render',
    ],
  },
  {
    id: 6,
    name: 'Kairos AI',
    githubRepo: 'kairos-ai',
    description:
      'Kairos is my AI agent whose role is that of an ADHD/Life coach. Born and adapted from the Luna AI project. Luna was created for my friend ZanKris, who was Product Owner while I led and skill shared the development. Kairos is a personalised agent, inspired by a combination of Nora and Luna.',
    role: ProjectRole.PERSONAL,
    technologies: {
      languages: ['Python'],
      frameworks: ['Ollama', 'Python'],
      apis: ['AI/LLM APIs'],
    },
    lastUpdated: '2025-01-01',
    cvDescription:
      'Kairos is my AI agent whose role is that of an ADHD/Life coach. Born and adapted from the Luna AI project. Luna was created for my friend ZanKris, who was Product Owner while I led and skill shared the development. Kairos is a personalised agent, inspired by a combination of Nora and Luna.',
    cvTech: ['Python', 'Ollama', 'AI/LLM APIs'],
  },
];

export const getProjectById = (id: number): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectByRepoName = (repoName: string): Project | undefined => {
  return projects.find((project) => project.githubRepo === repoName);
};

export const getProjectsWithDemos = (): Project[] => {
  return projects.filter((project) => project.demoLink);
};

export { repoDisplayNames } from '../models/projects';
