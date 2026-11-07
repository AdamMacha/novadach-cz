import type { MetadataRoute } from 'next';
import { referencesData } from '@/data/referencesData';

const BASE_URL = 'https://www.novadach.cz';
const SK_BASE_URL = 'https://www.novadach.sk';

export default function sitemap(): MetadataRoute.Sitemap {
  const referenceImages = referencesData.map((r) => `${BASE_URL}${r.image}`);

  return [
    {
      url: BASE_URL,
      lastModified: new Date('2026-11-07'),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'cs-CZ': BASE_URL,
          'sk-SK': SK_BASE_URL,
        },
      },
      images: [
        `${BASE_URL}/images/logos/cropped-novadach_logo_rgb-wback-1-removebg-preview.png`,
        ...referenceImages.slice(0, 6),
      ],
    },
    {
      url: `${BASE_URL}/sluzby`,
      lastModified: new Date('2026-11-07'),
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          'cs-CZ': `${BASE_URL}/sluzby`,
          'sk-SK': `${SK_BASE_URL}/nase-sluzby/`,
        },
      },
    },
    {
      url: `${BASE_URL}/referencie`,
      lastModified: new Date('2026-11-07'),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          'cs-CZ': `${BASE_URL}/referencie`,
          'sk-SK': `${SK_BASE_URL}/referencie/`,
        },
      },
      images: referenceImages,
    },
    {
      url: `${BASE_URL}/o-nas`,
      lastModified: new Date('2026-11-07'),
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: {
        languages: {
          'cs-CZ': `${BASE_URL}/o-nas`,
          'sk-SK': `${SK_BASE_URL}/o-nas-profil-spolocnosti/`,
        },
      },
    },
    {
      url: `${BASE_URL}/certifikacie`,
      lastModified: new Date('2026-11-07'),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'cs-CZ': `${BASE_URL}/certifikacie`,
          'sk-SK': `${SK_BASE_URL}/organizacna-struktura/`,
        },
      },
      images: [
        `${BASE_URL}/images/certifikaty/ISO-9001.png`,
        `${BASE_URL}/images/certifikaty/ISO14001.png`,
        `${BASE_URL}/images/certifikaty/ISO45001.png`,
      ],
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: new Date('2026-11-07'),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'cs-CZ': `${BASE_URL}/kontakt`,
          'sk-SK': `${SK_BASE_URL}/kontakt/`,
        },
      },
    },
  ];
}

