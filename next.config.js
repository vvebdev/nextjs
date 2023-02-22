/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   loader: 'imgix',
  //   path: '',
  // },
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/vvebdev-nextjs',
  // basePath: '/nextjs-pages',
  // assetPrefix: '/nextjs-pages',
};

module.exports = nextConfig;
