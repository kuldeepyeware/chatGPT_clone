/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "iili.io"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
