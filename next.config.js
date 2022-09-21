/** @type {import('next').NextConfig} */
const path = require('path')
// console.log(path)
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  sassOptions:{
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
