/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.nba.com','ak-static.cms.nba.com'],
  },
}

module.exports = nextConfig
