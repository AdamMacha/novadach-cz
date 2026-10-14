import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
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
  title: 'Kontakt & Poptávka | NOVADACH CZ',
  description: 'Získejte nezávaznou nabídku nebo konzultaci střešních a fasádních plášťů v České republice. Kontakty na obchodní i výrobní vedení.',
};

export default function KontaktPage() {
  return (
    <div style={{ padding: '3.5rem 0 6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '4rem' }}>
          <span className="section-tag">Spojte se s námi</span>
          <h1 className="section-title">
            Kontaktujte <span className="text-gradient">NOVADACH</span>
          </h1>
          <p className="section-subtitle">
            Ať už poptáváte kalkulaci do výběrového řízení, technické posouzení stavby nebo hledáte spolehlivého generálního subdodavatele, jsme vám plně k dispozici.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '3.5rem', alignItems: 'flex-start' }}>
          {/* Left: Contact Info */}
          <div>
            {/* CZ Representative Card */}
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem', borderLeft: '4px solid #38bdf8' }}>
              <span style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.4rem' }}>
                🇨🇿 Zastoupení pro Českou republiku
              </span>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Poptávky a tendry v ČR
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="tel:+420770123456" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 700 }}>
                  <Phone size={18} style={{ color: 'var(--accent-amber)' }} />
                  <span>+420 770 123 456</span>
                </a>
                <a href="mailto:poptavky@novadach.cz" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  <Mail size={18} style={{ color: 'var(--accent-amber)' }} />
                  <span>poptavky@novadach.cz</span>
                </a>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                  <MapPin size={18} style={{ color: 'var(--accent-amber)' }} />
                  <span>Působnost: Praha, Brno, Ostrava a celá Česká republika</span>
                </div>
              </div>
            </div>

            {/* Slovak Headquarters Card */}
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--accent-amber)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.4rem' }}>
                🇸🇰 Centrála společnosti (Slovensko)
              </span>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                NOVADACH s.r.o.
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <MapPin size={18} style={{ color: 'var(--accent-amber)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>Stará Vajnorská 27, 831 04 Bratislava, Slovensko</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Phone size={18} style={{ color: 'var(--accent-amber)', flexShrink: 0 }} />
                  <span>+421 2 49 30 96 11</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Mail size={18} style={{ color: 'var(--accent-amber)', flexShrink: 0 }} />
                  <span>info@novadach.sk</span>
                </div>
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem', marginTop: '0.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  IČO: 35 846 151 | DIČ: 20 20 23 91 77 | IČ DPH: SK 20 20 23 91 77
                </div>
                <a 
                  href="https://www.novadach.sk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#38bdf8', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.25rem', fontWeight: 600 }}
                >
                  Přejít na slovenské stránky centrály (novadach.sk) <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Direct Commercial Contacts */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <UserCheck size={18} style={{ color: 'var(--accent-amber)' }} />
                <span>Přímé kontakty na vedení obchodu</span>
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Ing. Peter Kelemen</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-amber)', textTransform: 'uppercase', fontWeight: 600 }}>Obchodní ředitel</span>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    Tel: <a href="tel:+421918957399" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>+421 918 957 399</a> | E-mail: <a href="mailto:kelemen@novadach.sk" style={{ color: 'var(--text-primary)' }}>kelemen@novadach.sk</a>
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem' }}>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Ing. Juraj Jamrich</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-amber)', textTransform: 'uppercase', fontWeight: 600 }}>Výrobní ředitel</span>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    Tel: <a href="tel:+421918616171" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>+421 918 616 171</a> | E-mail: <a href="mailto:jamrich@novadach.sk" style={{ color: 'var(--text-primary)' }}>jamrich@novadach.sk</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div>
            <Suspense fallback={<div>Načítání poptávkového formuláře...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
