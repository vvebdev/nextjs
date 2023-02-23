/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    loader: 'akamai',
    path: '/',
  },
  basePath: '/vvebdev-nextjs',
  assetPrefix: '/vvebdev-nextjs',
};

module.exports = nextConfig;
