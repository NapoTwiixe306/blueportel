import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/fr/pages/vue-densemble',
        destination: '/fr/location-mobil-home-le-portel',
        permanent: true,
      },
      {
        source: '/en/pages/overview',
        destination: '/en/mobile-home-rental-le-portel',
        permanent: true,
      },
      {
        source: '/pages/vue-densemble',
        destination: '/fr/location-mobil-home-le-portel',
        permanent: true,
      },
      {
        source: '/pages/overview',
        destination: '/en/mobile-home-rental-le-portel',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
