// next.config.cjs

const { withNx } = require('@nx/next/plugins/with-nx');

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

module.exports = withNx(nextConfig);
