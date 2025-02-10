import './styles/global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Nav from './components/nav';
import { Footer } from './components/footer';

// Initialize the Inter font
const inter = Inter({ subsets: ['latin'] });

// Type-safe metadata
export const metadata: Metadata = {
  title: 'Welcome to r-lang-portfolio',
  description: 'Generated by create-nx-workspace',
  // You can add more metadata properties:
  keywords: ['portfolio', 'web development', 'Rebecca Lang'],
  authors: [{ name: 'Rebecca Lang' }],
  // Add OpenGraph metadata for better social sharing
  openGraph: {
    title: 'Rebecca Lang Portfolio',
    description: 'Your professional portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
