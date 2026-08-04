import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.scss';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_mtmsor9',
      'template_3fezk34',
      e.currentTarget,
      '2yf2HgaanDQkaQpm1'
    ).then(() => {
      setStatus('success');
    }).catch(() => {
      setStatus('error');
    });
  };

  return (
  <section id="contact" className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.topBar}>
        <span className={styles.eyebrow}>Get in touch</span>
        <h2 className={styles.heading}>Let's build something great together.</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.details}>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>Email</span>
            <a href="mailto:jennabeachcodes@gmail.com" className={styles.detailLink}>
              jennabeachcodes@gmail.com
            </a>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>Location</span>
            <span className={styles.detailValue}>Ottawa, ON</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>Availability</span>
            <span className={styles.detailValue}>Open to new opportunities</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <div className={styles.row}>
            <div className={styles.group}>
              <label htmlFor="first-name" className={styles.label}>
                First name <span className={styles.required} aria-label="required">*</span>
              </label>
              <input type="text" id="first-name" name="first_name" required placeholder="Jane" className={styles.input} />
            </div>
            <div className={styles.group}>
              <label htmlFor="last-name" className={styles.label}>
                Last name <span className={styles.required} aria-label="required">*</span>
              </label>
              <input type="text" id="last-name" name="last_name" required placeholder="Smith" className={styles.input} />
            </div>
          </div>
          <div className={styles.group}>
            <label htmlFor="email" className={styles.label}>
              Email <span className={styles.required} aria-label="required">*</span>
            </label>
            <input type="email" id="email" name="email" required placeholder="jsmith@company.com" className={styles.input} />
          </div>
          <div className={styles.group}>
            <label htmlFor="project-type" className={styles.label}>
              Project type <span className={styles.required} aria-label="required">*</span>
            </label>
            <select id="project-type" name="project_type" required className={styles.input}>
              <option value="" disabled>Select a service</option>
              <option value="frontend">Front-end Development</option>
              <option value="design">UI/UX and Accessibility Design</option>
              <option value="audit">Accessibility Audit</option>
              <option value="backend">Back-end and Databases</option>
              <option value="performance">Performance and Tooling</option>
            </select>
          </div>
          <div className={styles.group}>
            <label htmlFor="message" className={styles.label}>
              Tell me about your project <span className={styles.required} aria-label="required">*</span>
            </label>
            <textarea id="message" name="message" required rows={5} placeholder="What are you building? What accessibility goals do you have?" className={styles.input} />
            <span className={styles.hint}>Include any relevant links, deadlines, or compliance requirements.</span>
          </div>
          <button type="submit" className={styles.submit} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send enquiry →'}
          </button>
          {status === 'success' && <p className={styles.successMsg}>Message sent. I'll be in touch soon.</p>}
          {status === 'error' && <p className={styles.errorMsg}>Something went wrong. Please try again.</p>}
        </form>
      </div>
    </div>
  </section>
);
}