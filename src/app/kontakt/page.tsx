import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import styles from './kontakt.module.css';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  Building,
  UserCheck
} from 'lucide-react';
import { companyData } from '@/data/companyData';

export const metadata: Metadata = {
  title: 'Kontakt & Poptávka – Kalkulace plochých střech, opláštění a hydroizolací',
  description:
    'Získejte nezávaznou cenovou nabídku nebo technickou konzultaci pro ploché a fóliové střechy, zateplení střech, montáž trapézových plechů, sendvičové fasádní panely, hydroizolace proti tlakové vodě a radonu, ocelové výměny a klempířské prvky v ČR.',
  alternates: {
    canonical: 'https://www.novadach.cz/kontakt',
  },
  openGraph: {
    title: 'Kontakt & Poptávka | NOVADACH CZ s.r.o.',
    description:
      'Kontaktujte českou centrálu NOVADACH CZ s.r.o. v Praze nebo zašlete projektovou dokumentaci a výkaz výměr k nezávaznému nacenění.',
    url: 'https://www.novadach.cz/kontakt',
  },
};

export default function KontaktPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <span className="section-tag">Spojte se s námi</span>
          <h1 className="section-title">
            Kontaktujte <span className="text-gradient">NOVADACH</span>
          </h1>
          <p className="section-subtitle">
            Ať už poptáváte kalkulaci do výběrového řízení, technické posouzení stavby nebo hledáte spolehlivého generálního subdodavatele, jsme vám plně k dispozici.
          </p>
        </div>

        <div className={styles.kontaktGrid}>
          {/* Left: Contact Info */}
          <div className={styles.kontaktInfoCol}>
            {/* CZ Headquarters Card */}
            <div className={`glass-card ${styles.infoCard}`} style={{ borderLeft: '4px solid #38bdf8' }}>
              <span style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.4rem' }}>
                🇨🇿 Centrála společnosti pro Českou republiku
              </span>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                NOVADACH CZ s.r.o.
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                  <MapPin size={18} style={{ color: 'var(--accent-amber)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span><strong>Sídlo:</strong> Naskové 1189/1u, Košíře, 150 00 Praha 5</span>
                </div>

                <a href="tel:+420730827769" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 700 }}>
                  <Phone size={18} style={{ color: 'var(--accent-amber)', flexShrink: 0 }} />
                  <span>+420 730 827 769</span>
                </a>

                <a href="mailto:obchod@novadach.cz" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  <Mail size={18} style={{ color: 'var(--accent-amber)', flexShrink: 0 }} />
                  <span>obchod@novadach.cz</span>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                  <Building size={18} style={{ color: 'var(--accent-amber)', flexShrink: 0 }} />
                  <span>Působnost: Praha, Brno, Ostrava a celá ČR</span>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem', marginTop: '0.35rem', fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div><strong>IČO:</strong> 24531448 &nbsp;|&nbsp; <strong>DIČ:</strong> CZ24531448</div>
                  <div><strong>Datová schránka:</strong> <code style={{ color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)', padding: '0.15rem 0.4rem', borderRadius: '4px', fontSize: '0.84rem' }}>329vcpw</code></div>
                </div>

                {/* Direct Contact CZ */}
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', marginTop: '0.5rem' }}>
                  <h4 style={{ fontSize: '0.92rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
                    <UserCheck size={16} style={{ color: '#38bdf8' }} />
                    <span>Přímý kontakt</span>
                  </h4>
                  
                  <div>
                    <div style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>Bc. Adrián Babiš</div>
                    <span style={{ fontSize: '0.78rem', color: '#38bdf8', textTransform: 'uppercase', fontWeight: 700 }}>Výkonný ředitel a jednatel</span>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                      Tel: <a href="tel:+420730827769" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>+420 730 827 769</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slovak Headquarters Card */}
            <div className={`glass-card ${styles.infoCard}`}>
              <span style={{ fontSize: '0.78rem', color: 'var(--accent-amber)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.4rem' }}>
                🇸🇰 Centrála společnosti (Slovensko)
              </span>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                NOVADACH s.r.o.
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <MapPin size={18} style={{ color: 'var(--accent-amber)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span><strong>Sídlo:</strong> Stará Vajnorská 27, 831 04 Bratislava, Slovensko</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Phone size={18} style={{ color: 'var(--accent-amber)', flexShrink: 0 }} />
                  <a href="tel:+421249309611" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>+421 2 49 30 96 11</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Mail size={18} style={{ color: 'var(--accent-amber)', flexShrink: 0 }} />
                  <a href="mailto:info@novadach.sk" style={{ color: 'var(--text-secondary)' }}>info@novadach.sk</a>
                </div>
                
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.65rem', marginTop: '0.15rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  IČO: 35 846 151 | DIČ: 20 20 23 91 77 | IČ DPH: SK 20 20 23 91 77
                </div>

                <a 
                  href="https://www.novadach.sk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#38bdf8', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.15rem', fontWeight: 600 }}
                >
                  Přejít na slovenské stránky centrály (novadach.sk) <ExternalLink size={13} />
                </a>

                {/* Direct Commercial Contacts inside Slovak Card */}
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', marginTop: '0.5rem' }}>
                  <h4 style={{ fontSize: '0.92rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
                    <UserCheck size={16} style={{ color: 'var(--accent-amber)' }} />
                    <span>Přímé kontakty na vedení obchodu</span>
                  </h4>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>Ing. Peter Kelemen</div>
                      <span style={{ fontSize: '0.78rem', color: 'var(--accent-amber)', textTransform: 'uppercase', fontWeight: 700 }}>Obchodní ředitel</span>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                        Tel: <a href="tel:+421918957399" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>+421 918 957 399</a> | E-mail: <a href="mailto:kelemen@novadach.sk" style={{ color: 'var(--text-primary)' }}>kelemen@novadach.sk</a>
                      </p>
                    </div>

                    <div style={{ borderTop: '1px dashed rgba(255, 255, 255, 0.08)', paddingTop: '0.75rem' }}>
                      <div style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>Ing. Juraj Jamrich</div>
                      <span style={{ fontSize: '0.78rem', color: 'var(--accent-amber)', textTransform: 'uppercase', fontWeight: 700 }}>Výrobní ředitel</span>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                        Tel: <a href="tel:+421918616171" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>+421 918 616 171</a> | E-mail: <a href="mailto:jamrich@novadach.sk" style={{ color: 'var(--text-primary)' }}>jamrich@novadach.sk</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className={styles.kontaktFormCol}>
            <Suspense fallback={<div>Načítání poptávkového formuláře...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
