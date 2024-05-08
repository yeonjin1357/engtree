/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    OPENAI_SECRET_KEY: process.env.OPENAI_SECRET_KEY,
  },
};

export default nextConfig;
