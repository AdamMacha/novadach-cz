import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import ReferencesGallery from '@/components/ReferencesGallery';
import CertificatesSection from '@/components/CertificatesSection';
import TechnicalSeoSection from '@/components/TechnicalSeoSection';
import ContactForm from '@/components/ContactForm';
import styles from './page.module.css';
import {
  Building2,
  Award,
  CheckCircle2,
  MapPin,
  PhoneCall,
  FileCheck,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. Services Section */}
      <section className="section" id="sluzby">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Komplexní řetězec dodávky</span>
            <h2 className="section-title">
              Služby a technologie pro <span className="text-gradient">moderní stavitelství</span>
            </h2>
            <p className="section-subtitle">
              Od technického posouzení a optimalizace rozpočtu, přes montáž nosných konstrukcí až po kolaudaci a záruční servis.
            </p>
          </div>

          <ServicesGrid limit={6} />

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/sluzby" className="btn btn-secondary">
              <span>Zobrazit kompletní technický katalog služeb</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Strategic Synergies CZ / SK & 30+ Years Tradition */}
      <section className="section section-darker" id="proc-novadach">
        <div className="container">
          <div className={styles.synergyGrid}>
            <div>
              <span className="section-tag">Zázemí & Mezinárodní kapacita</span>
              <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
                Proč svěřit střešní a fasádní pláště skupině <span className="text-gradient">NOVADACH</span>?
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '2.25rem', textAlign: 'left' }}>
                Čeští investoři, generální dodavatelé a architekti v nás získávají partnera, který spojuje lokální flexibilitu pro český trh s více než třicetiletým zázemím silné slovenské stavební skupiny.
              </p>

              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIconBox}>
                    <Building2 size={22} />
                  </div>
                  <div>
                    <h3 className={styles.featureTitle}>
                      Kapacita pro náročné průmyslové projekty
                    </h3>
                    <p className={styles.featureDesc}>
                      Úspěšně zvládáme desetitisíce metrů čtverečních v přísných termínech. Reference zahrnují automobilku Volkswagen, novou Gigafactory Volvo Cars Valaliky, mrakodrap Eurovea 2 či Tunel Blanka v Praze.
                    </p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIconBox}>
                    <Zap size={22} />
                  </div>
                  <div>
                    <h3 className={styles.featureTitle}>
                      Vlastní dílenská výroba klempířských prvků
                    </h3>
                    <p className={styles.featureDesc}>
                      Vyrábíme atiky, lišty a lemování na vlastních ohýbačkách z poplastovaného plechu, hliníku, titanzinku i mědi. Žádná zpoždění externích dodávek.
                    </p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIconBox}>
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 className={styles.featureTitle}>
                      Plná certifikace ISO a shoda s normami ČSN / EN
                    </h3>
                    <p className={styles.featureDesc}>
                      Držíme certifikace ISO 9001 (Kvalita), ISO 14001 (Životní prostředí) a ISO 45001 (BOZP). Garance splnění veškerých podmínek tendrů v České republice.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.actionRow}>
                <Link href="/o-nas" className="btn btn-primary">
                  <span>O společnosti a personálním týmu</span>
                  <ArrowUpRight size={16} />
                </Link>
                <Link href="/certifikacie" className="btn btn-secondary">
                  <span>Zobrazit ISO certifikáty</span>
                </Link>
              </div>
            </div>

            {/* Right: Architectural showcase card */}
            <div className={styles.showcaseCardWrapper}>
              <div className={styles.showcaseCard}>
                <Image
                  src="/images/referencie/Eurovea-2.jpg"
                  alt="Realizace NOVADACH"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.showcaseGradient} />

                <div className={styles.showcaseBadgeTop}>
                  EUROVEA 2 BRATISLAVA
                </div>

                <div className={styles.showcaseContentBottom}>
                  <h3 className={styles.showcaseTitle}>
                    První mrakodrap na Slovensku (168 m)
                  </h3>
                  <p className={styles.showcaseDesc}>
                    Dodávka a montáž střešních plášťů, izolace spodní stavby proti tlakové vodě a kompletní klempířské práce.
                  </p>
                  <div className={styles.showcaseTags}>
                    <span className={styles.showcaseTag}>Střešní pláště</span>
                    <span className={styles.showcaseTag}>Izolace základů</span>
                    <span className={styles.showcaseTag}>Klempířství</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. References Portfolio Showcase */}
      <section className="section" id="reference">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Ověřené reference v praxi</span>
            <h2 className="section-title">
              Výběr z realizovaných <span className="text-gradient">projektů v ČR a SR</span>
            </h2>
            <p className="section-subtitle">
              Každý projekt je podložen konkrétním technologickým řešením a fotodokumentací z montáže. Filtrujte podle lokality nebo typu budovy:
            </p>
          </div>

          <ReferencesGallery limit={6} />

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link href="/referencie" className="btn btn-primary">
              <span>Zobrazit kompletní portfolio všech referencí</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Certificates Spotlight */}
      <section className="section section-darker" id="certifikace">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Systém řízení jakosti</span>
            <h2 className="section-title">
              Mezinárodní certifikace <span className="text-gradient">ISO 9001 / 14001 / 45001</span>
            </h2>
            <p className="section-subtitle">
              Pravidelně auditované procesy řízení kvality, ekologie a bezpečnosti montáží ve výškách jako standard pro každou stavbu.
            </p>
          </div>

          <CertificatesSection />
        </div>
      </section>

      {/* 5b. Technical Material Matrix & SEO FAQ Hub */}
      <TechnicalSeoSection />

      {/* 6. Contact / Inquiry Section */}
      <section className="section" id="poptavka">
        <div className="container">
          <div className={styles.inquiryGrid}>
            <div className={styles.inquiryInfoCol}>
              <span className="section-tag">Poptávka a kalkulace do tendru</span>
              <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
                Připravujete stavbu nebo rekonstrukci střechy?
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '2.25rem', textAlign: 'left' }}>
                Zašlete nám projektovou dokumentaci, výkaz výměr nebo zadání výběrového řízení. Náš tým přípravy staveb zpracuje položkový rozpočet a technický návrh souvrství.
              </p>

              <div className={styles.contactCardsList}>
                <div className={styles.contactCardItem}>
                  <div className={styles.contactIconBox}>
                    <PhoneCall size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Poptávky a tendry ČR</span>
                    <a href="tel:+420730827769" style={{ display: 'block', fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', textDecoration: 'none' }}>
                      +420 730 827 769
                    </a>
                  </div>
                </div>

                <div className={styles.contactCardItem}>
                  <div className={styles.contactIconBox}>
                    <FileCheck size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Zasílání projektových podkladů</span>
                    <a href="mailto:obchod@novadach.cz" style={{ display: 'block', fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', textDecoration: 'none' }}>
                      obchod@novadach.cz
                    </a>
                  </div>
                </div>

                <div className={styles.contactCardItem}>
                  <div className={styles.contactIconBox}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sídlo společnosti v ČR</span>
                    <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#ffffff' }}>Naskové 1189/1u, Košíře, 150 00 Praha 5</p>
                  </div>
                </div>
              </div>

              {/* HQ Slovak Info Card */}
              <div className={styles.hqCard}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-amber)', textTransform: 'uppercase' }}>
                  🇸🇰 Zázemí mateřské centrály
                </span>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                  NOVADACH s.r.o., Stará Vajnorská 27, 831 04 Bratislava, Slovensko. Oficiální slovenský web:{' '}
                  <a href="https://www.novadach.sk" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'underline' }}>
                    novadach.sk
                  </a>
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className={styles.inquiryFormCol}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
