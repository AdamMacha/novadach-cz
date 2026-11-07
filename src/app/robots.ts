import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'SeznamBot',
        allow: '/',
      },
    ],
    sitemap: 'https://www.novadach.cz/sitemap.xml',
    host: 'https://www.novadach.cz',
  };
}

