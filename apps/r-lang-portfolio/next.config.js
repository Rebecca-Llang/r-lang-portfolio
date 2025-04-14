// next.config.js
//@ts-check

import { composePlugins, withNx } from '@nx/next';

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  nx: {
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins if needed
  withNx,
];

export default composePlugins(...plugins)(nextConfig);
