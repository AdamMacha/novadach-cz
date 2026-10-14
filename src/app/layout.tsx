import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CrossLinkBanner from '@/components/CrossLinkBanner';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.novadach.cz'),
  title: 'NOVADACH CZ | Střešní pláště, skládané fasády a speciální izolace',
  description: 'Specialista na ploché střechy novostaveb i rekonstrukce, skládané fasády ze sendvičových panelů a hydroizolace v ČR a SR. Zázemí stavební skupiny od roku 1993, reference Tunel Blanka, Volkswagen, Eurovea.',
  keywords: [
    'střešní pláště',
    'ploché střechy',
    'skládané fasády',
    'sendvičové panely',
    'hydroizolace',
    'izolace spodní stavby',
    'klempířské konstrukce',
    'Novadach',
    'průmyslové střechy Praha',
    'rekonstrukce plochých střech'
  ],
  authors: [{ name: 'NOVADACH s.r.o.' }],
  openGraph: {
    title: 'NOVADACH CZ | Špičkové střešní pláště a skládané fasády',
    description: 'Komplexní realizace střešních a obvodových plášťů průmyslových, komerčních a rezidenčních budov. Tradice od r. 1993, reference v ČR i SR.',
    url: 'https://www.novadach.cz',
    siteName: 'NOVADACH Česká republika',
    images: [
      {
        url: '/images/logos/cropped-novadach_logo_rgb-wback-1.png',
        width: 1200,
        height: 630,
        alt: 'NOVADACH Logo',
      },
    ],
    locale: 'cs_CZ',
    type: 'website',
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
