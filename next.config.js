/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    INFURA_API_KEY: process.env.NEXT_PUBLIC_INFURA_API_KEY,
    MNEMONIC: process.env.NEXT_PUBLIC_MNEMONIC,
    CONTRACT_VOTE: process.env.NEXT_PUBLIC_CONTRACT_VOTE,
  },
};

module.exports = nextConfig;
