@"
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you get 404 errors, add this:
  // basePath: '/tulum',
  // assetPrefix: '/tulum',
}

module.exports = nextConfig
"@ | Out-File -FilePath next.config.js -Encoding utf8