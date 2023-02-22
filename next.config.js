/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  basePath: '/vvebdev-nextjs',
  assetPrefix: '/vvebdev-nextjs',
};

module.exports = nextConfig;
