// next.config.prod.js - Production config without Nx plugin for deployment
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  poweredByHeader: false,
  compress: true,
  turbopack: {
    root: join(__dirname, '../..'),
  },
  // Exclude NX and dev dependencies from server bundle
  serverExternalPackages: [
    '@angular-devkit/architect',
    '@angular-devkit/core',
    '@angular-devkit/core/node',
    '@angular-devkit/architect/node',
    '@angular-devkit/schematics',
    '@angular-devkit/schematics/tools',
    '@nx/devkit',
    '@nx/key',
    '@nx/powerpack-license',
    '@nx/react',
    '@swc-node/register',
    'ts-node',
    'nx',
  ],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
