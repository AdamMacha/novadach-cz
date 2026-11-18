import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getServiceBySlug, servicesData } from '@/data/servicesData';
import { referencesData } from '@/data/referencesData';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLdScript from '@/components/JsonLdScript';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildServiceJsonLd,
} from '@/lib/jsonLd';
import { buildPageMetadata, SK_SITE_URL } from '@/lib/seo';
import styles from './detail.module.css';
import { ArrowRight, Check, HelpCircle, MapPin, ShieldCheck, Sparkles } from 'lucide-react';

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return {};
  }

  return buildPageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/sluzby/${service.slug}`,
    skUrl: `${SK_SITE_URL}/nase-sluzby/${service.slug}/`,
    ogTitle: `${service.title} | NOVADACH CZ`,
    ogDescription: service.shortDesc,
    imagePath: service.image,
    imageAlt: `${service.title} – realizace NOVADACH CZ`,
    keywords: service.seoKeywords,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = referencesData.filter((r) => service.referenceIds.includes(r.id));
  const otherServices = servicesData.filter((s) => s.slug !== service.slug);
  const breadcrumbs = [
    { name: 'Úvod', path: '/' },
    { name: 'Služby', path: '/sluzby' },
    { name: service.title, path: `/sluzby/${service.slug}` },
  ];

  return (
    <div className={styles.pageWrapper}>
      <JsonLdScript data={buildBreadcrumbJsonLd(breadcrumbs)} />
      <JsonLdScript data={buildServiceJsonLd(service)} />
      <JsonLdScript data={buildFaqJsonLd(service.serviceFaqs, `/sluzby/${service.slug}`)} />

      <div className="container">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Card */}
        <section className={`glass-card ${styles.heroCard}`}>
          <div>
            <span className="section-tag">{service.badge}</span>
            <h1 className={styles.heroTitle}>{service.title}</h1>
            <p className={styles.heroDesc}>{service.longDesc}</p>
            <div className={styles.ctaGroup}>
              <Link
                href={`/kontakt?sluzba=${encodeURIComponent(service.title)}`}
                className="btn btn-primary"
              >
                <span>Poptat toto řešení</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/certifikacie" className="btn btn-secondary">
                <ShieldCheck size={16} />
                <span>Certifikace ISO &amp; ČSN</span>
              </Link>
            </div>
          </div>

          <div className={styles.heroImageBox}>
            <Image
              src={service.image}
              alt={`${service.title} – ukázka realizace NOVADACH CZ`}
              fill
              preload
              sizes="(max-width: 960px) 100vw, 480px"
              className={styles.heroImage}
            />
          </div>
        </section>

        {/* Features & Benefits */}
        <section className={styles.twoColGrid} aria-label="Technický rozsah a výhody">
          <div className={`glass-card ${styles.panelCard}`}>
            <h2 className={styles.panelHeading}>
              <Check size={20} style={{ color: 'var(--accent-amber)' }} />
              <span>Rozsah prací a technologií</span>
            </h2>
            <ul className={styles.list}>
              {service.features.map((feat, idx) => (
                <li key={idx} className={styles.listItem}>
                  <span className={styles.bullet}>•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`glass-card ${styles.panelCard}`}>
            <h2 className={styles.panelHeading}>
              <Sparkles size={20} style={{ color: 'var(--accent-amber)' }} />
              <span>Výhody pro investora a garance</span>
            </h2>
            <ul className={styles.list}>
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className={styles.listItem}>
                  <span className={styles.bullet}>✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Certified Materials & Technical Scope */}
        <section className={`glass-card ${styles.panelCard} ${styles.sectionBlock}`}>
          <h2 className={styles.panelHeading}>Certifikované materiály a systémy</h2>
          <div className={styles.chipsWrap} style={{ marginBottom: '1.5rem' }}>
            {service.materials.map((mat, idx) => (
              <span key={idx} className={styles.materialChip}>
                {mat}
              </span>
            ))}
          </div>

          <h3 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            Klíčové oblasti realizace:
          </h3>
          <div className={styles.chipsWrap}>
            {service.seoKeywords.map((kw, idx) => (
              <span key={idx} className={styles.kwChip}>
                {kw}
              </span>
            ))}
          </div>
        </section>

        {/* Related References */}
        {relatedProjects.length > 0 && (
          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              Referenční stavby realizované touto <span className="text-gradient">technologií</span>
            </h2>
            <div className={styles.projectsGrid}>
              {relatedProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/referencie/${project.id}`}
                  className={`glass-card ${styles.projectCard}`}
                >
                  <div className={styles.projectImgBox}>
                    <Image
                      src={project.image}
                      alt={`${project.title} – ${project.location}`}
                      fill
                      sizes="(max-width: 960px) 100vw, 380px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={styles.projectBody}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <span className={styles.projectMeta}>
                      <MapPin size={12} style={{ display: 'inline', marginRight: '0.25rem', color: 'var(--accent-amber)' }} />
                      {project.location}
                    </span>
                    <span className={styles.projectLink}>
                      <span>Detail reference</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Service Specific FAQ */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            Časté technické dotazy k této <span className="text-gradient">službě</span>
          </h2>
          <div className={styles.faqGrid}>
            {service.serviceFaqs.map((faq, idx) => (
              <article key={idx} className={`glass-card ${styles.faqCard}`}>
                <h3 className={styles.faqQuestion}>
                  <HelpCircle size={19} style={{ color: 'var(--accent-amber)', flexShrink: 0, marginTop: '0.15rem' }} />
                  <span>{faq.question}</span>
                </h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Cross-linking to Other Services */}
        <section>
          <h2 className={styles.sectionHeading}>Další specializace NOVADACH CZ</h2>
          <div className={styles.otherServicesGrid}>
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/sluzby/${other.slug}`}
                className={`glass-card ${styles.otherServiceCard}`}
              >
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-amber)', textTransform: 'uppercase' }}>
                  {other.badge}
                </span>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>{other.title}</h3>
                <span style={{ marginTop: 'auto', fontSize: '0.85rem', color: 'var(--accent-amber)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
                  <span>Zobrazit detail</span>
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

