'use client';

import { usePathname } from 'next/navigation';
import { navLinks } from '../constants/navigation';
import Link from 'next/link';

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex">
      <ul className="flex justify-end items-center gap-4 min-w-full min-h-20 bg-black bg-opacity-80">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li
              className="pl-6 pr-12 pt-4 pb-4 justify-items-center items-stretch"
              key={link.href}
            >
              <Link
                href={link.href}
                data-testid={link.href}
                className={`text-eggshell  ${
                  isActive ? 'font-bold' : 'hover-grow'
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
