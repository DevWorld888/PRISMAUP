import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    qualities: [60, 70, 75],
  },
  async redirects() {
    return [
      {
        source: '/painters-inner-west',
        destination: '/painters-inner-west-sydney',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
