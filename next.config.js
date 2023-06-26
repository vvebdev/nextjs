/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "utils/image-loader.ts",
  },
  basePath: "/nextjs",
  assetPrefix: "/nextjs",
};

module.exports = nextConfig;
