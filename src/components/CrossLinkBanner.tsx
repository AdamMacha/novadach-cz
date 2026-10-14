import React from 'react';
import styles from './CrossLinkBanner.module.css';
import { ExternalLink, ShieldCheck, MapPin } from 'lucide-react';

export default function CrossLinkBanner() {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className={styles.pulseDot} />
            <span className={styles.tag}>Skupina NOVADACH</span>
            <p className={styles.text}>
              <strong>Tradice od roku 1993:</strong> Česká pobočka pro tuzemské investory se silným zázemím slovenské mateřské centrály.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.links}>
              <span className={styles.activeRegion}>
                <span className={styles.flag}>🇨🇿</span> Česko (Aktivní)
              </span>
              <a 
                href="https://www.novadach.sk" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.skLink}
                title="Přejít na slovenskou mateřskou centrálu novadach.sk"
              >
                <span className={styles.flag}>🇸🇰</span> Slovenská centrála (novadach.sk)
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
