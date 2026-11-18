import type { MetadataRoute } from 'next';
import { servicesData } from '@/data/servicesData';
import { referencesData, getReferenceImages } from '@/data/referencesData';
import { companyData } from '@/data/companyData';
import { CONTENT_UPDATED_AT, SITE_URL, SK_SITE_URL } from '@/lib/seo';

function toAbsoluteImages(paths: string[]): string[] {
  return Array.from(new Set(paths)).map((path) => `${SITE_URL}${path}`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_UPDATED_AT);

  const homeImages = toAbsoluteImages([
    '/images/logos/cropped-novadach_logo_rgb-wback-1-removebg-preview.png',
    '/images/referencie/Eurovea-1.jpg',
    '/images/referencie/Eurovea-2.jpg',
    '/images/referencie/blanka_razba12-1.jpg',
    '/images/referencie/VW-H1_1.jpg',
    '/images/referencie/Valaliky_2023_10_9.jpg',
    ...servicesData.map((s) => s.image),
    ...referencesData.slice(0, 6).map((r) => r.image),
    ...companyData.certificates.map((c) => c.image),
  ]);

  const servicePages: MetadataRoute.Sitemap = servicesData.map((service) => {
    const relatedImages = referencesData
      .filter((r) => service.referenceIds.includes(r.id))
      .map((r) => r.image);

    return {
      url: `${SITE_URL}/sluzby/${service.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          'cs-CZ': `${SITE_URL}/sluzby/${service.slug}`,
          'sk-SK': `${SK_SITE_URL}/nase-sluzby/${service.slug}/`,
        },
      },
      images: toAbsoluteImages([service.image, ...relatedImages]),
    };
  });

  const referencePages: MetadataRoute.Sitemap = referencesData.map((project) => ({
    url: `${SITE_URL}/referencie/${project.id}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: project.country === 'CZ' || project.featured ? 0.85 : 0.75,
    images: toAbsoluteImages(getReferenceImages(project)),
  }));

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'cs-CZ': SITE_URL,
          'sk-SK': `${SK_SITE_URL}/`,
        },
      },
      images: homeImages,
    },
    {
      url: `${SITE_URL}/sluzby`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          'cs-CZ': `${SITE_URL}/sluzby`,
          'sk-SK': `${SK_SITE_URL}/nase-sluzby/`,
        },
      },
      images: toAbsoluteImages(servicesData.map((s) => s.image)),
    },
    ...servicePages,
    {
      url: `${SITE_URL}/referencie`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          'cs-CZ': `${SITE_URL}/referencie`,
          'sk-SK': `${SK_SITE_URL}/referencie/`,
        },
      },
      images: toAbsoluteImages(referencesData.map((r) => r.image)),
    },
    ...referencePages,
    {
      url: `${SITE_URL}/o-nas`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: {
        languages: {
          'cs-CZ': `${SITE_URL}/o-nas`,
          'sk-SK': `${SK_SITE_URL}/o-nas-profil-spolocnosti/`,
        },
      },
      images: toAbsoluteImages(['/images/referencie/BTC-Pradiaren-Bratislava-2019-2021.jpg']),
    },
    {
      url: `${SITE_URL}/certifikacie`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'cs-CZ': `${SITE_URL}/certifikacie`,
          'sk-SK': `${SK_SITE_URL}/organizacna-struktura/`,
        },
      },
      images: toAbsoluteImages(companyData.certificates.map((c) => c.image)),
    },
    {
      url: `${SITE_URL}/kontakt`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'cs-CZ': `${SITE_URL}/kontakt`,
          'sk-SK': `${SK_SITE_URL}/kontakt/`,
        },
      },
    },
  ];
}
