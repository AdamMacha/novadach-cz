import React from 'react';
import type { Metadata } from 'next';
import CertificatesSection from '@/components/CertificatesSection';
import Link from 'next/link';
import { ShieldCheck, Award, FileText, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Certifikace ISO & Normy ČSN | NOVADACH CZ',
  description: 'Prohlédněte si naše mezinárodní certifikáty ISO 9001, ISO 14001 a ISO 45001 pro střešní a fasádní montáže v ČR a SR.',
};

export default function CertifikaciePage() {
  return (
    <div style={{ padding: '3.5rem 0 6rem 0' }}>
      <div className="container">
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
        <div style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', color: 'var(--accent-amber)' }}>
              <ShieldCheck size={24} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>ISO 9001:2015</h3>
            </div>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-amber)', marginBottom: '0.75rem' }}>Systém managementu kvality</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Pravidelně prověřovaný systém řízení všech fází stavebního díla: od přezkoumání požadavků investora přes výběr materiálů s CE certifikací až po výstupní zkoušky těsnosti spojů a předání díla bez vad a nedodělků.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', color: 'var(--accent-amber)' }}>
              <ShieldCheck size={24} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>ISO 14001:2015</h3>
            </div>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-amber)', marginBottom: '0.75rem' }}>Environmentální management</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Přísné dodržování ekologických norem na stavbě. Zodpovědné nakládání s odpady, separace minerální vlny, polystyrenu a zbytků fólií pro recyklaci. Realizace úsporných zelených vegetačních střech.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
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
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
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
