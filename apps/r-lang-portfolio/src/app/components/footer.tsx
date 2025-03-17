'use client';

import { usePathname } from 'next/navigation';
import { navLinks } from '../constants/navigation';
import Link from 'next/link';

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="flex">
      <ul className="flex justify-center gap-4 min-w-full bg-black bg-opacity-80">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li
              className="pl-6 pr-12 pt-4 pb-4 text-white justify-items-center items-stretch"
              key={link.href}
            >
              <Link
                href={link.href}
                className={`text-eggshell ${
                  isActive ? 'font-bold' : 'hover-grow'
                }`}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
