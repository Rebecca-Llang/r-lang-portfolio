'use client';

import { usePathname } from 'next/navigation';
import type { NavLink } from '../models/nav';
import Link from 'next/link';

export default function Nav() {
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { href: '/', title: 'HOME' },
    { href: '/about-me', title: 'ABOUT ME' },
    { href: '/cv', title: 'CV' },
    { href: '/projects', title: 'PROJECTS' },
    { href: '/contact-me', title: 'CONTACT ME' },
  ];

  return (
    <nav className="p-4 flex">
      <ul className="flex gap-4 max-w-full bg-black">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li
              className="pl-6 pr-6 pt-4 pb-4 text-white justify-items-center items-stretch"
              key={link.href}
            >
              <Link
                href={link.href}
                className={`${isActive ? 'font-bold' : 'hover:text-blue-400'}`}
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
