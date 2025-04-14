import { CVinfo, Contact, CVsections } from '../models/cv';
import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaLink,
  FaUsers,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const cvSections: CVsections[] = [
  {
    section: 'About Me',
  },
  {
    section: 'Education',
  },
  {
    section: 'Skills',
  },
  {
    section: 'Experience',
  },
  {
    section: 'Projects',
  },
  {
    section: 'Contact',
  },
  {
    section: 'Interests',
  },
];

export const contact: Contact[] = [
  {
    section: 'Contact',
    title: 'Phone',
    details: 'available upon request',
    icon: FaPhoneAlt,
    link: '/contact-me',
  },
  {
    section: 'Contact',
    title: 'Email',
    details: 'rebeccalang50@gmail.com',
    icon: MdEmail,
    linkIcon: FaLink,
    link: '/contact-me',
  },
  {
    section: 'Contact',
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/rebecca-lang-nz/',
    icon: FaLinkedin,
    linkIcon: FaLink,
    details: 'linkedin.com/in/rebecca-lang-nz',
  },
  {
    section: 'Contact',
    title: 'Github',
    link: 'https://github.com/Rebecca-Llang',
    icon: FaGithub,
    linkIcon: FaLink,
    details: 'github.com/Rebecca-Llang',
  },
  {
    section: 'Contact',
    title: 'References',
    link: '/contact-me',
    icon: FaUsers,
    details: 'available upon request',
  },
];

export const cvInfo: CVinfo[] = [
  {
    section: 'Education',
    title: 'Certificate in Applied Software Development - Level 6',
    date: '2024',
    subtitle: 'Dev Academy, NZ',
    content: 'Full Stack Software Development Bootcamp',
  },
  {
    section: 'Education',
    title: 'Diploma in Digital Photography',
    date: '2012',
    subtitle: 'Aoraki Polytechnic / Ara Institute of Technology, NZ',
    content: 'Digital Photography and Editing',
  },
  {
    section: 'Experience',
    title: 'Software Development at Dev Academy, NZ',
    date: '2024',
    subtitle: 'Immersive 17-week full stack development bootcamp',
    content:
      'Developed a range of technical and project management skills through hands-on coding and collaboration. Engaged in solo programming, pair programming, and group projects (3-7 members), using Agile methodologies to plan and build applications.Led group projects as Product Owner, improving team coordination and fostering effective communication. Gained experience in JavaScript, TypeScript, HTML, CSS, React.js, Node.js, RESTful APIs, Vitest, Superagent, Express, Knex.js & SQLite3, Git, Github and npm. Emphasised soft skills such as active listening, empathy, and courageous conversations to navigate team dynamics and project challenges.',
  },
  {
    section: 'Experience',
    title: 'Manager',
    date: '2019 - 2023',
    subtitle: 'Limerence Studio, NZ',
    content:
      'Managed daily operations and communications. Customer service and liaising with clients and staff to provide the best experience and manage expectations. Supporting staff with social media marketing and communication. Oversaw administrative tasks and book management. Facilitated effective collaboration through weekly management meetings and monthly collective meetings.',
  },
  {
    section: 'Experience',
    title: 'Mixologist',
    date: '2019',
    subtitle: 'Dirty Little Secret Bar, NZ',
    content:
      'Created and served cocktails to customers in a fast paced environment. Provided customer service, decorating and maintaininga clean and safe environment. Collaborated with the team to ensure a positive and engaging atmosphere.',
  },
  {
    section: 'Experience',
    title: 'Roaming Manager',
    date: '2017-2018',
    subtitle: 'Public Outreach Fundraising, Australia',
    content:
      'Led teams of 5-10 in professional fundraising for Australian Conservation Foundation and Medicine Sans Frontières. Trained and developed staff, fostering a strong team culture across various locations in Australia. Engaging with the public, building rapport and inspiring on-going donations.',
  },
  {
    section: 'About Me',
    title: 'About Me',
    date: '2025',
    subtitle: 'About Me',
    content: `Kia ora! I'm Rebecca, a full stack software developer passionate about people and creating user-centric solutions. My curiosity about technology, particularly how it's built and refined to serve users, led me to pursue a career in this field. I graduated from Dev Academy, where I gained hands-on experience across the full tech stack, developing skills in modern technologies, Agile methodologies, and collaborative development. My final project focused heavily on web accessibility and UX, areas that continue to inspire my work. My enthusiasm for development has only deepened since. I'm excited to apply my technical and interpersonal skills in real-world projects. Currently, I'm actively involved in building an e-commerce site as part of a small group project, where I'm learning .NET and C# to expand my full stack capabilities. With a background in customer service and management, I excel in team settings, balancing kindness with efficiency. I'm committed to continuous learning and eager to take on new challenges in my first web development role.`,
  },
  {
    section: 'Skills',
    title: 'Strong Tech Skills',
    date: '2024 - ongoing',
    subtitle: 'Technology skills',
    content: [
      'Javascript',
      'Typescript',
      'React.js',
      'React Query',
      'SQLite3',
      'Knex.js',
      'Git',
      'Github',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'NX',
    ].join(' • '),
  },
  {
    section: 'Skills',
    title: 'Progressing Tech Skills',
    date: '2024/2025 - ongoing',
    subtitle: 'Technology skills',
    content: [
      'Git',
      'Tailwind CSS',
      '.NET',
      'C#',
      'Python',
      'NX',
      'LLM Learning',
      'AWS',
    ].join(' • '),
  },
  {
    section: 'Skills',
    title: 'Soft Skills',
    date: '2025',
    subtitle: 'Soft skills',
    content: [
      'Teamwork & Collaboration',
      'Active Listening',
      'Emotional Intelligence',
      'Conflict Resolution',
      'Culture Building',
      'Customer Service',
    ].join(' • '),
  },
  {
    section: 'Interests',
    title: 'Interests',
    date: '2025',
    subtitle: 'Interests',
    content: [
      'Painting',
      'Floristry',
      'Karaoke',
      'Boardgames',
      'Health & Wellness',
      'Cooking & Baking',
      'Programming & AI',
      'The Ocean',
      'The Bush',
    ].join(' • '),
  },
  // #TODO update Nora & portfolio to projects
  {
    section: 'Projects',
    title: 'Nora AI',
    date: '2025 - ongoing',
    subtitle: 'Personal project with mentor support',
    content: 'Nora is incredible',
    details: 'Technologies Used: Python, Ollama, ',
  },
  {
    section: 'Projects',
    title: "Rebecca Lang's Portfolio",
    date: '2025 - ongoing',
    subtitle: 'Personal project',
    content:
      'Portfolio to show my skills in the fullstack and ai arena. Learn all about Rebecca Lang and the fruits of her computer',
    details:
      'Technologies Used: React, TypeScript, NX, Next.js, Github & Resend API, Tailwind CSS',
  },
  {
    section: 'Projects',
    title: 'DonateMate',
    date: 'October 2024',
    subtitle: 'Product Owner and Programmer',
    content:
      'I led the design, planning  and presentation of DonateMate. This app allowed donors to filter organisations by donation type, and provided profiles for donation centres to share and prioritise needs. I worked on Auth0, Maps API, and filtering by donation type. As well as a vertical slice through the organisation profile page to the database. As PO, I allocated tickets, refined scope and supported my team through their own tickets. I managed group time and availability, to maximise the final product.',
    details:
      'Technologies Used: React, TypeScript, Node.js, Express, Google Maps API & Knex.js/SQLite3',
  },
  {
    section: 'Projects',
    title: 'Kea Commerce',
    date: '2024 - Ongoing',
    subtitle: 'Collaborator and Programmer',
    content:
      'A  e-commerce site created and built by a 3 person group.  With a high-quality UE,  database and eventual admin portal. Using Agile, Kanban,  user stories and a learning focused approach to build a polished, functional app with industry standard checks from a experienced technical lead.',
    details:
      'Technologies Used: React, JS, TS, Tailwind CSS, Axios, .NET, C#, NX, React Query, React Query Dev Tools',
  },
  {
    section: 'Projects',
    title: 'My Karaoke Playlist',
    date: '2024',
    subtitle: 'Product Owner and Programmer',
    content:
      'This full stack personal project connects to the Spotify API and allows users to build and manage their own personal karaoke playlist. Songs are able to be filtered by decade and genre. The app also features a chatgpt integration to generate playlists based on a selection of songs.',
    details:
      'Technologies Used: React.js, Typescript, Node.js, Express & Knex.js/SQLite3, Vitest',
  },
];
