'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { companyData } from '@/data/companyData';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top CTA Bar */}
      <div className={styles.topCta}>
        <div className="container">
          <div className={styles.topCtaInner}>
            <div className={styles.topCtaText}>
              <span className={styles.topCtaTag}>Máte stavební projekt v ČR nebo SR?</span>
              <h3 className={styles.topCtaHeading}>
                Konzultujte střešní či fasádní řešení s našimi experty
              </h3>
              <p className={styles.topCtaDesc}>
                Zpracujeme pro vás technický návrh, položkový rozpočet nebo posoudíme projektovou dokumentaci do výběrového řízení.
              </p>
            </div>
            <div className={styles.topCtaButtons}>
              <Link href="/kontakt" className="btn btn-primary">
                <span>Zaslat poptávku / výkaz</span>
                <ArrowUpRight size={16} />
              </Link>
              <a href="tel:+420770123456" className="btn btn-secondary">
                <Phone size={16} />
                <span>+420 770 123 456</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className={styles.mainFooter}>
        <div className="container">
          <div className={styles.grid}>
            {/* Col 1: About & Logos */}
            <div className={styles.colAbout}>
              <Link href="/" className={styles.footerLogo}>
                <Image
                  src="/images/logos/cropped-novadach_logo_rgb-wback-1.png"
                  alt="NOVADACH"
                  width={180}
                  height={50}
                  className={styles.logoImg}
                />
              </Link>
              <p className={styles.aboutText}>
                Stavební skupina s tradicí již od roku <strong>1993</strong>. Dodáváme komplexní řešení střešních plášťů, skládaných fasád, průmyslových izolací a klempířských prací pro pozemní, dopravní a inženýrské stavitelství v České republice i na Slovensku.
              </p>
              <div className={styles.isoPills}>
                <span className={styles.isoPill}><ShieldCheck size={14} /> ISO 9001</span>
                <span className={styles.isoPill}><ShieldCheck size={14} /> ISO 14001</span>
                <span className={styles.isoPill}><ShieldCheck size={14} /> ISO 45001</span>
              </div>
            </div>

            {/* Col 2: Services */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Služby a technologie</h4>
              <ul className={styles.linkList}>
                <li><Link href="/sluzby#stresne-plaste">Střešní pláště a ploché střechy</Link></li>
                <li><Link href="/sluzby#fasady">Fasády a sendvičové opláštění</Link></li>
                <li><Link href="/sluzby#izolacie">Hydroizolace a podzemní stavby</Link></li>
                <li><Link href="/sluzby#fasadne-obklady">Architektonické obklady BOND</Link></li>
                <li><Link href="/sluzby#ocelove-konstrukcie">Ocelové a pomocné konstrukce</Link></li>
                <li><Link href="/sluzby#klampiarske-konstrukcie">Zakázková klempířská výroba</Link></li>
              </ul>
            </div>

            {/* Col 3: Key References */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Vybrané reference</h4>
              <ul className={styles.linkList}>
                <li><Link href="/referencie#tunel-blanka">🇨🇿 Tunel Blanka, Praha</Link></li>
                <li><Link href="/referencie#lp-kunice-praha">🇨🇿 LP Kunice u Prahy</Link></li>
                <li><Link href="/referencie#oc-cerny-most-praha">🇨🇿 OC Černý Most Praha</Link></li>
                <li><Link href="/referencie#volkswagen-bratislava">🇸🇰 VOLKSWAGEN Bratislava</Link></li>
                <li><Link href="/referencie#eurovea-2">🇸🇰 EUROVEA 2 mrakodrap</Link></li>
                <li><Link href="/referencie#as-nivy">🇸🇰 Nádraží & Zelená střecha Nivy</Link></li>
                <li><Link href="/referencie#volvo-cars-valaliky">🇸🇰 Gigafactory Volvo Cars</Link></li>
              </ul>
            </div>

            {/* Col 4: Contacts CZ & SK */}
            <div className={styles.colContact}>
              <h4 className={styles.colTitle}>Kontaktní zastoupení</h4>
              
              <div className={styles.contactBlock}>
                <span className={styles.contactBlockTitle}>🇨🇿 Působnost pro Českou republiku:</span>
                <p className={styles.contactItem}><Phone size={14} /> +420 770 123 456</p>
                <p className={styles.contactItem}><Mail size={14} /> poptavky@novadach.cz</p>
              </div>

              <div className={styles.contactBlock}>
                <span className={styles.contactBlockTitle}>🇸🇰 Slovenská centrála (Sídlo skupiny):</span>
                <p className={styles.contactItem}><MapPin size={14} /> Stará Vajnorská 27, 831 04 Bratislava</p>
                <p className={styles.contactItem}><Phone size={14} /> +421 2 49 30 96 11 / +421 918 957 399</p>
                <p className={styles.contactItem}><Mail size={14} /> info@novadach.sk</p>
                <a 
                  href="https://www.novadach.sk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.skParentLink}
                >
                  Oficiální slovenský web novadach.sk <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={styles.bottomBar}>
            <p className={styles.copy}>
              © 2026 NOVADACH s.r.o. Všechna práva vyhrazena. Realizace střešních a fasádních systémů pro ČR a SR od r. 1993.
            </p>
            <div className={styles.legalInfo}>
              <span>IČO: 35 846 151</span>
              <span>•</span>
              <span>DIČ: 20 20 23 91 77</span>
              <span>•</span>
              <span>IČ DPH: SK 20 20 23 91 77</span>
              <span>•</span>
              <Link href="/certifikacie">Certifikace ČSN & ISO</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
