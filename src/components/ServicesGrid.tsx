import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ServicesGrid.module.css';
import { servicesData } from '@/data/servicesData';
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';

const serviceImages: Record<string, string> = {
  'stresne-plaste': '/images/referencie/VW-H1_1.jpg',
  'fasady': '/images/referencie/THE-MILL_1.jpg',
  'izolacie': '/images/referencie/blanka_razba12-1.jpg',
  'fasadne-obklady': '/images/referencie/UNIPHARMA-Bojnice-2.jpg',
  'ocelove-konstrukcie': '/images/referencie/BERGAMON-SO206-2.jpg',
  'klampiarske-konstrukcie': '/images/referencie/AS-NIVY-_2.jpg',
};

const serviceBadges: Record<string, string> = {
  'stresne-plaste': 'Ploché střechy & Trapézy',
  'fasady': 'Sendvičové panely PIR',
  'izolacie': 'Tlaková voda & Tunely',
  'fasadne-obklady': 'Kompozitní BOND',
  'ocelove-konstrukcie': 'Pomocné rošty a výměny',
  'klampiarske-konstrukcie': 'Vlastní CNC klempírna',
};

export default function ServicesGrid({ limit }: { limit?: number }) {
  const displayServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <div className={styles.grid}>
      {displayServices.map((service, index) => {
        const img = serviceImages[service.id] || '/images/referencie/VW-H1_1.jpg';
        const badge = serviceBadges[service.id] || 'Specializace';

        return (
          <Link
            key={service.id}
            href={`/sluzby#${service.id}`}
            className={styles.card}
          >
            {/* Real Project Image Backdrop */}
            <div className={styles.imageCanvas}>
              <Image
                src={img}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.bgImage}
              />
              <div className={styles.imageOverlay} />
            </div>

            {/* Card Content Overlay */}
            <div className={styles.cardContent}>
              <div className={styles.cardTop}>
                <span className={styles.badge}>{badge}</span>
                <span className={styles.indexNum}>0{index + 1}</span>
              </div>

              <div className={styles.cardMain}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.desc}>{service.shortDesc}</p>

                <div className={styles.tagsRow}>
                  {service.benefits.slice(0, 2).map((b, i) => (
                    <span key={i} className={styles.tagItem}>
                      <Check size={12} className={styles.tagCheck} /> {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.cardBottom}>
                <span className={styles.linkText}>Technické specifikace & materiály</span>
                <div className={styles.arrowCircle}>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
