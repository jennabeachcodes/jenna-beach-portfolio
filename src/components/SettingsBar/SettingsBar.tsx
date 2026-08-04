import React from 'react';
import styles from './SettingsBar.module.scss';
import { useSettings } from '../../context/SettingsContext';

export default function SettingsBar() {
  const { fontStyle, fontSize, theme, setFontStyle, setFontSize, setTheme } = useSettings();

  return (
    <div className={styles.bar}>
      <div className={styles.group}>
        {(['sans', 'serif', 'dyslexic'] as const).map(f => (
          <button
            key={f}
            className={`${styles.btn} ${fontStyle === f ? styles.active : ''}`}
            onClick={() => setFontStyle(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.group}>
        {(['small', 'medium', 'large'] as const).map((s, i) => (
          <button
            key={s}
            className={`${styles.btn} ${fontSize === s ? styles.active : ''} ${
              i === 0 ? styles.sizeSmall : i === 2 ? styles.sizeLarge : styles.sizeMedium
            }`}
            onClick={() => setFontSize(s)}
          >
            {i === 0 ? 'A−' : i === 1 ? 'A' : 'A+'}
          </button>
        ))}
      </div>

      <div className={styles.group}>
        <button
          className={`${styles.btn} ${theme === 'light' ? styles.active : ''}`}
          onClick={() => setTheme('light')}
        >
          ☀ Light
        </button>
        <button
          className={`${styles.btn} ${theme === 'dark' ? styles.active : ''}`}
          onClick={() => setTheme('dark')}
        >
          ☾ Dark
        </button>
      </div>
    </div>
  );
}