import React, { useState, useEffect, useCallback } from 'react';
import styles from './QuoteBlock.module.scss';
import { quotes } from '../../data/quotes';

const INTERVAL = 25;

interface Quote {
  text: string;
  author: string;
  source?: string;
}

function getLocalQuote(): Quote {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function QuoteBlock() {
  const [quote, setQuote] = useState<Quote>(getLocalQuote());
  const [paused, setPaused] = useState(false);
  const [seconds, setSeconds] = useState(INTERVAL);
  const [loading, setLoading] = useState(false);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/quote');
      if (!response.ok) throw new Error('API failed');
      const data = await response.json();
      setQuote(data);
    } catch {
      setQuote(getLocalQuote());
    } finally {
      setLoading(false);
      setSeconds(INTERVAL);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  useEffect(() => {
    if (paused || prefersReducedMotion) return;
    const tick = setInterval(() => {
      setSeconds(s => {
        if (s <= 1) {
          fetchQuote();
          return INTERVAL;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(tick);
  }, [paused, prefersReducedMotion, fetchQuote]);

  useEffect(() => {
    if (prefersReducedMotion) setPaused(true);
  }, [prefersReducedMotion]);

  return (
    <div className={styles.wrap} aria-live="polite" aria-atomic="true">
      <blockquote className={styles.quote}>
        <p className={styles.text}>
          {loading ? 'Loading...' : `"${quote.text}"`}
        </p>
        <footer className={styles.author}>
          {!loading && `— ${quote.author}`}
        </footer>
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
          onClick={fetchQuote}
          aria-label="Load next quote"
          disabled={loading}
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