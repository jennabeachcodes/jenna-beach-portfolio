import React from 'react';
import styles from './Projects.module.scss';
import type { Project } from '../../data/projects';
import type { GitHubRepo } from '../../hooks/useGitHubData';
import { languageColors } from '../../data/githubLanguageColors';

interface Props {
  project: Project;
  github?: GitHubRepo;
}

const renderMarker = (marker: string) => {
  if (marker === 'circle-filled') return <span className={`${styles.marker} ${styles['circle-filled']}`} />;
  if (marker === 'square-filled') return <span className={`${styles.marker} ${styles['square-filled']}`} />;
  if (marker === 'square-outline') return <span className={`${styles.marker} ${styles['square-outline']}`} />;
  if (marker === 'tri-outline') return (
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
      <polygon points="16,2 30,28 2,28" fill="#E63329" />
    </svg>
  );
  return null;
};

function formatUpdated(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const days = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  if (days === 0) return 'Updated today';
  if (days === 1) return 'Updated yesterday';
  if (days < 7) return `Updated ${days} days ago`;
  if (days < 30) return `Updated ${Math.floor(days / 7)} week${Math.floor(days / 7) > 1 ? 's' : ''} ago`;
  return `Updated ${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? 's' : ''} ago`;
}

export default function ProjectCard({ project, github }: Props) {
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
      {github && (
        <div className={styles.githubMeta}>
          <div className={styles.metaRow}>
            {github.language && (
              <span className={styles.metaItem}>
                <span
                  className={styles.langDot}
                  style={{ background: languageColors[github.language] || '#888' }}
                />
                {github.language}
              </span>
            )}
            {github.stars > 0 && (
              <span className={styles.stars}>★ {github.stars}</span>
            )}
            {github.issues > 0 && (
              <span className={styles.metaItem}>{github.issues} issue{github.issues > 1 ? 's' : ''}</span>
            )}
          </div>
          <span className={styles.updated}>{formatUpdated(github.updatedAt)}</span>
        </div>
      )}
      {!github && project.id === 4 && (
        <div className={styles.privateNote}>Government project — private repository</div>
      )}
      <div className={styles.links}>
        {project.github && (
            <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={styles.linkBtn}
            aria-label={`View ${project.title} on GitHub`}
          >
            Live from GitHub ↗
          </a>
        )}
        {/* {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className={styles.linkBtn}>
            Live Demo
          </a>
        )} */}
      </div>
    </article>
  );
}