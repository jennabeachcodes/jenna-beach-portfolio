import React, { useState, useEffect, useRef } from 'react';
import styles from './Nav.module.scss';
import { useSettings } from '../../context/SettingsContext';

const navItems = ['About', 'Projects', 'Skills', 'Contact'];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const { fontStyle, fontSize, theme, setFontStyle, setFontSize, setTheme } = useSettings();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navItems.map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
      <button
        ref={btnRef}
        className={`${styles.aaBtn} ${open ? styles.aaBtnOpen : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Accessibility settings"
        aria-expanded={open}
        aria-controls="a11y-panel"
      >
        Aa
      </button>
      {open && (
        <div
          ref={panelRef}
          id="a11y-panel"
          className={styles.panel}
          role="dialog"
          aria-label="Accessibility settings"
        >
          <span className={styles.panelHeading}>Accessibility settings</span>
          <div className={styles.panelGroup}>
            <span className={styles.panelLabel}>Font</span>
            <div className={styles.pillGroup}>
              {(['sans', 'serif', 'dyslexic'] as const).map(f => (
                <button
                  key={f}
                  className={`${styles.pill} ${fontStyle === f ? styles.pillActive : ''}`}
                  onClick={() => setFontStyle(f)}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.panelGroup}>
            <span className={styles.panelLabel}>Size</span>
            <div className={styles.pillGroup}>
              {(['small', 'medium', 'large'] as const).map((s, i) => (
                <button
                  key={s}
                  className={`${styles.pill} ${fontSize === s ? styles.pillActive : ''}`}
                  onClick={() => setFontSize(s)}
                  style={{ fontSize: i === 0 ? '11px' : i === 2 ? '16px' : '13px' }}
                >
                  {i === 0 ? 'A−' : i === 1 ? 'A' : 'A+'}
                </button>
              ))}
            </div>
          </div>
          <hr className={styles.panelDivider} />
          <div className={styles.panelGroup}>
            <span className={styles.panelLabel}>Theme</span>
            <div className={styles.pillGroup}>
              {(['light', 'dark'] as const).map(t => (
                <button
                  key={t}
                  className={`${styles.pill} ${theme === t ? styles.pillActive : ''}`}
                  onClick={() => setTheme(t)}
                >
                  {t === 'light' ? '☀ Light' : '☾ Dark'}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}