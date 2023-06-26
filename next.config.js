/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "utils/image-loader.js",
  },
  basePath: "/nextjs",
  assetPrefix: "/nextjs",
};

module.exports = nextConfig;
