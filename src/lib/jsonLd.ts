import type { SeoFaqItem, ServiceItem } from '@/data/servicesData';
import type { ReferenceProject } from '@/data/referencesData';
import { getReferenceImages } from '@/data/referencesData';
import { SITE_URL, SK_SITE_URL, SITE_NAME, LEGAL_NAME, getCanonicalUrl } from '@/lib/seo';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}

export function buildFaqJsonLd(items: SeoFaqItem[], canonicalPath: string) {
  const url = getCanonicalUrl(canonicalPath);
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildServiceJsonLd(service: ServiceItem) {
  const url = getCanonicalUrl(`/sluzby/${service.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.title,
    serviceType: service.badge,
    description: service.longDesc,
    url,
    image: `${SITE_URL}${service.image}`,
    provider: { '@id': ORG_ID },
    areaServed: [
      { '@type': 'Country', name: 'Česká republika' },
      { '@type': 'Country', name: 'Slovensko' },
    ],
    keywords: service.seoKeywords.join(', '),
    isRelatedTo: service.materials,
  };
}

export function buildReferenceJsonLd(project: ReferenceProject) {
  const url = getCanonicalUrl(`/referencie/${project.id}`);
  const images = getReferenceImages(project).map((img) => `${SITE_URL}${img}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${url}#project`,
    name: project.title,
    headline: `${project.title} – ${project.subtitle}`,
    description: project.description,
    url,
    image: images,
    inLanguage: 'cs-CZ',
    creator: { '@id': ORG_ID },
    locationCreated: {
      '@type': 'Place',
      name: project.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: project.location,
        addressCountry: project.country,
      },
    },
    about: project.category,
    keywords: [
      project.category,
      ...project.services,
      ...(project.details?.technologies ?? []),
    ].join(', '),
    isPartOf: { '@id': WEBSITE_ID },
  };
}

export function buildReferencesCollectionJsonLd(projects: ReferenceProject[]) {
  const url = getCanonicalUrl('/referencie');
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#webpage`,
    url,
    name: 'Portfolio referenčních staveb NOVADACH v ČR a SR',
    inLanguage: 'cs-CZ',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: projects.length,
      itemListElement: projects.map((project, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: getCanonicalUrl(`/referencie/${project.id}`),
        name: project.title,
      })),
    },
  };
}

export function buildServicesCollectionJsonLd(services: ServiceItem[]) {
  const url = getCanonicalUrl('/sluzby');
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#webpage`,
    url,
    name: 'Technologický katalog služeb NOVADACH CZ',
    inLanguage: 'cs-CZ',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: services.length,
      itemListElement: services.map((service, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: getCanonicalUrl(`/sluzby/${service.slug}`),
        name: service.title,
      })),
    },
  };
}

export function buildAboutPageJsonLd() {
  const url = getCanonicalUrl('/o-nas');
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${url}#webpage`,
    url,
    name: `O společnosti a odborný tým | ${SITE_NAME}`,
    inLanguage: 'cs-CZ',
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': ORG_ID },
  };
}

export function buildContactPageJsonLd() {
  const url = getCanonicalUrl('/kontakt');
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${url}#webpage`,
    url,
    name: `Kontakt a poptávka realizace | ${SITE_NAME}`,
    inLanguage: 'cs-CZ',
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': ORG_ID },
  };
}

export function buildCertificatesPageJsonLd() {
  const url = getCanonicalUrl('/certifikacie');
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: `Certifikace ISO 9001, 14001 a 45001 | ${SITE_NAME}`,
    inLanguage: 'cs-CZ',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'ISO 9001:2015 – Systém managementu kvality',
          image: `${SITE_URL}/images/certifikaty/ISO-9001.png`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'ISO 14001:2015 – Environmentální management',
          image: `${SITE_URL}/images/certifikaty/ISO14001.png`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'ISO 45001:2018 – Bezpečnost a ochrana zdraví při práci (BOZP)',
          image: `${SITE_URL}/images/certifikaty/ISO45001.png`,
        },
      ],
    },
  };
}

export function buildGlobalOrganizationGraph(services: ServiceItem[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'RoofingContractor', 'GeneralContractor', 'LocalBusiness'],
        '@id': ORG_ID,
        name: LEGAL_NAME,
        alternateName: ['NOVADACH', SITE_NAME, 'NOVADACH Česká republika', 'NOVADACH s.r.o.'],
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/logos/cropped-novadach_logo_rgb-wback-1-removebg-preview.png`,
          width: 537,
          height: 191,
        },
        image: `${SITE_URL}/images/referencie/VW-H1_1.jpg`,
        description:
          'Specialista na ploché střechy, fóliové střechy (PVC, mPVC, TPO, Fatrafol), asfaltové pásy (SBS, APP), montáž trapézových plechů, zateplení střech (PIR, minerální vata MW, EPS, XPS), fasádní sendvičové panely (Kingspan), hydroizolace proti tlakové vodě a radonu (Dualproof, HDPE), tunelové izolace primárního ostění, ocelové výměny a klempířské prvky v ČR a SR.',
        foundingDate: '1993',
        taxID: 'CZ24531448',
        vatID: 'CZ24531448',
        iso6523Code: '0195:24531448',
        telephone: '+420730827769',
        email: 'obchod@novadach.cz',
        priceRange: '$$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Naskové 1189/1u, Košíře',
          addressLocality: 'Praha 5',
          postalCode: '150 00',
          addressCountry: 'CZ',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 50.0653,
          longitude: 14.3644,
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+420730827769',
            email: 'obchod@novadach.cz',
            contactType: 'sales',
            areaServed: 'CZ',
            availableLanguage: ['cs', 'sk'],
          },
        ],
        areaServed: [
          { '@type': 'Country', name: 'Česká republika' },
          { '@type': 'Country', name: 'Slovensko' },
          { '@type': 'City', name: 'Praha' },
          { '@type': 'City', name: 'Brno' },
          { '@type': 'City', name: 'Ostrava' },
        ],
        memberOf: {
          '@type': 'Organization',
          name: 'Cech strechárov Slovenska',
        },
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'certificate',
            name: 'ISO 9001:2015 – Systém managementu kvality',
            url: `${SITE_URL}/certifikacie`,
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'certificate',
            name: 'ISO 14001:2015 – Environmentální management',
            url: `${SITE_URL}/certifikacie`,
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'certificate',
            name: 'ISO 45001:2018 – Bezpečnost a ochrana zdraví při práci (BOZP)',
            url: `${SITE_URL}/certifikacie`,
          },
        ],
        parentOrganization: {
          '@type': 'Organization',
          name: 'NOVADACH s.r.o.',
          url: SK_SITE_URL,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Stará Vajnorská 27',
            addressLocality: 'Bratislava',
            postalCode: '831 04',
            addressCountry: 'SK',
          },
        },
        sameAs: [
          SK_SITE_URL,
          'https://www.facebook.com/p/Novadach-100080189244725/',
          'https://www.instagram.com/novadach.sk/',
        ],
        knowsAbout: [
          'Ploché střechy',
          'Fóliové střechy',
          'Montáž střešních plášťů',
          'Fóliová izolace PVC, mPVC, TPO, Fatrafol',
          'Asfaltové pásy SBS a APP, samolepicí asfaltový pás',
          'Parotěs a parozábrana',
          'Tepelné izolace a zateplení střech (PIR, minerální vata, minerální vlna MW, kamenná vata, polystyren EPS, XPS)',
          'Trapézové plechy a montáž trapézových plechů',
          'Zelené střechy a izolace balkonů',
          'Izolace průmyslových objektů',
          'Obvodový plášť a opláštění budov',
          'Sendvičové panely, stěnové panely, střešní panely, fasádní panely Kingspan',
          'Montáž panelů',
          'Hydroizolace spodní stavby a izolace základů',
          'Izolace proti tlakové vodě a izolace proti radonu',
          'Systém Dualproof a fólie HDPE / PE-HD',
          'Tunelové izolace a izolace primárního ostění tunelů',
          'Ocelové konstrukce, montáž ocelových výměn a tenkostěnné výměny',
          'Klempířské prvky a klempířská výroba',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Katalog střešních, fasádních a izolačních prací NOVADACH CZ',
          itemListElement: services.map((srv, idx) => ({
            '@type': 'Offer',
            position: idx + 1,
            itemOffered: {
              '@type': 'Service',
              '@id': `${SITE_URL}/sluzby/${srv.slug}#service`,
              name: srv.title,
              description: srv.longDesc,
              url: `${SITE_URL}/sluzby/${srv.slug}`,
              provider: { '@id': ORG_ID },
              areaServed: 'CZ',
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        alternateName: ['NOVADACH Česká republika', LEGAL_NAME],
        inLanguage: 'cs-CZ',
        publisher: { '@id': ORG_ID },
      },
    ],
  };
}

