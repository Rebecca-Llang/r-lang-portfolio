'use client';

import { usePathname } from 'next/navigation';
import { navLinks } from '../constants/navigation';
import { contact } from '../constants/cv-data';
import Link from 'next/link';
import Icon from './icon-comp';

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer aria-label="Footer navigation" className="min-w-full bg-darkBrown">
      <div className="flex flex-col sm:flex-row items-center justify-evenly w-full px-4 sm:px-4 py-4 sm:py-4 gap-4 sm:gap-1">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <ul key={link.title} className="list-none">
                <li>
                  <Link
                    href={link.href}
                    className={`text-eggshell text-sm sm:text-base touch-manipulation ${
                      isActive ? 'font-bold' : 'hover-grow'
                    }`}
                  >
                    <span className="sm:hidden">
                      {link.title === 'About Me'
                        ? 'About'
                        : link.title === 'Contact Me'
                        ? 'Contact'
                        : link.title}
                    </span>

                    <span className="hidden sm:inline">{link.title}</span>
                  </Link>
                </li>
              </ul>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="flex justify-center sm:justify-end gap-4 sm:gap-6">
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
                    className={`text-eggshell flex items-center gap-1 text-sm sm:text-base touch-manipulation ${
                      isActive ? 'font-bold ' : 'hover-grow'
                    }`}
                  >
                    <span className="hidden sm:inline">{contact.title}</span>
                    {contact.icon && (
                      <Icon
                        icon={
                          <contact.icon
                            size={16}
                            className="text-white sm:w-5 sm:h-5"
                          />
                        }
                      />
                    )}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
