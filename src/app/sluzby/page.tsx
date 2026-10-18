import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { servicesData } from '@/data/servicesData';
import { referencesData } from '@/data/referencesData';
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
  Sparkles,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Služby a technologie | NOVADACH CZ',
  description: 'Komplexní nabídka střešních plášťů, skládaných fasád, hydroizolací podzemních staveb, kompozitních obkladů BOND a klempířských prací.',
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
            Komplexní řešení pro <span className="text-gradient">střechy, fasády a izolace</span>
          </h1>
          <p className="section-subtitle">
            Disponujeme vlastním inženýrským týmem, certifikovanými montéry a dílenským zázemím pro výrobu klempířských a pomocných ocelových prvků.
          </p>
        </div>

        {/* Detailed Services Listing */}
        <div className={styles.servicesList}>
          {servicesData.map((service, index) => {
            const relatedProjects = referencesData.filter((r) => service.referenceIds.includes(r.id));

            return (
              <div 
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
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Check size={18} style={{ color: 'var(--accent-amber)' }} />
                      Rozsah realizovaných prací:
                    </h4>
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
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Sparkles size={18} style={{ color: 'var(--accent-amber)' }} />
                      Výhody pro investora a garance:
                    </h4>
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
                    Certifikované materiály:
                  </span>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {service.materials.map((mat, i) => (
                      <span key={i} style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-pill)', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

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
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
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
    </div>
  );
}
