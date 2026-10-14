import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import ReferencesGallery from '@/components/ReferencesGallery';
import CertificatesSection from '@/components/CertificatesSection';
import ContactForm from '@/components/ContactForm';
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

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="section-tag">Zázemí & Mezinárodní kapacita</span>
              <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>
                Proč svěřit střešní a fasádní pláště skupině <span className="text-gradient">NOVADACH</span>?
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '2.25rem', fontSize: '1.05rem', textAlign: 'left' }}>
                Čeští investoři, generální dodavatelé a architekti v nás získávají partnera, který spojuje lokální flexibilitu pro český trh s více než třicetiletým zázemím silné slovenské stavební skupiny.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '44px', 
                    height: '44px', 
                    borderRadius: '8px', 
                    background: 'rgba(245, 158, 11, 0.1)', 
                    border: '1px solid rgba(245, 158, 11, 0.25)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'var(--accent-amber)', 
                    flexShrink: 0 
                  }}>
                    <Building2 size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.35rem' }}>
                      Kapacita pro náročné průmyslové megaprojekty
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      Úspěšně zvládáme desetitisíce metrů čtverečních v přísných termínech. Reference zahrnují automobilku Volkswagen, novou Gigafactory Volvo Cars Valaliky, mrakodrap Eurovea 2 či Tunel Blanka v Praze.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '44px', 
                    height: '44px', 
                    borderRadius: '8px', 
                    background: 'rgba(245, 158, 11, 0.1)', 
                    border: '1px solid rgba(245, 158, 11, 0.25)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'var(--accent-amber)', 
                    flexShrink: 0 
                  }}>
                    <Zap size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.35rem' }}>
                      Vlastní dílenská výroba klempířských prvků
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      Vyrábíme atiky, lišty a lemování na vlastních CNC ohýbačkách z poplastovaného plechu, hliníku, titanzinku i mědi. Žádná zpoždění externích dodávek.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '44px', 
                    height: '44px', 
                    borderRadius: '8px', 
                    background: 'rgba(245, 158, 11, 0.1)', 
                    border: '1px solid rgba(245, 158, 11, 0.25)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'var(--accent-amber)', 
                    flexShrink: 0 
                  }}>
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.35rem' }}>
                      Plná certifikace ISO a shoda s normami ČSN / EN
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      Držíme certifikace ISO 9001 (Kvalita), ISO 14001 (Životní prostředí) a ISO 45001 (BOZP). Garance splnění veškerých podmínek tendrů v České republice.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
            <div style={{ position: 'relative' }}>
              <div style={{ 
                position: 'relative', 
                height: '520px', 
                borderRadius: '16px', 
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)'
              }}>
                <Image
                  src="/images/referencie/Eurovea-2.jpg"
                  alt="Realizace NOVADACH"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to top, rgba(11, 15, 21, 0.95) 0%, rgba(11, 15, 21, 0.3) 60%, transparent 100%)' 
                }} />

                <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
                  <span style={{ 
                    background: 'rgba(11, 15, 21, 0.85)', 
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    color: 'var(--accent-amber)', 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    padding: '0.35rem 0.75rem', 
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}>
                    EUROVEA 2 BRATISLAVA
                  </span>
                </div>

                <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    První mrakodrap na Slovensku (168 m)
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '1rem' }}>
                    Dodávka a montáž střešních plášťů, izolace spodní stavby proti tlakové vodě a kompletní klempířské práce.
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', color: '#ffffff' }}>Střešní pláště</span>
                    <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', color: '#ffffff' }}>Izolace základů</span>
                    <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', color: '#ffffff' }}>Klempířství</span>
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

      {/* 6. Contact / Inquiry Section */}
      <section className="section" id="poptavka">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '4rem', alignItems: 'flex-start' }}>
            <div>
              <span className="section-tag">Poptávka a kalkulace do tendru</span>
              <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>
                Připravujete stavbu nebo rekonstrukci střechy?
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '2.25rem', fontSize: '1.05rem', textAlign: 'left' }}>
                Zašlete nám projektovou dokumentaci, výkaz výměr nebo zadání výběrového řízení. Náš tým přípravy staveb zpracuje položkový rozpočet a technický návrh souvrství.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{ 
                    width: '46px', 
                    height: '46px', 
                    borderRadius: '8px', 
                    background: 'rgba(245, 158, 11, 0.1)', 
                    color: 'var(--accent-amber)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <PhoneCall size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Poptávky a tendry ČR</span>
                    <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>+420 770 123 456</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{ 
                    width: '46px', 
                    height: '46px', 
                    borderRadius: '8px', 
                    background: 'rgba(245, 158, 11, 0.1)', 
                    color: 'var(--accent-amber)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <FileCheck size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Zasílání projektových podkladů</span>
                    <p style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>poptavky@novadach.cz</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{ 
                    width: '46px', 
                    height: '46px', 
                    borderRadius: '8px', 
                    background: 'rgba(245, 158, 11, 0.1)', 
                    color: 'var(--accent-amber)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Oblast působnosti</span>
                    <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#ffffff' }}>Celá Česká republika & Slovensko</p>
                  </div>
                </div>
              </div>

              {/* HQ Slovak Info Card */}
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                border: '1px solid rgba(255, 255, 255, 0.08)', 
                borderRadius: '8px', 
                padding: '1.25rem' 
              }}>
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
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
