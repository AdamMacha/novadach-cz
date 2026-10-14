'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ReferencesGallery.module.css';
import { referencesData, ReferenceProject } from '@/data/referencesData';
import { MapPin, Calendar, Check, ArrowRight, X, ExternalLink, ShieldCheck } from 'lucide-react';

interface Props {
  initialFilter?: string;
  limit?: number;
}

export default function ReferencesGallery({ initialFilter = 'all', limit }: Props) {
  const [filter, setFilter] = useState(initialFilter);
  const [activeModalProject, setActiveModalProject] = useState<ReferenceProject | null>(null);

  const filterOptions = [
    { id: 'all', label: 'Všechny projekty' },
    { id: 'cz', label: '🇨🇿 Realizace v Česku' },
    { id: 'sk', label: '🇸🇰 Slovenské megaprojekty' },
    { id: 'prumysl', label: 'Průmysl & Logistika' },
    { id: 'doprava', label: 'Dopravní & Inženýrské' },
    { id: 'komerce', label: 'Obchod & Rezidence' },
  ];

  const filteredProjects = referencesData.filter((p) => {
    if (filter === 'cz') return p.country === 'CZ';
    if (filter === 'sk') return p.country === 'SK';
    if (filter === 'prumysl') return p.category === 'Průmysl & Logistika';
    if (filter === 'doprava') return p.category === 'Dopravní & Inženýrské stavby';
    if (filter === 'komerce') return p.category === 'Obchod & Retail' || p.category === 'Rezidence & Administrativa';
    return true;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <div className={styles.wrapper}>
      {/* Filter Tabs */}
      <div className={styles.filterBar}>
        {filterOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setFilter(opt.id)}
            className={`${styles.filterBtn} ${filter === opt.id ? styles.activeFilter : ''}`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className={styles.grid}>
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            className={`glass-card ${styles.card}`}
            onClick={() => setActiveModalProject(project)}
          >
            {/* Image box */}
            <div className={styles.imageBox}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.image}
              />
              <div className={styles.imageOverlay} />
              
              <div className={styles.cardBadges}>
                <span className={project.country === 'CZ' ? 'badge-cz' : 'badge-sk'}>
                  {project.country === 'CZ' ? '🇨🇿 Česko' : '🇸🇰 Slovensko'}
                </span>
                {project.badge && (
                  <span className={styles.highlightBadge}>{project.badge}</span>
                )}
              </div>

              <div className={styles.yearTag}>
                <Calendar size={12} />
                <span>{project.year}</span>
              </div>
            </div>

            {/* Content box */}
            <div className={styles.contentBox}>
              <div className={styles.locRow}>
                <MapPin size={13} className={styles.locIcon} />
                <span>{project.location}</span>
              </div>

              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.subtitle}>{project.subtitle}</p>

              <div className={styles.servicesList}>
                {project.services.slice(0, 2).map((srv, i) => (
                  <div key={i} className={styles.srvItem}>
                    <Check size={13} className={styles.srvCheck} />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>

              <div className={styles.viewDetailRow}>
                <span className={styles.viewDetailText}>Zobrazit technické detaily</span>
                <ArrowRight size={14} className={styles.arrowIcon} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox for Project Details */}
      {activeModalProject && (
        <div className={styles.modalOverlay} onClick={() => setActiveModalProject(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.modalCloseBtn}
              onClick={() => setActiveModalProject(null)}
              aria-label="Zavřít detail"
            >
              <X size={22} />
            </button>

            <div className={styles.modalGrid}>
              <div className={styles.modalImageBox}>
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className={styles.modalImage}
                />
              </div>

              <div className={styles.modalInfoBox}>
                <div className={styles.modalBadges}>
                  <span className={activeModalProject.country === 'CZ' ? 'badge-cz' : 'badge-sk'}>
                    {activeModalProject.country === 'CZ' ? '🇨🇿 Česká republika' : '🇸🇰 Slovenská republika'}
                  </span>
                  <span className={styles.categoryPill}>{activeModalProject.category}</span>
                </div>

                <h2 className={styles.modalTitle}>{activeModalProject.title}</h2>
                <p className={styles.modalSubtitle}>{activeModalProject.subtitle}</p>

                <div className={styles.metaRow}>
                  <div className={styles.metaCol}>
                    <span className={styles.metaLabel}>Lokalita:</span>
                    <span className={styles.metaVal}>{activeModalProject.location}</span>
                  </div>
                  <div className={styles.metaCol}>
                    <span className={styles.metaLabel}>Realizace:</span>
                    <span className={styles.metaVal}>{activeModalProject.year}</span>
                  </div>
                </div>

                <div className={styles.modalDesc}>
                  <p>{activeModalProject.description}</p>
                </div>

                <div className={styles.scopeBox}>
                  <h4 className={styles.scopeHeading}>Rozsah dodávky a technologií:</h4>
                  <ul className={styles.scopeList}>
                    {activeModalProject.services.map((srv, idx) => (
                      <li key={idx}><Check size={14} className={styles.scopeCheck} /> {srv}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.modalCta}>
                  <Link
                    href={`/kontakt?reference=${encodeURIComponent(activeModalProject.title)}`}
                    className="btn btn-primary"
                    onClick={() => setActiveModalProject(null)}
                  >
                    <span>Poptat podobné řešení</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
