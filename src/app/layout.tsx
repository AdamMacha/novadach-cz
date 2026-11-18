import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SeoJsonLd from '@/components/SeoJsonLd';
import PreloadResources from '@/components/PreloadResources';
import {
  DEFAULT_OG_IMAGE_ALT,
  DEFAULT_OG_IMAGE_PATH,
  IMAGE_DIMENSIONS,
  LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
} from '@/lib/seo';

const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const defaultOgDims = IMAGE_DIMENSIONS[DEFAULT_OG_IMAGE_PATH];

export const viewport: Viewport = {
  themeColor: '#0b0f15',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Ploché střechy, sendvičové fasády a hydroizolace`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Realizace plochých a fóliových střech (PVC, mPVC, TPO, Fatrafol), trapézových plechů, sendvičových panelů Kingspan a hydroizolací staveb i tunelů v ČR.',
  applicationName: SITE_NAME,
  authors: [{ name: LEGAL_NAME, url: SITE_URL }],
  creator: LEGAL_NAME,
  publisher: LEGAL_NAME,
  category: 'construction',
  referrer: 'origin-when-cross-origin',
  ...(gscVerification ? { verification: { google: gscVerification } } : {}),
  openGraph: {
    title: `${SITE_NAME} | Ploché střechy, sendvičové fasády a hydroizolace`,
    description:
      'Komplexní realizace střešních a obvodových plášťů, zateplení střech, sendvičových panelů Kingspan a speciálních hydroizolací staveb i tunelů v ČR a SR.',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE_PATH,
        width: defaultOgDims.width,
        height: defaultOgDims.height,
        alt: DEFAULT_OG_IMAGE_ALT,
      },
    ],
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Ploché střechy, sendvičové panely a hydroizolace`,
    description:
      'Montáž střešních plášťů, trapézových plechů, sendvičových panelů Kingspan, fóliových izolací (PVC, TPO, Fatrafol) a hydroizolací proti tlakové vodě a radonu.',
    images: [DEFAULT_OG_IMAGE_PATH],
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
        <PreloadResources />
        <SeoJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
