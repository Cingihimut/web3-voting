/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    INFURA_API_KEY: process.env.INFURA_API_KEY,
  },
};

module.exports = nextConfig;
