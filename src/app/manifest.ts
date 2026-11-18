import type { MetadataRoute } from 'next';
import { SITE_NAME } from '@/lib/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} | Střešní pláště, fasády a hydroizolace`,
    short_name: SITE_NAME,
    description:
      'Realizace plochých a fóliových střech, trapézových plechů, sendvičových fasádních panelů a speciálních hydroizolací v ČR a SR.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b0f15',
    theme_color: '#0b0f15',
    lang: 'cs',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}

