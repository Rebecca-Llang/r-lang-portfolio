import './styles/global.css';
import { Manrope, Roboto_Mono, Inconsolata } from 'next/font/google';
import type { Metadata } from 'next';
import Nav from './components/nav-comp';
import Footer from './components/footer-comp';

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-manrope',
});
const robotoMono = Roboto_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-roboto-mono',
});
const inconsolata = Inconsolata({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inconsolata',
});

export const metadata: Metadata = {
  title: 'Welcome to my portfolio!',
  description: 'Software/Web Developer Portfolio',
  keywords: [
    'portfolio',
    'web development',
    'software engineer',
    'Rebecca Lang',
  ],
  authors: [{ name: 'Rebecca Lang' }],
  openGraph: {
    title: 'Rebecca Lang Portfolio',
    description: 'Software/Web Developer Portfolio',
    type: 'website',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${robotoMono.variable} ${inconsolata.variable} font-manrope`}
    >
      <body className="flex flex-col min-h-screen m-0 p-0 overflow-x-hidden">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
