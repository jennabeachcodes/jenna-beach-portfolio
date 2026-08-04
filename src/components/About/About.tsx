import React from 'react';
import styles from './About.module.scss';

const stats = [
  { value: '54', label: 'Tests Written', color: 'red' },
  { value: '100%', label: 'Pass Rate', color: 'blue' },
  { value: '16.1:1', label: 'Contrast Ratio', color: 'yellow' },
  { value: 'WCAG', label: '2.0 / 2.1 / 2.2', color: 'black' },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.left}>
        <h2 className={styles.heading}>About<br />Me.</h2>
        <div className={styles.rule} />
        <p className={styles.body}>
          Full-stack developer and web accessibility specialist building WCAG 2.1 AA
          compliant applications across web, desktop, and mobile. Professional experience
          in federal government web environments.
        </p>
        <p className={styles.body}>
          Based in Ottawa, ON. Currently open to new opportunities.
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.statGrid}>
          {stats.map(stat => (
            <div key={stat.label} className={`${styles.stat} ${styles[stat.color]}`}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}