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
        primary: '#A67C52', // Warm tan 5
        secondary: '#A57F56', // rich caramel 6
        third: '#4A3224', // dark chestnut 7
        accent: '#3D7068', // deep teal green 4
        background: '#FDF9F3', // soft ivory 1
        text: '#2C2A28', // charcoal brown 8
        eggshell: '#95b2a9', // muted sage green 2
        secondAccent: '#86A79D', // dusty teal 3
      },
      fontSize: {
        h1: ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }], // 30px
        h2: ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }], // 24px
        h3: ['1.25rem', { lineHeight: '1.75rem', fontWeight: '500' }], // 20px
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
