export const navLinks = [
  { href: '/', title: 'Home' },
  { href: '/about-me', title: 'About' },
  { href: '/cv', title: 'CV' },
  { href: '/projects', title: 'Projects' },
  { href: '/contact-me', title: 'Contact' },
] as const;

export type NavLink = (typeof navLinks)[number];
