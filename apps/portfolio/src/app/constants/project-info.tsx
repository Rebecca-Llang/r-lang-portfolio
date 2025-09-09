import { Details } from '../models/projects';

export const details: Details[] = [
  {
    repoName: 'My Karaoke Playlist',
    details:
      'This full stack personal project lets users build and manage their own personal karaoke playlist. Songs are able to be filtered by decade and genre.',
    role: 'Personal Project',
    languages: [
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Dockerfile',
      'Procfile',
    ],
  },
  {
    repoName: 'DonateMate',
    role: 'Group Project: Product Owner and Programmer',
    details:
      'I led the design, planning  and presentation of DonateMate. This app allowed donors to filter organisations by donation type, and provided profiles for donation centres to share and prioritise needs. I worked on Auth0, Maps API, and filtering by donation type. As well as a vertical slice through the organisation profile page to the database. As PO, I allocated tickets, refined scope and supported my team through their own tickets. I managed group time and availability, to maximise the final product.',
    languages: [
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Dockerfile',
      'Procfile',
    ],
  },
  {
    repoName: 'Kea Commerce',
    role: 'Group Project: Developer, Collaborator and Programmer',
    details:
      'A  e-commerce site created and built by a 3 person group.  With a high-quality UE,  database and eventual admin portal. Using Agile, Kanban,  user stories and a learning focused approach to build a polished, functional app with industry standard checks from a experienced technical lead.',
    languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    repoName: 'Nora AI',
    role: 'Personal Project supported by Mentor',
    details:
      'Nora is my AI agent who supports me in my life. An ongoing project exploring AI capabilities and personal assistance.',
    languages: ['Python'],
  },
  {
    repoName: "Rebecca Lang's Portfolio",
    role: 'Personal Project',
    details:
      'My personal portfolio is built using an NX monorepo and integrates the GitHub API to showcase my projects dynamically. It features React, TypeScript, and Tailwind CSS, with plans for a styling update to enhance the user experience. I also aim to incorporate an AI agent in the future, expanding its functionality and allowing for direct engagement with my portfolio.',
    languages: ['TypeScript', 'JavaScript', 'CSS'],
  },
  {
    repoName: 'Kairos AI',
    role: 'Personal Project',
    details:
      'Kairos is my AI agent whose role is that of an ADHD/Life coach. Born and adapted from the Luna AI project. Luna was created for my friend ZanKris, who was Product Owner while I led and skill shared the development. Kairos is a personalised agent, inspired by a combination of Nora and Luna.',
    languages: ['Python'],
  },
];

export const repoDisplayNames = {
  'my-karaoke-playlist': 'My Karaoke Playlist',
  'donate-mate': 'DonateMate',
  'r-lang-portfolio': "Rebecca Lang's Portfolio",
  'kea-commerce': 'Kea Commerce',
  'nora-ai': 'Nora AI',
  'kairos-ai': 'Kairos AI',
};
