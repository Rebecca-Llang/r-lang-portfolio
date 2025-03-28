'use client';

import { usePathname } from 'next/navigation';
import { navLinks } from '../constants/navigation';
import { contact } from '../constants/cv-info';
import Link from 'next/link';

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="flex items-center justify-between gap-4 min-w-full bg-black bg-opacity-80">
      <div className="flex items-center justify-evenly w-full px-6 py-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <ul key={link.title} className="list-none">
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-eggshell ${
                    isActive ? 'font-bold' : 'hover-grow'
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            </ul>
          );
        })}

        {contact
          .filter(
            (info) => info.title === 'Github' || info.title === 'LinkedIn'
          )
          .map((contact) => {
            const isActive = pathname === contact.link;
            return (
              <div key={contact.title} className="text-eggshell">
                <Link
                  href={contact.link}
                  target="_blank"
                  className={`text-eggshell flex items-center gap-1 ${
                    isActive ? 'font-bold ' : 'hover-grow'
                  }`}
                >
                  {contact.title}
                  {contact.icon}
                </Link>
              </div>
            );
          })}
      </div>
    </footer>
  );
};
