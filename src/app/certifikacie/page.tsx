import React from 'react';
import type { Metadata } from 'next';
import CertificatesSection from '@/components/CertificatesSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLdScript from '@/components/JsonLdScript';
import Link from 'next/link';
import { buildBreadcrumbJsonLd, buildCertificatesPageJsonLd } from '@/lib/jsonLd';
import { buildPageMetadata, SK_SITE_URL } from '@/lib/seo';
import styles from './certifikacie.module.css';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = buildPageMetadata({
  title: 'Certifikace ISO 9001, 14001, 45001 & Normy ČSN',
  description:
    'Certifikáty kvality ISO 9001, ekologie ISO 14001 a BOZP ISO 45001 pro montáž plochých střech, fasádních panelů Kingspan a hydroizolací do stavebních tendrů v ČR.',
  path: '/certifikacie',
  skUrl: `${SK_SITE_URL}/organizacna-struktura/`,
  ogTitle: 'Certifikace ISO 9001 / 14001 / 45001 | NOVADACH CZ',
  ogDescription:
    'Ověřené certifikáty řízení kvality, ekologie a bezpečnosti práce pro výběrová řízení a stavební tendry v České republice.',
  imagePath: '/images/certifikaty/ISO-9001.png',
  imageAlt: 'Certifikát ISO 9001:2015 – Systém managementu kvality NOVADACH',
  keywords: [
    'certifikace ISO 9001',
    'ISO 14001',
    'ISO 45001 BOZP',
    'normy ČSN ploché střechy',
    'certifikát do stavebních tendrů',
  ],
});

const breadcrumbs = [
  { name: 'Úvod', path: '/' },
  { name: 'Certifikace', path: '/certifikacie' },
];

export default function CertifikaciePage() {
  return (
    <div className={styles.pageWrapper}>
      <JsonLdScript data={buildBreadcrumbJsonLd(breadcrumbs)} />
      <JsonLdScript data={buildCertificatesPageJsonLd()} />
      <div className="container">
        <Breadcrumbs items={breadcrumbs} />
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <span className="section-tag">Mezinárodní standardy kvality</span>
          <h1 className="section-title">
            Certifikace <span className="text-gradient">ISO 9001 / 14001 / 45001</span>
          </h1>
          <p className="section-subtitle">
            Kvalita, bezpečnost a environmentální ohleduplnost nejsou jen fráze, ale každodenní norma. Prohlédněte si naše certifikáty v plném rozlišení nebo si je stáhněte do výběrového řízení.
          </p>
        </div>

        {/* Certificates Grid & Zoom */}
        <CertificatesSection />

        {/* Detailed Explanation of Standards */}
        <div className={styles.standardsGrid}>
          <div className={`glass-card ${styles.standardCard}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', color: 'var(--accent-amber)' }}>
              <ShieldCheck size={24} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>ISO 9001:2015</h3>
            </div>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-amber)', marginBottom: '0.75rem' }}>Systém managementu kvality</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Pravidelně prověřovaný systém řízení všech fází stavebního díla: od přezkoumání požadavků investora přes výběr materiálů s CE certifikací až po výstupní zkoušky těsnosti spojů a předání díla bez vad a nedodělků.
            </p>
          </div>

          <div className={`glass-card ${styles.standardCard}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', color: 'var(--accent-amber)' }}>
              <ShieldCheck size={24} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>ISO 14001:2015</h3>
            </div>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-amber)', marginBottom: '0.75rem' }}>Environmentální management</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Přísné dodržování ekologických norem na stavbě. Zodpovědné nakládání s odpady, separace minerální vlny, polystyrenu a zbytků fólií pro recyklaci. Realizace úsporných zelených vegetačních střech.
            </p>
          </div>

          <div className={`glass-card ${styles.standardCard}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', color: 'var(--accent-amber)' }}>
              <ShieldCheck size={24} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>ISO 45001:2018</h3>
            </div>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-amber)', marginBottom: '0.75rem' }}>Bezpečnost a ochrana zdraví (BOZP)</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Bezpečnost při práci ve výškách a při manipulaci s těžkými břemeny je naší absolutní prioritou. Montéři jsou vybaveni certifikovanými osobními ochrannými prostředky (OOPP) a záchytnými systémy.
            </p>
          </div>
        </div>

        {/* CTA Box */}
        <div className={styles.ctaBox}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            Požadujete do tendru ověřenou kopii certifikátů nebo doložení technických listů konkrétních materiálů?
          </p>
          <Link href="/kontakt" className="btn btn-primary">
            <span>Kontaktovat naše obchodní oddělení</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
