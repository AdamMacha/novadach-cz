import React from 'react';
import { servicesData, seoFaqData } from '@/data/servicesData';

export default function SeoJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'RoofingContractor', 'GeneralContractor', 'LocalBusiness'],
        '@id': 'https://www.novadach.cz/#organization',
        name: 'NOVADACH CZ s.r.o.',
        alternateName: ['NOVADACH', 'NOVADACH Česká republika', 'NOVADACH s.r.o.'],
        url: 'https://www.novadach.cz',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.novadach.cz/images/logos/cropped-novadach_logo_rgb-wback-1-removebg-preview.png',
          width: 537,
          height: 191,
        },
        image: 'https://www.novadach.cz/images/referencie/VW-H1_1.jpg',
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
        areaServed: [
          {
            '@type': 'Country',
            name: 'Česká republika',
          },
          {
            '@type': 'Country',
            name: 'Slovensko',
          },
          {
            '@type': 'City',
            name: 'Praha',
          },
          {
            '@type': 'City',
            name: 'Brno',
          },
          {
            '@type': 'City',
            name: 'Ostrava',
          },
        ],
        parentOrganization: {
          '@type': 'Organization',
          name: 'NOVADACH s.r.o.',
          url: 'https://www.novadach.sk',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Stará Vajnorská 27',
            addressLocality: 'Bratislava',
            postalCode: '831 04',
            addressCountry: 'SK',
          },
        },
        sameAs: [
          'https://www.novadach.sk',
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
          itemListElement: servicesData.map((srv, idx) => ({
            '@type': 'Offer',
            position: idx + 1,
            itemOffered: {
              '@type': 'Service',
              '@id': `https://www.novadach.cz/sluzby#${srv.id}`,
              name: srv.title,
              description: srv.longDesc,
              url: `https://www.novadach.cz/sluzby#${srv.id}`,
              provider: {
                '@id': 'https://www.novadach.cz/#organization',
              },
              areaServed: 'CZ',
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.novadach.cz/#website',
        url: 'https://www.novadach.cz',
        name: 'NOVADACH CZ | Střešní pláště, ploché střechy, fasádní panely a hydroizolace',
        inLanguage: 'cs-CZ',
        publisher: {
          '@id': 'https://www.novadach.cz/#organization',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.novadach.cz/#faq',
        mainEntity: seoFaqData.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
      }}
    />
  );
}

