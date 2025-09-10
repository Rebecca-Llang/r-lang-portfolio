import { DemoLink } from '../models/demo-links';

export const demoLinks: DemoLink[] = [
  {
    projectName: 'DonateMate',
    liveUrl: 'https://donatemate.pushed.nz',
    description: 'Live demo of the DonateMate application',
  },
  {
    projectName: "Rebecca Lang's Portfolio",
    liveUrl: 'https://rebecca-lang-portfolio.onrender.com',
    description: "Live demo of Rebecca Lang's portfolio website",
  },
];

export const getDemoLink = (projectName: string): DemoLink | undefined => {
  return demoLinks.find((demo) => demo.projectName === projectName);
};
