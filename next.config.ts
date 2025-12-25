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
        destination: '/location-mobil-home-vue-mer-le-portel',
        permanent: true,
      },
      {
        source: '/en/pages/overview',
        destination: '/mobile-home-sea-view-le-portel',
        permanent: true,
      },
      {
        source: '/pages/vue-densemble',
        destination: '/location-mobil-home-vue-mer-le-portel',
        permanent: true,
      },
      {
        source: '/pages/overview',
        destination: '/mobile-home-sea-view-le-portel',
        permanent: true,
      },
      {
        source: '/fr/location-mobil-home-le-portel',
        destination: '/location-mobil-home-vue-mer-le-portel',
        permanent: true,
      },
      {
        source: '/en/mobile-home-rental-le-portel',
        destination: '/mobile-home-sea-view-le-portel',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
