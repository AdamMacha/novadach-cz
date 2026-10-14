'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import { Phone, Mail, Menu, X, ArrowUpRight, ExternalLink } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Úvod' },
    { href: '/sluzby', label: 'Služby' },
    { href: '/referencie', label: 'Reference' },
    { href: '/o-nas', label: 'O nás' },
    { href: '/certifikacie', label: 'Certifikace' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.navBar}>
          {/* Brand Logo & Region Indicator */}
          <div className={styles.brandGroup}>
            <Link href="/" className={styles.logoLink} onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/logos/novadach-logo-sticky-retina.png"
                alt="NOVADACH"
                width={170}
                height={63}
                priority
                className={styles.logoImg}
              />
            </Link>
            
            <div className={styles.regionDivider} />
            
            <div className={styles.regionBadge}>
              <span className={styles.regionFlag}>🇨🇿</span>
              <span className={styles.regionText}>Česká republika</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
                >
                  {link.label}
                  {isActive && <span className={styles.activeDot} />}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Language/Region Switcher & CTA */}
          <div className={styles.rightGroup}>
            {/* Quick cross-link to Slovak HQ */}
            <div className={styles.countrySwitcher} title="Přepnout na slovenskou centrálu">
              <span className={styles.currentCountry}>CZ</span>
              <span className={styles.countryDivider}>/</span>
              <a 
                href="https://www.novadach.sk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.otherCountry}
                title="Přejít na novadach.sk (slovenská centrála)"
              >
                SK <ExternalLink size={10} style={{ marginLeft: '2px' }} />
              </a>
            </div>

            {/* Direct Phone */}
            <a href="tel:+420770123456" className={styles.phoneLink}>
              <span className={styles.phoneDot} />
              <span className={styles.phoneNum}>+420 770 123 456</span>
            </a>

            {/* CTA Button */}
            <Link href="/kontakt" className={styles.ctaButton}>
              <span>Poptat projekt</span>
              <ArrowUpRight size={15} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className={styles.mobileToggle}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Otevřít navigaci"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileNavLinks}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileNavItem} ${isActive ? styles.mobileItemActive : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{link.label}</span>
                  {isActive && <span className={styles.activePill}>Aktivní</span>}
                </Link>
              );
            })}
          </div>

          <div className={styles.mobileBottomSection}>
            <div className={styles.mobileContactBox}>
              <span className={styles.mobileContactLabel}>Poptávky a technické konzultace:</span>
              <a href="tel:+420770123456" className={styles.mobilePhoneVal}>
                <Phone size={16} /> +420 770 123 456
              </a>
              <a href="mailto:poptavky@novadach.cz" className={styles.mobileEmailVal}>
                <Mail size={16} /> poptavky@novadach.cz
              </a>
            </div>

            <div className={styles.mobileSkCross}>
              <span>Slovenská mateřská centrála:</span>
              <a href="https://www.novadach.sk" target="_blank" rel="noopener noreferrer">
                www.novadach.sk <ExternalLink size={12} />
              </a>
            </div>

            <Link
              href="/kontakt"
              className={styles.mobileCtaFull}
              onClick={() => setMobileOpen(false)}
            >
              Poptat realizaci projektu
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
