import React, { useState, useEffect } from 'react';
import styles from './BackToTop.module.scss';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const about = document.getElementById('projects');
    if (!about) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting || entry.boundingClientRect.top < 0),
      { threshold: 0 }
    );

    observer.observe(about);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;

  return (
    <button className={styles.btn} onClick={scrollToTop} aria-label="Back to top">
      ↑ Top
    </button>
  );
}