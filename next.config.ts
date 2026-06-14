import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
    qualities: [70, 75],
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
