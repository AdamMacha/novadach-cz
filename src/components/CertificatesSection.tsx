'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './CertificatesSection.module.css';
import { companyData } from '@/data/companyData';
import { ShieldCheck, Award, Download, CheckCircle, ZoomIn, X } from 'lucide-react';

export default function CertificatesSection() {
  const [zoomCert, setZoomCert] = useState<string | null>(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.introBox}>
        <div className={styles.badge}>
          <Award size={15} />
          <span>Mezinárodní normy kvality</span>
        </div>
        <h3 className={styles.introTitle}>
          Certifikace ISO jako garance pro výběrová řízení a tendry v ČR
        </h3>
        <p className={styles.introDesc}>
          Jsme držiteli tří klíčových certifikací prověřených nezávislým certifikačním orgánem. Splňujeme veškeré legislativní a technické požadavky pro účast ve veřejných zakázkách i velkých soukromých tendrech.
        </p>
      </div>

      <div className={styles.grid}>
        {companyData.certificates.map((cert) => (
          <div key={cert.code} className={`glass-card ${styles.card}`}>
            <div className={styles.certPreview} onClick={() => setZoomCert(cert.image)}>
              <Image
                src={cert.image}
                alt={cert.code}
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className={styles.certImg}
              />
              <div className={styles.certOverlay}>
                <ZoomIn size={24} className={styles.zoomIcon} />
                <span>Zvětšit certifikát</span>
              </div>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.codeRow}>
                <ShieldCheck size={18} className={styles.shieldIcon} />
                <span className={styles.certCode}>{cert.code}</span>
              </div>

              <h4 className={styles.certName}>{cert.name}</h4>
              <p className={styles.certDesc}>{cert.desc}</p>

              <div className={styles.certFooter}>
                <a
                  href={cert.image}
                  download
                  className={styles.downloadLink}
                  title="Stáhnout v tiskové kvalitě"
                >
                  <Download size={14} />
                  <span>Stáhnout certifikát</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox for certificate zoom */}
      {zoomCert && (
        <div className={styles.zoomOverlay} onClick={() => setZoomCert(null)}>
          <div className={styles.zoomModal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setZoomCert(null)}
              aria-label="Zavřít"
            >
              <X size={24} />
            </button>
            <div className={styles.zoomImgWrapper}>
              <Image
                src={zoomCert}
                alt="Certifikát ISO"
                width={800}
                height={1132}
                className={styles.fullCertImg}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
