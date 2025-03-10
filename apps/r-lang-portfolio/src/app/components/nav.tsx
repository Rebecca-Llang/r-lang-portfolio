'use client';

import { usePathname } from 'next/navigation';
import { navLinks } from '../constants/navigation';
import Link from 'next/link';

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex">
      <ul className="flex justify-end gap-4 min-w-full bg-black">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li
              className="pl-6 pr-12 pt-4 pb-4 text-white justify-items-center items-stretch"
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
