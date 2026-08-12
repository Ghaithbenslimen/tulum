/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/tulum',
  assetPrefix: '/tulum',
}

module.exports = nextConfig
