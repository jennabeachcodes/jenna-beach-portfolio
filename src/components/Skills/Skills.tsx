import React from 'react';
import styles from './Skills.module.scss';
import { skills } from '../../data/skills';

const Marker = ({ type }: { type: 'square' | 'circle' | 'triangle' }) => {
  if (type === 'triangle') {
    return (
      <svg width="14" height="14" viewBox="0 0 32 32">
        <polygon points="16,2 30,28 2,28" fill="#E63329" />
      </svg>
    );
  }
  return <span className={`${styles.marker} ${styles[type]}`} />;
};

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.heading}>Skills.</h2>
      <div className={styles.grid}>
        {skills.map(skill => (
          <article
            key={skill.id}
            className={`${styles.card} ${skill.span ? styles.span : ''}`}
          >
            <span className={styles.number}>{String(skill.id).padStart(2, '0')}</span>
            <div className={styles.markerRow}>
              {skill.markers.map((m, i) => (
                <Marker key={i} type={m} />
              ))}
            </div>
            <h3 className={styles.title}>{skill.title}</h3>
            <ul className={styles.bullets}>
              {skill.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
              ))}
            </ul>
            <div className={styles.tags}>
              {skill.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}