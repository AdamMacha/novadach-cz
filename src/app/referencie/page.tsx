import React from 'react';
import type { Metadata } from 'next';
import ReferencesGallery from '@/components/ReferencesGallery';
import Link from 'next/link';
import { ArrowRight, Building, Award, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reference v ČR a SR | NOVADACH CZ',
  description: 'Prohlédněte si naše stavební reference v České republice i na Slovensku: Tunel Blanka Praha, Volkswagen, Eurovea, AS Nivy, Volvo Cars Valaliky.',
};

export default function ReferenciePage() {
  return (
    <div style={{ padding: '3.5rem 0 6rem 0' }}>
      <div className="container">
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
        <div style={{ marginTop: '5rem', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: 'var(--accent-amber)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
                Český trh i mezinárodní zázemí
              </span>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', margin: '0.5rem 0 1rem 0' }}>
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

            <div style={{ background: '#0e141c', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
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
