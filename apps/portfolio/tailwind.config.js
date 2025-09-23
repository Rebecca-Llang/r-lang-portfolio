import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx,mdx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx,mdx}'),
    join(__dirname, 'app/**/*.{js,ts,jsx,tsx,mdx}'),
    join(__dirname, 'src/**/*.{js,ts,jsx,tsx,mdx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        // numbers represent lightest (1) to darkest (8)
        primary: '#A67C52', // Medium brown - main brand color
        secondary: '#A57F56', // Light brown - secondary actions
        third: '#4A3224', // Dark brown - text/accents
        darkBrown: '#6B4E3D', // Darker brown
        accent: '#3D7068', // Dark teal - highlights
        background: '#FDF9F3', // Cream - page background
        textGray: '#2C2A28', // Dark gray - main text
        eggshell: '#95b2a9', // Sage green - subtle backgrounds
        secondAccent: '#86A79D', // Gray-green - secondary highlights
        darkerBrown: '#2E1E14', // Darkest rich warm brown
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', 'sans-serif'],
        'roboto-mono': ['var(--font-roboto-mono)', 'monospace'],
        inconsolata: ['var(--font-inconsolata)', 'monospace'],
      },
      fontSize: {
        h1: ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }], // 30px
        h2: ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }], // 24px
        h3: ['1.25rem', { lineHeight: '1.75rem', fontWeight: '500' }], // 20px
        xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
        sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        base: ['1rem', { lineHeight: '1.5rem' }], // 16px
        lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
        '5xl': ['3rem', { lineHeight: '1' }], // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }], // 60px
        '7xl': ['4.5rem', { lineHeight: '1' }], // 72px
      },
      borderRadius: {
        lg: '1.5rem',
      },
      boxShadow: {
        custom:
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
