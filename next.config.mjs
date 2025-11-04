/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: []
  },
  basePath: '/khadka-tours-and-travels',
  reactStrictMode: true,
  swcMinify: true
}

export default nextConfig;