import React from 'react';
import styles from './Footer.module.scss';
import QuoteBlock from '../QuoteBlock/QuoteBlock';

const services = [
  'Front-end Dev',
  'UX/UI Design',
  'A11y Audits',
  'Back-end & Databases',
];

const resources = [
  { label: 'WCAG Quick Ref', href: 'https://www.w3.org/WAI/WCAG21/quickref/' },
  { label: 'Contrast Checker', href: 'https://webaim.org/resources/contrastchecker/' },
  { label: 'Web Safe Fonts', href: 'https://www.cssfontstack.com/' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <h2 className={styles.name}>Jenna<br />Beach</h2>
        </div>
        <div className={styles.col}>
          <span className={styles.colHeading}>Services</span>
          <ul className={styles.list}>
            {services.map(s => (
              <li key={s} className={styles.listItem}>{s}</li>
            ))}
          </ul>
        </div>
        <div className={styles.col}>
          <span className={styles.colHeading}>Resources</span>
          <ul className={styles.list}>
            {resources.map(r => (
              <li key={r.label}>
                <a                
                  href={r.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.listLink}
                >
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.quoteRow}>
        <QuoteBlock />
      </div>
      <div className={styles.bottom}>
        <span className={styles.copy}>Jenna Beach - Web Developer © {new Date().getFullYear()}</span>
        <span className={styles.built}>Built with React · TypeScript · Sass</span>
        <div className={styles.bottomLinks}>
          <a href="https://github.com/jennabeachcodes" target="_blank" rel="noreferrer" className={styles.bottomLink}>GitHub</a>
          <a href="https://www.linkedin.com/in/jennabeach/" target="_blank" rel="noreferrer" className={styles.bottomLink}>LinkedIn</a>
          <a href="mailto:jennabeachcodes@gmail.com" className={styles.bottomLink}>Email</a>
        </div>
      </div>
    </footer>
  );
}