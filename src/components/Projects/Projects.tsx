import React from 'react';
import styles from './Projects.module.scss';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import { useGitHubData } from '../../hooks/useGitHubData';

export default function Projects() {
  const { data: githubData, loading } = useGitHubData();

  return (
    <section id="projects">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Projects.</h2>
      </div>
      <div className={styles.grid}>
        {projects.map(project => {
          const github = githubData.find(
            r => r.name.toLowerCase() === project.title.toLowerCase()
            .replace(/\s/g, '')
            .replace('app', '')
            .replace('reminder', 'reminder')
          ) ?? githubData.find(
            r => project.title.toLowerCase().includes(r.name.toLowerCase())
        );
          return (
            <ProjectCard
              key={project.id}
              project={project}
              github={loading ? undefined : github}
            />
          );
        })}
      </div>
    </section>
  );
}