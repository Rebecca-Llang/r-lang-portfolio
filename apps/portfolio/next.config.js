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
