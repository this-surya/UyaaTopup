/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.56.1'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.steamgriddb.com',
      },
    ],
  },
};

export default nextConfig;
