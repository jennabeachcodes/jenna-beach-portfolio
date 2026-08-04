import React from 'react';
import styles from './Projects.module.scss';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects"  className={styles.section}>      
      <h2 className={styles.heading}>Projects.</h2>
      <div className={styles.grid}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}