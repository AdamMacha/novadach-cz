import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ServicesGrid.module.css';
import { servicesData } from '@/data/servicesData';
import { ArrowUpRight, Check } from 'lucide-react';

export default function ServicesGrid({ limit }: { limit?: number }) {
  const displayServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <div className={styles.grid}>
      {displayServices.map((service, index) => {
        return (
          <Link
            key={service.id}
            href={`/sluzby/${service.slug}`}
            className={styles.card}
          >
            {/* Real Project Image Backdrop */}
            <div className={styles.imageCanvas}>
              <Image
                src={service.image}
                alt={`${service.title} – realizace NOVADACH CZ`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.bgImage}
              />
              <div className={styles.imageOverlay} />
            </div>

            {/* Card Content Overlay */}
            <div className={styles.cardContent}>
              <div className={styles.cardTop}>
                <span className={styles.badge}>{service.badge}</span>
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
                <span className={styles.linkText}>Technické specifikace &amp; materiály</span>
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
