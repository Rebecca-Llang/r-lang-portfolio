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
};

export default withNx(nextConfig);
