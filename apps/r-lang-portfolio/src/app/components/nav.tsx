'use client';

import { usePathname } from 'next/navigation';
import type { NavLink } from '../models/nav';
import Link from 'next/link';

export default function Nav() {
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { href: '/', title: 'Home' },
    { href: '/about-me', title: 'About Me' },
    { href: '/cv', title: 'CV' },
    { href: '/projects', title: 'Projects' },
    { href: '/contact-me', title: 'Contact Me' },
  ];

  return (
    <nav className="p-4">
      <ul className="flex gap-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  isActive ? 'text-blue-500 font-bold' : 'hover:text-blue-400'
                }`}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
