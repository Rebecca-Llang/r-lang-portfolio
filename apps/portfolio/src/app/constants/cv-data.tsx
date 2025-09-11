import {
  Education,
  Experience,
  SkillCategory,
  Interest,
  Contact,
  CVSection,
} from '../models/cv';
import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaLink,
  FaUsers,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const aboutMeContent = `Kia ora! I'm Rebecca, a full-stack software engineer passionate about people and user-focused solutions. I graduated from Dev Academy, gaining hands-on experience across the full stack with modern technologies, Agile practices, and collaborative development. Since then, I've built projects including an e-commerce site, my personal portfolio and AI chatbots, sharpening my skills in frontend and backend development, CI/CD pipelines, and testing.
Warm, curious and enthusiastic, I thrive in collaborative teams and knowledge sharing environments, while also enjoying independent problem-solving. With a background in customer service and management, I bring strong interpersonal skills, adaptability, and a commitment to continuous learning. I'm driven to create software that is accessible, inclusive, and genuinely useful.`;

export const education: Education[] = [
  {
    title: 'Certificate in Applied Software Development - Level 6',
    institution: 'Dev Academy, NZ',
    date: '2024',
    description: 'Full Stack Software Development Bootcamp',
  },
  {
    title: 'Diploma in Digital Photography',
    institution: 'Aoraki Polytechnic / Ara Institute of Technology, NZ',
    date: '2012',
    description: 'Digital Photography and Editing',
  },
];

export const experience: Experience[] = [
  {
    title: 'Software Development at Dev Academy, NZ',
    company: 'Immersive 17-week full stack development bootcamp',
    dateRange: '2024',
    description:
      'Developed a range of technical and project management skills through hands-on coding and collaboration. Engaged in solo programming, pair programming, and group projects (3-7 members), using Agile methodologies to plan and build applications. Led group projects as Product Owner, improving team coordination and fostering effective communication. Gained experience in JavaScript, TypeScript, HTML, CSS, React.js, Node.js, RESTful APIs, Vitest, Superagent, Express, Knex.js & SQLite3, Git, Github and npm. Emphasised soft skills such as active listening, empathy, and courageous conversations to navigate team dynamics and project challenges.',
  },
  {
    title: 'Manager',
    company: 'Limerence Studio, NZ',
    dateRange: '2019 - 2023',
    description:
      'Managed daily operations and communications. Customer service and liaising with clients and staff to provide the best experience and manage expectations. Supporting staff with social media marketing and communication. Oversaw administrative tasks and book management. Facilitated effective collaboration through weekly management meetings and monthly collective meetings.',
  },
  {
    title: 'Mixologist',
    company: 'Dirty Little Secret Bar, NZ',
    dateRange: '2019',
    description:
      'Created and served cocktails to customers in a fast paced environment. Provided customer service, decorating and maintaining a clean and safe environment. Collaborated with the team to ensure a positive and engaging atmosphere.',
  },
  {
    title: 'Roaming Manager',
    company: 'Public Outreach Fundraising, Australia',
    dateRange: '2017-2018',
    description:
      'Led teams of 5-10 in professional fundraising for Australian Conservation Foundation and Medicine Sans Frontières. Trained and developed staff, fostering a strong team culture across various locations in Australia. Engaging with the public, building rapport and inspiring on-going donations.',
  },
];

export const skills: SkillCategory[] = [
  {
    title: 'Strong Tech Skills',
    skills: [
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
    ],
  },
  {
    title: 'Progressing Tech Skills',
    skills: [
      'Git',
      'Tailwind CSS',
      '.NET',
      'C#',
      'Python',
      'NX',
      'LLM Learning',
      'AWS',
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      'Teamwork & Collaboration',
      'Active Listening',
      'Emotional Intelligence',
      'Conflict Resolution',
      'Culture Building',
      'Customer Service',
    ],
  },
];

export const interests: Interest[] = [
  { name: 'Painting' },
  { name: 'Floristry' },
  { name: 'Karaoke' },
  { name: 'Boardgames' },
  { name: 'Health' },
  { name: 'Wellness' },
  { name: 'Cooking' },
  { name: 'Programming' },
  { name: 'AI' },
  { name: 'The Moana' },
  { name: 'The Bush' },
];

export const contact: Contact[] = [
  {
    title: 'Phone',
    details: 'available upon request',
    icon: FaPhoneAlt,
    link: '/contact-me',
  },
  {
    title: 'Email',
    details: 'rebeccalang50@gmail.com',
    icon: MdEmail,
    linkIcon: FaLink,
    link: '/contact-me',
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/rebecca-lang-nz/',
    icon: FaLinkedin,
    linkIcon: FaLink,
    details: 'linkedin.com/in/rebecca-lang-nz',
  },
  {
    title: 'Github',
    link: 'https://github.com/Rebecca-Llang',
    icon: FaGithub,
    linkIcon: FaLink,
    details: 'github.com/Rebecca-Llang',
  },
  {
    title: 'References',
    link: '/contact-me',
    icon: FaUsers,
    details: 'available upon request',
  },
];

export const cvSections = Object.values(CVSection);
