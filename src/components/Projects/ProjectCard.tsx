import React from 'react';
import styles from './Projects.module.scss';
import { Project } from '../../data/projects';

interface Props {
  project: Project;
}

const renderMarker = (marker: string) => {
  if (marker === 'circle-filled') return <span className={`${styles.marker} ${styles['circle-filled']}`} />;
  if (marker === 'square-filled') return <span className={`${styles.marker} ${styles['square-filled']}`} />;
  if (marker === 'square-outline') return <span className={`${styles.marker} ${styles['square-outline']}`} />;
  if (marker === 'tri-outline') return (
    <svg width="32" height="32" viewBox="0 0 32 32">
      <polygon points="16,2 30,28 2,28" fill="#E63329" />
    </svg>
  );
  return null;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        {renderMarker(project.marker)}
        <span className={styles.number}>NO. {String(project.id).padStart(2, '0')}</span>
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.stack}>{project.stack.join(' · ')}</p>
      <hr className={styles.rule} />
      <p className={styles.description}>{project.description}</p>      
      {(project.github) && (
        <div className={styles.links}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className={styles.linkBtn}>
              GitHub
            </a>
          )}
          {/* {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className={styles.linkBtn}>
              Live Demo
            </a>
          )} */
          }
        </div>
      )}
    </article>
  );
}