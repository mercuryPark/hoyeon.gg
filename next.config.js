/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        RIOT_API_URL: process.env.RIOT_API_URL,
        RIOT_API_KEY: process.env.RIOT_API_KEY,
    },

    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;
