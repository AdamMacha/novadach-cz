import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SeoJsonLd from '@/components/SeoJsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.novadach.cz'),
  title: {
    default: 'NOVADACH CZ | Ploché a fóliové střechy, sendvičové fasádní panely, trapézové plechy a hydroizolace',
    template: '%s | NOVADACH CZ',
  },
  description:
    'Specialista na ploché a fóliové střechy (PVC, mPVC, TPO, Fatrafol), asfaltové pásy (SBS, APP, samolepicí pásy, parozábrany), montáž trapézových plechů, zateplení střech (PIR, minerální vata MW, kamenná vata, EPS, XPS), fasádní sendvičové panely (Kingspan), hydroizolace základů a tunelů proti tlakové vodě a radonu (Dualproof, HDPE), ocelové výměny a klempířské prvky v ČR a SR.',
  keywords: [
    'NOVADACH',
    'NOVADACH CZ',
    'ploché střechy',
    'ploche strechy',
    'fóliové střechy',
    'foliove strechy',
    'montáž střešních plášťů',
    'montaz stresnich plastu',
    'střešní pláště',
    'PVC',
    'PVC fólie',
    'fólie',
    'folie',
    'fóliová izolace',
    'foliova izolace',
    'mPVC',
    'mpvc',
    'TPO',
    'tpo',
    'Fatrafol',
    'fatrafol',
    'HDPE',
    'hdpe',
    'PE-HD',
    'pe-hd',
    'Dualproof',
    'dualproof',
    'asfaltové pásy',
    'asfaltove pasy',
    'SBS',
    'sbs',
    'APP',
    'app',
    'samolepicí asfaltový pás',
    'samolepici asfaltovy pas',
    'parotěs',
    'parotes',
    'parozábrana',
    'parozabrana',
    'zelené střechy',
    'zelene strechy',
    'izolace balkonů',
    'izolace balkonu',
    'izolace průmyslových objektů',
    'izolace prumyslovych objektu',
    'tepelné izolace',
    'Tepelne izolace',
    'zateplení střech',
    'zatepleni strech',
    'minerální vata',
    'mineralni vata',
    'minerální vlna',
    'mineralni vlna',
    'MW',
    'mw',
    'kamenná vata',
    'kamenna vata',
    'PIR',
    'pir',
    'polystyren',
    'EPS',
    'eps',
    'XPS',
    'xps',
    'trapézové plechy',
    'trapezove plechy',
    'montáž trapézových plechů',
    'montaz trapezovych plechu',
    'obvodový plášť',
    'obvodovy plast',
    'opláštění',
    'oplastenie',
    'fasádní panely',
    'fasadni panely',
    'sendvičový panel',
    'sendvicovy panel',
    'stěnový panel',
    'stenovy panel',
    'střešní panel',
    'stresni panel',
    'montáž panelů',
    'montaz panelu',
    'Kingspan',
    'kingspan',
    'hydroizolace',
    'tlaková voda',
    'tlakova voda',
    'izolace proti tlakové vodě',
    'izolace proti tlakove vode',
    'izolace proti radonu',
    'izolace základů',
    'izolace zakladu',
    'tunelové izolace',
    'tunelove izolace',
    'tunel',
    'izolace primárního ostění',
    'izolace primarniho osteni',
    'ocelové konstrukce',
    'ocelove konstrukce',
    'montáž ocelových výměn',
    'montaz ocelovych vymen',
    'tenkostěnné výměny',
    'tenkostenne vymeny',
    'klempířské prvky',
    'klempirske prvky',
    'klempířské konstrukce',
    'průmyslové střechy Praha',
    'rekonstrukce plochých střech',
  ],
  authors: [{ name: 'NOVADACH CZ s.r.o.', url: 'https://www.novadach.cz' }],
  creator: 'NOVADACH CZ s.r.o.',
  publisher: 'NOVADACH CZ s.r.o.',
  category: 'construction',
  alternates: {
    canonical: 'https://www.novadach.cz',
    languages: {
      'cs-CZ': 'https://www.novadach.cz',
      'sk-SK': 'https://www.novadach.sk',
    },
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
    title: 'NOVADACH CZ | Ploché a fóliové střechy, fasádní panely, trapézové plechy a hydroizolace',
    description:
      'Komplexní realizace střešních a obvodových plášťů: fóliové střechy (mPVC, TPO, Fatrafol), asfaltové pásy (SBS, APP), trapézové plechy, zateplení střech (PIR, minerální vata MW, EPS, XPS), sendvičové panely Kingspan a hydroizolace základů i tunelů (Dualproof, HDPE).',
    url: 'https://www.novadach.cz',
    siteName: 'NOVADACH Česká republika',
    images: [
      {
        url: '/images/referencie/VW-H1_1.jpg',
        width: 1200,
        height: 630,
        alt: 'NOVADACH CZ – Realizace střešních plášťů, skládaných fasád a hydroizolací',
      },
    ],
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOVADACH CZ | Ploché střechy, sendvičové panely a speciální hydroizolace',
    description:
      'Montáž střešních plášťů, trapézových plechů, sendvičových panelů Kingspan, fóliových izolací (PVC, TPO, Fatrafol), asfaltových pásů SBS/APP a hydroizolací proti tlakové vodě a radonu.',
    images: ['/images/referencie/VW-H1_1.jpg'],
  },
  other: {
    'geo.region': 'CZ-10',
    'geo.placename': 'Praha',
    'geo.position': '50.0653;14.3644',
    ICBM: '50.0653, 14.3644',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>
        <SeoJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
