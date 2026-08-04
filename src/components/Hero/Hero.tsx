import React from 'react';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>Portfolio — 2026</span>
        <h1 className={styles.name}>Jenna<br />Beach</h1>
        <div className={styles.subtitleRow}>
          <span className={styles.rule} />
          <div className={styles.subtitleBlock}>
            <span className={styles.subtitle}>Web Design and Development</span>
            <span className={styles.subtitle}>Accessibility Specialist · Ottawa ON</span>
          </div>
        </div>        
      </div>
      <div className={styles.selectedWork}>
        <a href="https://github.com/jennabeachcodes" target="_blank" rel="noreferrer" className={styles.workItem}>
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/jennabeach/" target="_blank" rel="noreferrer" className={styles.workItem}>
          <span>LinkedIn</span>
        </a>
      </div>
      <div className={styles.diagonalPanel} />
    </header>
  );
}