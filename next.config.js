/** @type {import('next').NextConfig} */
const path = require('path')
console.log(path)
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions:{
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
