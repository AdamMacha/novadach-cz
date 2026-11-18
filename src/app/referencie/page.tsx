import React from 'react';
import type { Metadata } from 'next';
import ReferencesGallery from '@/components/ReferencesGallery';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLdScript from '@/components/JsonLdScript';
import Link from 'next/link';
import { referencesData } from '@/data/referencesData';
import { buildBreadcrumbJsonLd, buildReferencesCollectionJsonLd } from '@/lib/jsonLd';
import { buildPageMetadata, SK_SITE_URL } from '@/lib/seo';
import styles from './referencie.module.css';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = buildPageMetadata({
  title: 'Reference plochých střech, fasád a hydroizolací',
  description:
    'Stavební reference NOVADACH v ČR a SR: Tunel Blanka Praha, LP Kunice u Prahy, OC Černý Most, Volkswagen Bratislava, Eurovea 2, AS Nivy a Volvo Cars Valaliky.',
  path: '/referencie',
  skUrl: `${SK_SITE_URL}/referencie/`,
  ogTitle: 'Reference v ČR a SR | Ploché střechy, panely a hydroizolace | NOVADACH CZ',
  ogDescription:
    'Přes 250 úspěšně dokončených průmyslových hal, logistických center, dopravních tunelů a komerčních budov v ČR a SR.',
  imagePath: '/images/referencie/blanka_razba12-1.jpg',
  imageAlt: 'Tunel Blanka Praha – realizace speciálních hydroizolací NOVADACH',
  keywords: [
    'reference plochých střech',
    'Tunel Blanka hydroizolace',
    'Logistický park Kunice',
    'OC Černý Most Praha',
    'Volkswagen Bratislava střechy',
    'Volvo Cars Valaliky trapézové plechy',
    'Eurovea 2 hydroizolace',
    'AS Nivy zelená střecha',
  ],
});

const breadcrumbs = [
  { name: 'Úvod', path: '/' },
  { name: 'Reference', path: '/referencie' },
];

export default function ReferenciePage() {
  return (
    <div className={styles.pageWrapper}>
      <JsonLdScript data={buildBreadcrumbJsonLd(breadcrumbs)} />
      <JsonLdScript data={buildReferencesCollectionJsonLd(referencesData)} />
      <div className="container">
        <Breadcrumbs items={breadcrumbs} />
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <span className="section-tag">Důkaz naší odbornosti</span>
          <h1 className="section-title">
            Portfolio referenčních staveb <span className="text-gradient">v ČR a SR</span>
          </h1>
          <p className="section-subtitle">
            Přes 250 úspěšně dokončených velkých průmyslových hal, obchodních center, dopravních staveb a moderních rezidencí. Vyberte si kategorii nebo lokalitu:
          </p>
        </div>

        {/* Gallery */}
        <ReferencesGallery />

        {/* Summary Trust Box */}
        <div className={styles.trustBox}>
          <div className={styles.trustGrid}>
            <div>
              <span style={{ color: 'var(--accent-amber)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
                Český trh i mezinárodní zázemí
              </span>
              <h3 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', color: 'var(--text-primary)', margin: '0.5rem 0 1rem 0' }}>
                Hledáte spolehlivého subdodavatele pro váš projekt?
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Spolupracujeme s předními generálními dodavateli a developery. Zajišťujeme přesné dodržování harmonogramu výstavby, technických norem a bezpečnostních předpisů BOZP.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/kontakt" className="btn btn-primary">
                  <span>Poptat kapacity na stavbu</span>
                  <ArrowRight size={15} />
                </Link>
                <Link href="/certifikacie" className="btn btn-secondary">
                  <span>Zobrazit ISO certifikace</span>
                </Link>
              </div>
            </div>

            <div className={styles.trustBenefitsCard}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Co získáte spoluprací s námi:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={16} style={{ color: 'var(--accent-amber)' }} />
                  <span>Vlastní rozsáhlé montážní kapacity a klempířská výroba</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={16} style={{ color: 'var(--accent-amber)' }} />
                  <span>Dlouholeté zkušenosti na českých i slovenských megaprojektech</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={16} style={{ color: 'var(--accent-amber)' }} />
                  <span>Certifikované materiály od předních evropských výrobců</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={16} style={{ color: 'var(--accent-amber)' }} />
                  <span>Záruční i pozáruční servis zajištěný vlastním QC oddělením</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
