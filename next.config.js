/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
      },
    };
    return config;
  },
};

module.exports = nextConfig;
