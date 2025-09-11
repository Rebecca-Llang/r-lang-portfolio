export const demoLinks = [
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

export const getDemoLink = (projectName: string) => {
  return demoLinks.find((demo) => demo.projectName === projectName);
};
