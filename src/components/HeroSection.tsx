'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.css';
import { ArrowRight, ChevronRight, ShieldCheck, MapPin, Building, ArrowUpRight } from 'lucide-react';

interface Slide {
  id: string;
  title: string;
  location: string;
  country: 'CZ' | 'SK';
  category: string;
  scope: string;
  year: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 'eurovea',
    title: 'EUROVEA 2, Mrakodrap & Nákupní centrum',
    location: 'Bratislava',
    country: 'SK',
    category: 'Polyfunkční & Výšková stavba',
    scope: 'Kompletní střešní pláště, izolace spodní stavby a klempířské konstrukce',
    year: '2021 – 2023',
    image: '/images/referencie/Eurovea-1.jpg'
  },
  {
    id: 'blanka',
    title: 'Tunel Blanka, Městský okruh Praha',
    location: 'Praha, Česká republika',
    country: 'CZ',
    category: '🇨🇿 Klíčová reference v ČR',
    scope: 'Speciální hydroizolace podzemních tunelových úseků a dopravních staveb',
    year: 'Praha',
    image: '/images/referencie/blanka_razba12-1.jpg'
  },
  {
    id: 'vw',
    title: 'VOLKSWAGEN Bratislava (Hala H1 + M6)',
    location: 'Bratislava Devínska Nová Ves',
    country: 'SK',
    category: 'Automobilový průmysl',
    scope: 'Nosné trapézové plechy, zateplení střešních plášťů a certifikované záchytné systémy',
    year: '2022 – 2023',
    image: '/images/referencie/VW-H1_1.jpg'
  },
  {
    id: 'volvo',
    title: 'VOLVO CARS Valaliky (Košice)',
    location: 'Valaliky u Košic',
    country: 'SK',
    category: 'Nová Gigafactory',
    scope: 'Průmyslové střešní pláště a velkorozponové trapézové plechy',
    year: '2023 – 2024',
    image: '/images/referencie/Valaliky_2023_10_9.jpg'
  }
];

export default function HeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-advance slowly if user does not interact
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIdx];

  return (
    <section className={styles.heroWrapper}>
      {/* Dynamic Background Image Layers with crossfade */}
      <div className={styles.bgCanvas}>
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`${styles.bgSlide} ${idx === activeIdx ? styles.bgSlideActive : ''}`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              priority={idx === 0}
              sizes="100vw"
              className={styles.bgImage}
            />
          </div>
        ))}
        {/* Architectural Vignette & Gradient Overlays */}
        <div className={styles.vignetteOverlay} />
        <div className={styles.gridLinesOverlay} />
      </div>

      <div className={styles.contentContainer}>
        {/* Main Editorial Text & Value Proposition */}
        <div className={styles.heroContent}>
          <div className={styles.metaHeader}>
            <span className={styles.metaSub}>SKUPINA NOVADACH • TRADICE OD ROKU 1993</span>
            <span className={styles.metaDivider}>/</span>
            <span className={styles.metaRegion}>PŮSOBNOST PRO ČESKOU REPUBLIKU & SLOVENSKO</span>
          </div>

          <h1 className={styles.heroTitle}>
            Specialisté na <span className={styles.titleHighlight}>střešní pláště</span>, skládané fasády a speciální izolace
          </h1>

          <p className={styles.heroLead}>
            Kompletní dodávka obvodových plášťů, nosných trapézových plechů, sendvičových panelů a hydroizolací pro průmyslové haly, logistické areály a komerční budovy. Dlouhodobě prověřený partner v České republice i na Slovensku.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/kontakt" className={styles.primaryCta}>
              <span>Poptat realizaci projektu</span>
              <ArrowUpRight size={18} />
            </Link>
            <Link href="/referencie" className={styles.secondaryCta}>
              <span>Prohlédnout portfolio děl</span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>

        {/* Live Active Slide Floating Info Card */}
        <div className={styles.activeSlideCard}>
          <div className={styles.cardTop}>
            <span className={activeSlide.country === 'CZ' ? styles.czBadge : styles.skBadge}>
              {activeSlide.country === 'CZ' ? '🇨🇿 Realizace v Česku' : '🇸🇰 Slovenský megaprojekt'}
            </span>
            <span className={styles.cardYear}>{activeSlide.year}</span>
          </div>
          <h3 className={styles.cardTitle}>{activeSlide.title}</h3>
          <p className={styles.cardScope}>{activeSlide.scope}</p>
          <div className={styles.cardFooter}>
            <span className={styles.cardLoc}>
              <MapPin size={13} style={{ color: 'var(--accent-amber)' }} />
              {activeSlide.location}
            </span>
            <Link href={`/referencie#${activeSlide.id}`} className={styles.cardLink}>
              <span>Detail stavby</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Bottom Interactive Project Switcher Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.projectTabs}>
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveIdx(idx)}
                className={`${styles.projectTab} ${idx === activeIdx ? styles.projectTabActive : ''}`}
              >
                <div className={styles.tabNumber}>0{idx + 1}</div>
                <div className={styles.tabInfo}>
                  <span className={styles.tabCountry}>{s.country === 'CZ' ? '🇨🇿 ČESKO' : '🇸🇰 SLOVENSKO'}</span>
                  <span className={styles.tabName}>{s.title.split(',')[0]}</span>
                </div>
                {idx === activeIdx && <div className={styles.tabActiveBar} />}
              </button>
            ))}
          </div>

          {/* Quick Metrics */}
          <div className={styles.quickMetrics}>
            <div className={styles.metric}>
              <span className={styles.metricVal}>30+</span>
              <span className={styles.metricLbl}>Let tradice (1993)</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricVal}>250+</span>
              <span className={styles.metricLbl}>Velkých projektů</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricVal}>3x ISO</span>
              <span className={styles.metricLbl}>9001 / 14001 / 45001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
