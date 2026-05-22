import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
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
