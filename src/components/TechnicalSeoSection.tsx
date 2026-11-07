import React from 'react';
import Link from 'next/link';
import { technicalClusters, seoFaqData } from '@/data/servicesData';
import styles from './TechnicalSeoSection.module.css';
import { Layers, HelpCircle, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function TechnicalSeoSection() {
  return (
    <section className="section section-darker" id="technologie-a-materialy" aria-labelledby="tech-seo-heading">
      <div className="container">
        {/* Part 1: Technical Material & System Matrix */}
        <div className="section-header">
          <span className="section-tag">Certifikované materiály & Systémy</span>
          <h2 className="section-title" id="tech-seo-heading">
            Přehled technologií pro <span className="text-gradient">ploché střechy, opláštění a hydroizolace</span>
          </h2>
          <p className="section-subtitle">
            Realizujeme kompletní souvrství střešních a obvodových plášťů, tepelné izolace, izolace proti tlakové vodě a radonu, tunelové izolace i ocelové a klempířské konstrukce.
          </p>
        </div>

        <div className={styles.clustersGrid}>
          {technicalClusters.map((cluster, idx) => (
            <article key={idx} className={`glass-card ${styles.clusterCard}`}>
              <div className={styles.clusterHeader}>
                <div className={styles.clusterIcon}>
                  <Layers size={20} />
                </div>
                <div>
                  <span className={styles.clusterSub}>{cluster.subtitle}</span>
                  <h3 className={styles.clusterTitle}>{cluster.title}</h3>
                </div>
              </div>
              <p className={styles.clusterDesc}>{cluster.description}</p>
              <div className={styles.tagsWrap}>
                {cluster.tags.map((tag, tIdx) => (
                  <span key={tIdx} className={styles.techTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Part 2: Technical FAQ for Investors, General Contractors & Designers */}
        <div className={styles.faqWrapper}>
          <div className={styles.faqHeader}>
            <span className="section-tag">Odborné poradenství & Technické dotazy</span>
            <h2 className={styles.faqMainTitle}>
              Často kladené dotazy k realizaci <span className="text-gradient">střech, fasád a izolací</span>
            </h2>
          </div>

          <div className={styles.faqGrid}>
            {seoFaqData.map((faq, idx) => (
              <article key={idx} className={`glass-card ${styles.faqCard}`}>
                <h3 className={styles.faqQuestion}>
                  <HelpCircle size={18} className={styles.faqIcon} />
                  <span>{faq.question}</span>
                </h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </article>
            ))}
          </div>

          <div className={styles.seoSummaryBar}>
            <div className={styles.seoSummaryText}>
              <CheckCircle2 size={20} className={styles.summaryIcon} />
              <p>
                <strong>Kompletní dodávka v ČR a SR:</strong> Montáž střešních plášťů, trapézových plechů, stěnových a střešních sendvičových panelů (Kingspan), fóliových střech (PVC, mPVC, Fatrafol, TPO), asfaltových pásů (SBS, APP, samolepicí asfaltové pásy, parozábrany), tepelných izolací (PIR, minerální vata MW, kamenná vata, polystyren EPS, XPS), hydroizolací základů a tunelů proti tlakové vodě a radonu (Dualproof, HDPE / PE-HD), montáž ocelových výměn, tenkostěnné výměny a klempířské prvky.
              </p>
            </div>
            <Link href="/kontakt" className="btn btn-primary">
              <span>Nezávazná kalkulace stavby</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

