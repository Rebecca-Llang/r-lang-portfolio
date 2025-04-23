// next.config.cjs

const { composePlugins, withNx } = require('@nx/next/plugins/with-nx');

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

module.exports = composePlugins(...plugins)(nextConfig);
