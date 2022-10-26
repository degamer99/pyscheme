/** @type {import('next').NextConfig} */
const path = require('path')
// console.log(path)
const nextConfig = {
  webpack: (config) => {
    // this will override the experiments
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true }};
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true 
    return config;
  },
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
  env: {
    public_key: 'pk_live_c926828801a6cb535e957643daf02b9fd5bfb8e9',
    test_key: 'pk_test_53a3cc9fe7a3f310c0450dea00881d21796739cf',
  },
}

module.exports = nextConfig
