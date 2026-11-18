import type { Metadata } from 'next';

export const SITE_URL = 'https://www.novadach.cz';
export const SK_SITE_URL = 'https://www.novadach.sk';
export const SITE_NAME = 'NOVADACH CZ';
export const LEGAL_NAME = 'NOVADACH CZ s.r.o.';
export const CONTENT_UPDATED_AT = '2026-11-18T00:00:00.000Z';

export const DEFAULT_OG_IMAGE_PATH = '/images/referencie/VW-H1_1.jpg';
export const DEFAULT_OG_IMAGE_ALT =
  'NOVADACH CZ – Realizace plochých střech, sendvičových fasád a speciálních hydroizolací';

export const IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  '/images/referencie/20240722_073656-scaled.jpg': { width: 2560, height: 1920 },
  '/images/referencie/AS-NIVY-_2.jpg': { width: 1200, height: 1600 },
  '/images/referencie/AS-NIVY_3.jpg': { width: 1600, height: 1200 },
  '/images/referencie/BCT-PRADIAREN_1.jpg': { width: 1600, height: 1200 },
  '/images/referencie/BERGAMON-SO206-2.jpg': { width: 4160, height: 3120 },
  '/images/referencie/BTC-Pradiaren-Bratislava-2019-2021.jpg': { width: 1600, height: 1200 },
  '/images/referencie/Eurovea-1.jpg': { width: 908, height: 2016 },
  '/images/referencie/Eurovea-2.jpg': { width: 1280, height: 1280 },
  '/images/referencie/Eurovea-3.jpg': { width: 1280, height: 1280 },
  '/images/referencie/IKEA-MALACKY-r.2016.jpg': { width: 6068, height: 2332 },
  '/images/referencie/PHOTO-2024-03-04-10-35-09.jpg': { width: 1600, height: 1200 },
  '/images/referencie/RD-MARIANKA-2.jpg': { width: 2448, height: 1632 },
  '/images/referencie/THE-MILL_1.jpg': { width: 1030, height: 579 },
  '/images/referencie/THE-MILL_2.jpg': { width: 1030, height: 579 },
  '/images/referencie/UNIPHARMA-Bojnice-2.jpg': { width: 2560, height: 1244 },
  '/images/referencie/UNIPHARMA-Bojnice-2015-2016.jpg': { width: 4032, height: 1960 },
  '/images/referencie/VW-H1_1.jpg': { width: 4032, height: 3024 },
  '/images/referencie/VW-H1_2.jpg': { width: 4032, height: 3024 },
  '/images/referencie/VW-H1_3.jpg': { width: 4032, height: 3024 },
  '/images/referencie/Valaliky_2023_10_9.jpg': { width: 640, height: 480 },
  '/images/referencie/blanka_razba12-1.jpg': { width: 1000, height: 665 },
  '/images/certifikaty/ISO-9001.png': { width: 2480, height: 3508 },
  '/images/certifikaty/ISO14001.png': { width: 2480, height: 3508 },
  '/images/certifikaty/ISO45001.png': { width: 2480, height: 3508 },
  '/images/logos/cropped-novadach_logo_rgb-wback-1-removebg-preview.png': { width: 537, height: 191 },
};

export interface PageMetadataInput {
  /** Page title without suffix (uses layout template), or `{ absolute }` for full control. */
  title: string | { absolute: string };
  description: string;
  /** Path starting with `/` (use `''` for root `/`). */
  path: string;
  /** Matching URL on novadach.sk when an exact 1:1 counterpart exists. */
  skUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: 'website' | 'article';
  imagePath?: string;
  imageAlt?: string;
  keywords?: string[];
}

export function getCanonicalUrl(path: string): string {
  if (!path || path === '/') {
    return SITE_URL;
  }
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  skUrl,
  ogTitle,
  ogDescription,
  ogType = 'website',
  imagePath = DEFAULT_OG_IMAGE_PATH,
  imageAlt = DEFAULT_OG_IMAGE_ALT,
  keywords,
}: PageMetadataInput): Metadata {
  const canonical = getCanonicalUrl(path);
  const resolvedTitle = typeof title === 'string' ? `${title} | ${SITE_NAME}` : title.absolute;
  const socialTitle = ogTitle ?? resolvedTitle;
  const socialDesc = ogDescription ?? description;
  const dims = IMAGE_DIMENSIONS[imagePath];

  const languages: Record<string, string> = {
    'cs-CZ': canonical,
  };
  if (skUrl) {
    languages['sk-SK'] = skUrl;
  }

  return {
    title,
    description,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    alternates: {
      canonical,
      languages,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: socialTitle,
      description: socialDesc,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'cs_CZ',
      type: ogType,
      images: [
        {
          url: imagePath,
          ...(dims ? { width: dims.width, height: dims.height } : {}),
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description: socialDesc,
      images: [
        {
          url: imagePath,
          alt: imageAlt,
        },
      ],
    },
  };
}
