import React, { useState, useEffect, useCallback } from 'react';
import styles from './QuoteBlock.module.scss';
import { quotes } from '../../data/quotes';


const INTERVAL = 25;

export default function QuoteBlock() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [seconds, setSeconds] = useState(INTERVAL);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const nextQuote = useCallback(() => {
    setIndex(i => (i + 1) % quotes.length);
    setSeconds(INTERVAL);
  }, []);

  useEffect(() => {
    if (paused || prefersReducedMotion) return;
    const tick = setInterval(() => {
      setSeconds(s => {
        if (s <= 1) { nextQuote(); return INTERVAL; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(tick);
  }, [paused, prefersReducedMotion, nextQuote]);

  useEffect(() => {
    if (prefersReducedMotion) setPaused(true);
  }, [prefersReducedMotion]);

  return (
    <div className={styles.wrap} aria-live="polite" aria-atomic="true">
      <blockquote className={styles.quote}>
        <p className={styles.text}>"{quotes[index].text}"</p>
        <footer className={styles.author}>— {quotes[index].author}</footer>
      </blockquote>
      <div className={styles.controls}>
        <button
          className={`${styles.btn} ${!paused ? styles.active : ''}`}
          onClick={() => { setPaused(p => !p); setSeconds(INTERVAL); }}
          aria-label={paused ? 'Resume quote rotation' : 'Pause quote rotation'}
        >
          {paused ? '▶ Resume' : '⏸ Pause'}
        </button>
        <button
          className={styles.btn}
          onClick={nextQuote}
          aria-label="Load next quote"
        >
          ↻ Next quote
        </button>
        {!paused && !prefersReducedMotion && (
          <span className={styles.timer} aria-hidden="true">
            Next in {seconds}s
          </span>
        )}
        {paused && (
          <span className={styles.timer} aria-hidden="true">Paused</span>
        )}
      </div>
    </div>
  );
}