/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images:{
    domains:["cdn.sanity.io"] //add any external domains when using images from there websites
  }
};

module.exports = nextConfig;
