'use client';

import { usePathname } from 'next/navigation';
import { navLinks } from '../constants/navigation';
import Link from 'next/link';
import { useState } from 'react';

function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-darkerBrown bg-opacity-90 min-h-16 sm:min-h-20">
      <div className="sm:hidden flex justify-end items-center p-4">
        <button
          onClick={toggleMenu}
          className="text-eggshell text-2xl focus:outline-none focus:ring-2 focus:ring-primary touch-manipulation"
          aria-label="Toggle navigation hamburger menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Desktop nav */}
      <ul className="hidden sm:flex justify-end items-center text-base md:text-lg gap-2 md:gap-4 min-w-full min-h-16 md:min-h-20 px-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li className="px-3 md:px-6 py-3 md:py-4" key={link.href}>
              <Link
                href={link.href}
                data-testid={link.href}
                className={`text-eggshell transition-transform duration-200 transform touch-manipulation ${
                  isActive ? 'font-bold' : 'hover-grow-large'
                }`}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile nav */}
      {isMenuOpen && (
        <ul className="sm:hidden flex flex-col items-end text-lg bg-black bg-opacity-90 px-4 py-2 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href} className="w-full">
                <Link
                  href={link.href}
                  data-testid={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-eggshell text-sm py-3 px-4 text-right transition-transform duration-200 transform touch-manipulation ${
                    isActive
                      ? 'font-bold bg-primary bg-opacity-20'
                      : 'hover-grow-large'
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

export default Nav;
