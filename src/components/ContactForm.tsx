'use client';

import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { Send, Upload, CheckCircle, AlertCircle, Clock, Loader2, X } from 'lucide-react';

const SERVICE_LABELS: Record<string, string> = {
  'stresne-plaste': 'Střešní pláště a ploché střechy novostaveb',
  'rekonstrukce-strechy': 'Generální oprava / sanace ploché střechy',
  'fasady': 'Skládané fasády a sendvičové panely',
  'izolacie': 'Hydroizolace spodní stavby / tunely / nádrže',
  'fasadne-obklady': 'Architektonické obklady BOND / lamely',
  'komplexni-obvodovy-plast': 'Kompletní střešní a fasádní plášť na klíč',
  'jine': 'Inženýring a projekční činnost / Jiné',
};

const TARGET_EMAIL = 'obchod@novadach.cz';

export default function ContactForm({ prefilledSubject }: { prefilledSubject?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: 'stresne-plaste',
    location: 'Česká republika',
    message: prefilledSubject ? `Poptávka pro projekt / referenci: ${prefilledSubject}` : '',
    file: null as File | null,
  });

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      serviceType: 'stresne-plaste',
      location: 'Česká republika',
      message: '',
      file: null,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const formPayload = new FormData();
      formPayload.append('Jméno a příjmení', formData.name);
      formPayload.append('Firma / Investor / IČO', formData.company || 'Neuvedeno');
      formPayload.append('E-mail', formData.email);
      formPayload.append('Telefon', formData.phone);
      formPayload.append('Požadovaná služba', SERVICE_LABELS[formData.serviceType] || formData.serviceType);
      formPayload.append('Lokalita stavby', formData.location || 'Česká republika');
      formPayload.append('Popis projektu / výměry', formData.message);

      if (formData.file) {
        if (formData.file.size > 10 * 1024 * 1024) {
          throw new Error('Přiložený soubor je větší než 10 MB. Pro rozsáhlejší projektovou dokumentaci prosím vložte odkaz na cloudové úložiště (OneDrive, Google Drive, Uschovna.cz apod.) do pole zprávy nebo nám soubor zašlete přímo e-mailem na obchod@novadach.cz.');
        }
        formPayload.append('attachment', formData.file);
      }

      // FormSubmit options
      formPayload.append('_subject', `Nová poptávka z webu: ${formData.name} (${SERVICE_LABELS[formData.serviceType] || formData.serviceType})`);
      formPayload.append('_replyto', formData.email);
      formPayload.append('_template', 'table');
      formPayload.append('_captcha', 'false');

      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formPayload,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `Chyba při odesílání formuláře (kód ${response.status}).`);
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error('ContactForm error:', err);
      const msg = err instanceof Error ? err.message : 'Nepodařilo se odeslat poptávku. Zkontrolujte prosím připojení k internetu a zkuste to znovu.';
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
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
            onClick={handleReset}
            className="btn btn-secondary"
          >
            Odeslat další poptávku
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          {errorMessage && (
            <div className={styles.errorBox}>
              <AlertCircle size={20} className={styles.errorIcon} />
              <div>
                <strong>Chyba při odesílání:</strong>
                <p style={{ margin: '0.25rem 0 0 0' }}>{errorMessage}</p>
                <p style={{ margin: '0.45rem 0 0 0', fontSize: '0.84rem' }}>
                  Poptávku nám můžete zaslat také přímo na{' '}
                  <a href={`mailto:${TARGET_EMAIL}`} style={{ color: '#ffffff', textDecoration: 'underline' }}>
                    {TARGET_EMAIL}
                  </a>{' '}
                  nebo telefonicky na{' '}
                  <a href="tel:+420730827769" style={{ color: '#ffffff', textDecoration: 'underline' }}>
                    +420 730 827 769
                  </a>.
                </p>
              </div>
            </div>
          )}

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Jméno a příjmení *
              </label>
              <input
                id="name"
                type="text"
                required
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
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
              disabled={loading}
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
              <span className={styles.uploadSub}>Podporované formáty: PDF, DWG, XLSX, ZIP (do 10 MB, větší uveďte odkazem)</span>
            </div>
            <input
              type="file"
              disabled={loading}
              className={styles.fileInput}
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setFormData({ ...formData, file: e.target.files[0] });
                }
              }}
            />
            {formData.file && (
              <div className={styles.fileSelectedRow}>
                <span className={styles.selectedFile}>Vybrán: {formData.file.name}</span>
                <button
                  type="button"
                  className={styles.removeFileBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFormData({ ...formData, file: null });
                  }}
                  title="Odebrat soubor"
                >
                  <X size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> Odebrat
                </button>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`btn btn-primary ${styles.submitBtn}`}
            style={loading ? { opacity: 0.7, cursor: 'not-allowed' } : undefined}
          >
            {loading ? (
              <>
                <Loader2 size={18} className={styles.spinner} />
                <span>Odesílám poptávku...</span>
              </>
            ) : (
              <>
                <span>Odeslat nezávaznou poptávku</span>
                <Send size={16} />
              </>
            )}
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
