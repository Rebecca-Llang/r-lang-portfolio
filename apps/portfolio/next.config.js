// next.config.js
import { withNx } from '@nx/next/plugins/with-nx.js';

/** @type {import('@nx/next/plugins/with-nx').WithNxOptions} */
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
  nx: { svgr: false },
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
  // CI-specific optimizations
  ...(process.env.CI && {
    // Disable telemetry in CI
    telemetry: false,
    // Optimize for CI builds
    generateBuildId: () => 'ci-build',
  }),
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

export default withNx(nextConfig);
