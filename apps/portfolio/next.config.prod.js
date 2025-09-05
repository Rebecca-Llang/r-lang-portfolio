// next.config.prod.js - Production config without Nx plugin for deployment
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
  // Security configurations
  poweredByHeader: false, // Remove X-Powered-By header
  compress: true, // Enable compression
  // Build optimization for caching
  experimental: {
    // Enable SWC minification for better performance
    swcMinify: true,
  },
  // Optimize build output
  output: 'standalone',
  // Headers configuration (additional to middleware)
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
