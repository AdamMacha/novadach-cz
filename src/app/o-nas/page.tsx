import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TeamSection from '@/components/TeamSection';
import { 
  Building2, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Clock, 
  ExternalLink 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'O nás a náš tým | NOVADACH CZ',
  description: 'Přečtěte si o historii společnosti NOVADACH od roku 1993, našem vedení, projektových manažerech a filozofii kvality.',
};

export default function ONasPage() {
  return (
    <div style={{ padding: '3.5rem 0 6rem 0' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="section-tag">Tradice & Odbornost</span>
          <h1 className="section-title">
            O společnosti <span className="text-gradient">NOVADACH</span>
          </h1>
          <p className="section-subtitle">
            Již více než tři dekády stavíme úspěch na vysoké odbornosti našich lidí, finanční stabilitě a stoprocentním dodržování technologické kvality.
          </p>
        </div>

        {/* Story Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3.5rem', alignItems: 'center', marginBottom: '5rem' }}>
          <div>
            <h2 style={{ fontSize: '2.1rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
              Od roku 1993 specialistou na komplexní pláště budov
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Společnost <strong>NOVADACH s.r.o.</strong> je realizační stavební společnost s tradicí sahající do roku 1993, kdy začala působit sesterská firma NOVAGLASS s.r.o. V roce 2002 byla založena společnost NOVADACH specializující se na náročné střešní konstrukce, skládané fasády a speciální izolace inženýrských děl.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Cílem naší společnosti je poskytnout investorovi <strong>komplexní servis na klíč</strong>: od úvodního návrhu technického řešení přes optimalizaci nákladů a výběr vhodných materiálů až po samotnou montáž a následný záruční servis.
            </p>

            <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid var(--accent-amber-border)', borderRadius: 'var(--radius-sm)', padding: '1.25rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-amber)', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                Členství v profesních organizacích
              </span>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', margin: 0 }}>
                Společnost je od svého vzniku hrdým členem <strong>Cechu strechárov Slovenska</strong> a úzce spolupracuje s předními cechy a zkušebnami v České republice i zahraničí.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="https://www.novadach.sk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                <span>Slovenská centrála (novadach.sk)</span>
                <ExternalLink size={14} />
              </a>
              <Link href="/certifikacie" className="btn btn-outline-amber">
                <span>Zobrazit ISO certifikáty</span>
              </Link>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ 
              position: 'relative', 
              height: '420px', 
              borderRadius: 'var(--radius-lg)', 
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <Image
                src="/images/referencie/BTC-Pradiaren-Bratislava-2019-2021.jpg"
                alt="Historie a moderní technologie NOVADACH"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                style={{ objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to top, rgba(11, 15, 20, 0.9) 0%, transparent 50%)' 
              }} />
              <div style={{ position: 'absolute', bottom: '1.75rem', left: '1.75rem', right: '1.75rem' }}>
                <span style={{ color: 'var(--accent-amber)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase' }}>
                  Historická konverze Pradiareň 1900
                </span>
                <p style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginTop: '0.2rem' }}>
                  Spojení 30letých řemeslných tradic s nejnovějšími technologiemi 21. století.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div style={{ marginTop: '5rem' }}>
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <span className="section-tag">Odborníci za každým projektem</span>
            <h2 className="section-title">
              Vedení a klíčový <span className="text-gradient">tým společnosti</span>
            </h2>
            <p className="section-subtitle">
              Představujeme vám naše ředitele, projektové manažery a techniky, kteří osobně ručí za kvalitu každé stavby.
            </p>
          </div>

          <TeamSection />
        </div>
      </div>
    </div>
  );
}
