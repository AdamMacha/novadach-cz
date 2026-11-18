import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getReferenceById, getReferenceImages, referencesData } from '@/data/referencesData';
import { servicesData } from '@/data/servicesData';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLdScript from '@/components/JsonLdScript';
import { buildBreadcrumbJsonLd, buildReferenceJsonLd } from '@/lib/jsonLd';
import { buildPageMetadata } from '@/lib/seo';
import styles from './detail.module.css';
import { ArrowRight, Calendar, Check, MapPin } from 'lucide-react';

export function generateStaticParams() {
  return referencesData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getReferenceById(id);
  if (!project) {
    return {};
  }

  return buildPageMetadata({
    title: `${project.title} – ${project.subtitle}`,
    description: `${project.description} Lokalita: ${project.location}. Realizace NOVADACH CZ.`,
    path: `/referencie/${project.id}`,
    ogTitle: `${project.title} | Reference NOVADACH CZ`,
    ogDescription: project.description,
    ogType: 'article',
    imagePath: project.image,
    imageAlt: `${project.title} – ${project.subtitle} (${project.location})`,
    keywords: [
      project.title,
      project.location,
      project.category,
      ...project.services,
      ...(project.details?.technologies ?? []),
    ],
  });
}

export default async function ReferenceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getReferenceById(id);

  if (!project) {
    notFound();
  }

  const images = getReferenceImages(project);
  const relatedServices = servicesData.filter((s) => s.referenceIds.includes(project.id));
  const otherProjects = referencesData
    .filter((p) => p.id !== project.id && (p.country === project.country || p.featured))
    .slice(0, 3);

  const breadcrumbs = [
    { name: 'Úvod', path: '/' },
    { name: 'Reference', path: '/referencie' },
    { name: project.title, path: `/referencie/${project.id}` },
  ];

  return (
    <div className={styles.pageWrapper}>
      <JsonLdScript data={buildBreadcrumbJsonLd(breadcrumbs)} />
      <JsonLdScript data={buildReferenceJsonLd(project)} />

      <div className="container">
        <Breadcrumbs items={breadcrumbs} />

        {/* Project Hero */}
        <section className={`glass-card ${styles.heroCard}`}>
          <div>
            <div className={styles.badgesRow}>
              <span className={project.country === 'CZ' ? 'badge-cz' : 'badge-sk'}>
                {project.country === 'CZ' ? '🇨🇿 Česká republika' : '🇸🇰 Slovenská republika'}
              </span>
              <span className={styles.categoryPill}>{project.category}</span>
            </div>

            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.subtitle}>{project.subtitle}</p>

            <div className={styles.metaGrid}>
              <div>
                <span className={styles.metaLabel}>Lokalita stavby</span>
                <span className={styles.metaVal}>
                  <MapPin size={14} style={{ display: 'inline', marginRight: '0.3rem', color: 'var(--accent-amber)' }} />
                  {project.location}
                </span>
              </div>
              <div>
                <span className={styles.metaLabel}>Období / Oblast</span>
                <span className={styles.metaVal}>
                  <Calendar size={14} style={{ display: 'inline', marginRight: '0.3rem', color: 'var(--accent-amber)' }} />
                  {project.year}
                </span>
              </div>
            </div>

            <p className={styles.description}>{project.description}</p>

            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <Link
                href={`/kontakt?reference=${encodeURIComponent(project.title)}`}
                className="btn btn-primary"
              >
                <span>Poptat podobnou realizaci</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/referencie" className="btn btn-secondary">
                <span>Všechny reference</span>
              </Link>
            </div>
          </div>

          <div className={styles.heroImageBox}>
            <Image
              src={project.image}
              alt={`${project.title} – ${project.subtitle}`}
              fill
              preload
              sizes="(max-width: 960px) 100vw, 520px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>

        {/* Scope & Technologies */}
        <section className={styles.detailsGrid}>
          <div className={`glass-card ${styles.panelCard}`}>
            <h2 className={styles.panelHeading}>Rozsah dodávky a provedené práce</h2>
            {project.details?.scope && (
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Předmět díla:</strong> {project.details.scope}
              </p>
            )}
            <ul className={styles.scopeList}>
              {project.services.map((srv, idx) => (
                <li key={idx} className={styles.scopeItem}>
                  <Check size={16} style={{ color: 'var(--accent-amber)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>{srv}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`glass-card ${styles.panelCard}`}>
            <h2 className={styles.panelHeading}>Použité technologie &amp; související služby</h2>
            {project.details?.technologies && project.details.technologies.length > 0 && (
              <div className={styles.techTags} style={{ marginBottom: '1.5rem' }}>
                {project.details.technologies.map((tech, idx) => (
                  <span key={idx} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {relatedServices.length > 0 && (
              <div>
                <h3 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Kategorie služeb:
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {relatedServices.map((srv) => (
                    <Link
                      key={srv.slug}
                      href={`/sluzby/${srv.slug}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.65rem 0.9rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                      }}
                    >
                      <span>{srv.title}</span>
                      <ArrowRight size={14} style={{ color: 'var(--accent-amber)' }} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Project Photo Gallery if multiple images */}
        {images.length > 1 && (
          <section className={styles.gallerySection}>
            <h2 className={styles.sectionHeading}>Fotodokumentace stavby</h2>
            <div className={styles.galleryGrid}>
              {images.map((img, idx) => (
                <div key={img} className={styles.galleryItem}>
                  <Image
                    src={img}
                    alt={`${project.title} – fotografie z realizace ${idx + 1}`}
                    fill
                    sizes="(max-width: 960px) 100vw, 400px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Other References */}
        <section>
          <h2 className={styles.sectionHeading}>Další vybrané realizace</h2>
          <div className={styles.relatedGrid}>
            {otherProjects.map((other) => (
              <Link
                key={other.id}
                href={`/referencie/${other.id}`}
                className={`glass-card ${styles.relatedCard}`}
              >
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {other.location}
                </span>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{other.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{other.subtitle}</p>
                <span style={{ marginTop: 'auto', paddingTop: '0.5rem', fontSize: '0.85rem', color: 'var(--accent-amber)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
                  <span>Zobrazit realizaci</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

