import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const SEARCH_AND_AI_BOTS = [
  'Googlebot',
  'Googlebot-Image',
  'SeznamBot',
  'Bingbot',
  'Applebot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'ClaudeBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: SEARCH_AND_AI_BOTS,
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
