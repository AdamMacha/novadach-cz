'use client';

import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { Send, Upload, CheckCircle, AlertCircle, Phone, Mail, Clock } from 'lucide-react';

export default function ContactForm({ prefilledSubject }: { prefilledSubject?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: 'stresne-plaste',
    location: 'Česká republika',
    message: prefilledSubject ? `Poptávka pro projekt / referenci: ${prefilledSubject}` : '',
    file: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate fast submission
    setSubmitted(true);
  };

  return (
    <div className={styles.wrapper}>
      {submitted ? (
        <div className={styles.successBox}>
          <div className={styles.successIconBox}>
            <CheckCircle size={48} className={styles.successIcon} />
          </div>
          <h3 className={styles.successTitle}>Poptávka byla úspěšně odeslána!</h3>
          <p className={styles.successDesc}>
            Děkujeme za váš zájem. Náš obchodně-technický tým prostuduje vaše podklady a spojí se s vámi nejpozději do <strong>24 hodin</strong> s předběžným návrhem řešení či položkovým rozpočtem.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn btn-secondary"
          >
            Odeslat další poptávku
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Jméno a příjmení *
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Ing. Jan Novák"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company" className={styles.label}>
                Firma / Investor / IČO
              </label>
              <input
                id="company"
                type="text"
                placeholder="Název stavební firmy nebo investora"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                E-mailová adresa *
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="novak@firma.cz"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Telefonní číslo *
              </label>
              <input
                id="phone"
                type="tel"
                required
                placeholder="+420 777 000 000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="serviceType" className={styles.label}>
                Požadovaná služba / technologie
              </label>
              <select
                id="serviceType"
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className={styles.select}
              >
                <option value="stresne-plaste">Střešní pláště a ploché střechy novostaveb</option>
                <option value="rekonstrukce-strechy">Generální oprava / sanace ploché střechy</option>
                <option value="fasady">Skládané fasády a sendvičové panely</option>
                <option value="izolacie">Hydroizolace spodní stavby / tunely / nádrže</option>
                <option value="fasadne-obklady">Architektonické obklady BOND / lamely</option>
                <option value="komplexni-obvodovy-plast">Kompletní střešní a fasádní plášť na klíč</option>
                <option value="jine">Inženýring a projekční činnost / Jiné</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="location" className={styles.label}>
                Lokalita stavby
              </label>
              <input
                id="location"
                type="text"
                placeholder="Např. Praha, Brno, Plzeň, Bratislava..."
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Popis projektu / specifikace výměr *
            </label>
            <textarea
              id="message"
              required
              rows={4}
              placeholder="Uveďte přibližnou výměru v m², typ konstrukce, požadovaný termín realizace nebo odkaz na projektovou dokumentaci..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={styles.textarea}
            />
          </div>

          <div className={styles.fileUploadBox}>
            <Upload size={20} className={styles.uploadIcon} />
            <div className={styles.uploadText}>
              <span className={styles.uploadTitle}>Připojit projektovou dokumentaci / výkaz výměr</span>
              <span className={styles.uploadSub}>Podporované formáty: PDF, DWG, XLSX, ZIP (max. 50 MB)</span>
            </div>
            <input
              type="file"
              className={styles.fileInput}
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setFormData({ ...formData, file: e.target.files[0] });
                }
              }}
            />
            {formData.file && (
              <span className={styles.selectedFile}>Vybrán: {formData.file.name}</span>
            )}
          </div>

          <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
            <span>Odeslat nezávaznou poptávku do tendru</span>
            <Send size={16} />
          </button>

          <p className={styles.guaranteeText}>
            <Clock size={13} />
            <span>Garantujeme odpověď a technickou konzultaci do 24 hodin v pracovních dnech.</span>
          </p>
        </form>
      )}
    </div>
  );
}
