import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { servicesData } from '@/data/servicesData';
import { referencesData } from '@/data/referencesData';
import TechnicalSeoSection from '@/components/TechnicalSeoSection';
import styles from './sluzby.module.css';
import { 
  ShieldCheck, 
  Building2, 
  Droplets, 
  Layers, 
  Hammer, 
  Wrench, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Služby a technologie – Ploché střechy, sendvičové panely, hydroizolace a trapézové plechy',
  description:
    'Kompletní montáž střešních plášťů, ploché a fóliové střechy (PVC, mPVC, TPO, Fatrafol), asfaltové pásy (SBS, APP, samolepicí pásy, parozábrany), tepelné izolace a zateplení střech (PIR, minerální vata MW, kamenná vata, EPS, XPS), montáž trapézových plechů, fasádní sendvičové panely (Kingspan), hydroizolace základů a tunelů proti tlakové vodě a radonu (Dualproof, HDPE), ocelové výměny a klempířské prvky.',
  alternates: {
    canonical: 'https://www.novadach.cz/sluzby',
  },
  openGraph: {
    title: 'Služby a technologie | Ploché střechy, opláštění budov a hydroizolace | NOVADACH CZ',
    description:
      'Fóliové střechy (mPVC, TPO, Fatrafol), asfaltové pásy SBS/APP, zateplení střech (PIR, minerální vlna MW, EPS, XPS), sendvičové panely Kingspan, trapézové plechy, hydroizolace proti tlakové vodě a radonu (Dualproof, HDPE) a tunelové izolace.',
    url: 'https://www.novadach.cz/sluzby',
  },
};

export default function SluzbyPage() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'stresne-plaste':
        return <ShieldCheck size={32} />;
      case 'fasady':
        return <Building2 size={32} />;
      case 'izolacie':
        return <Droplets size={32} />;
      case 'fasadne-obklady':
        return <Layers size={32} />;
      case 'ocelove-konstrukcie':
        return <Hammer size={32} />;
      case 'klampiarske-konstrukcie':
        return <Wrench size={32} />;
      default:
        return <Building2 size={32} />;
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <span className="section-tag">Technologický katalog</span>
          <h1 className="section-title">
            Komplexní řešení pro <span className="text-gradient">ploché střechy, fasády a hydroizolace</span>
          </h1>
          <p className="section-subtitle">
            Disponujeme vlastním inženýrským týmem, certifikovanými izolatéry a dílenským zázemím pro montáž střešních plášťů, trapézových plechů, sendvičových panelů, speciálních hydroizolací i výrobu klempířských a ocelových prvků.
          </p>
        </div>

        {/* Detailed Services Listing */}
        <div className={styles.servicesList}>
          {servicesData.map((service, index) => {
            const relatedProjects = referencesData.filter((r) => service.referenceIds.includes(r.id));

            return (
              <article 
                key={service.id} 
                id={service.id}
                className={`glass-card ${styles.serviceCard}`} 
              >
                <div className={styles.cardTopRow}>
                  <div className={styles.cardHeaderInfo}>
                    <div className={styles.iconBox}>
                      {getIcon(service.id)}
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--accent-amber)', fontWeight: 700, textTransform: 'uppercase' }}>
                        OBOROVÁ SPECIALIZACE 0{index + 1}
                      </span>
                      <h2 className={styles.cardTitle}>{service.title}</h2>
                    </div>
                  </div>

                  <Link href={`/kontakt?sluzba=${encodeURIComponent(service.title)}`} className="btn btn-primary">
                    <span>Poptat toto řešení</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>

                <p className={styles.cardDesc}>
                  {service.longDesc}
                </p>

                <div className={styles.featuresBenefitsGrid}>
                  {/* Features Column */}
                  <div className={styles.detailColumn}>
                    <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Check size={18} style={{ color: 'var(--accent-amber)' }} />
                      Rozsah realizovaných prací a technologií:
                    </h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {service.features.map((feat, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                          <span style={{ color: 'var(--accent-amber)', fontWeight: 'bold' }}>•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits Column */}
                  <div className={styles.detailColumn}>
                    <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Sparkles size={18} style={{ color: 'var(--accent-amber)' }} />
                      Výhody pro investora a garance:
                    </h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {service.benefits.map((b, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                          <span style={{ color: 'var(--accent-amber)', fontWeight: 'bold' }}>✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Materials Used */}
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Certifikované materiály a systémy:
                  </span>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {service.materials.map((mat, i) => (
                      <span key={i} style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-pill)', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* SEO Keywords / Specializations Row */}
                {service.seoKeywords && service.seoKeywords.length > 0 && (
                  <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                      Klíčové oblasti:
                    </span>
                    {service.seoKeywords.map((kw, kIdx) => (
                      <span
                        key={kIdx}
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)',
                          background: 'rgba(245, 158, 11, 0.06)',
                          border: '1px solid rgba(245, 158, 11, 0.18)',
                          padding: '0.15rem 0.55rem',
                          borderRadius: 'var(--radius-pill)',
                        }}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                )}

                {/* Related Real Projects */}
                {relatedProjects.length > 0 && (
                  <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                    <span style={{ fontSize: '0.82rem', color: 'var(--accent-amber)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
                      Referenční stavby realizované touto technologií:
                    </span>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      {relatedProjects.map((proj) => (
                        <Link 
                          key={proj.id} 
                          href={`/referencie#${proj.id}`}
                          style={{ 
                            background: 'rgba(255, 255, 255, 0.03)', 
                            border: '1px solid var(--border-subtle)', 
                            padding: '0.4rem 0.85rem', 
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.85rem',
                            color: 'var(--text-primary)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem'
                          }}
                        >
                          <span>{proj.country === 'CZ' ? '🇨🇿' : '🇸🇰'}</span>
                          <span>{proj.title}</span>
                          <ArrowRight size={12} style={{ color: 'var(--accent-amber)' }} />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: '4rem', marginBottom: '2rem', textAlign: 'center' }}>
          <div className={`glass-card ${styles.bottomCtaCard}`}>
            <h3 style={{ fontSize: 'clamp(1.35rem, 4vw, 1.8rem)', marginBottom: '0.75rem' }}>Potřebujete individuální technické řešení?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
              Náš tým přípravy staveb s vámi projde projektovou dokumentaci a navrhne nejvhodnější souvrství s ohledem na technické normy a rozpočet.
            </p>
            <Link href="/kontakt" className="btn btn-primary">
              <span>Kontaktovat technického poradce</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Technical SEO Matrix & FAQ */}
      <TechnicalSeoSection />
    </div>
  );
}
