import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Blueportel',
    short_name: 'Blueportel',
    description: 'Location de mobil-home de prestige face à la mer',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2663EB',
  };
}

