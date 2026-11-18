import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Home, Layers, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Stránka nenalezena (404)',
  description: 'Požadovaná stránka na webu NOVADACH CZ nebyla nalezena.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <div
          className="glass-card"
          style={{
            maxWidth: '720px',
            margin: '2rem auto',
            padding: '3rem 2rem',
            textAlign: 'center',
          }}
        >
          <span className="section-tag">Chyba 404</span>
          <h1 className="section-title" style={{ marginBottom: '1rem' }}>
            Požadovaná stránka <span className="text-gradient">nebyla nalezena</span>
          </h1>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
            Odkaz mohl být přesunut nebo zadán chybně. Pokračujte prosím na hlavní stránku nebo si vyberte z našeho katalogu služeb a referencí.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-primary">
              <Home size={16} />
              <span>Hlavní stránka</span>
            </Link>
            <Link href="/sluzby" className="btn btn-secondary">
              <Layers size={16} />
              <span>Katalog služeb</span>
            </Link>
            <Link href="/kontakt" className="btn btn-outline-amber">
              <Phone size={16} />
              <span>Kontakt a poptávka</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

