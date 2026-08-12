/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // If you're using a custom domain, add:
  // basePath: '/tulum', // Replace with your repo name
  // assetPrefix: '/tulum',
}

module.exports = nextConfig