import React, { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.scss';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHiding(true);
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`${styles.loader} ${hiding ? styles.hiding : ''}`} role="status" aria-label="Loading Jenna Beach portfolio">
      <div className={styles.shape} aria-hidden="true" />
      <span className={styles.label}>Loading</span>
    </div>
  );
}