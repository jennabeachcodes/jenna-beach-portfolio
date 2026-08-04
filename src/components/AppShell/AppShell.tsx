import React from 'react';
import { useSettings } from '../../context/SettingsContext';
import styles from './AppShell.module.scss';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { fontStyle, fontSize, theme } = useSettings();

  return (
    <div
      className={styles.shell}
      data-font={fontStyle}
      data-size={fontSize}
      data-theme={theme}
    >
      {children}
    </div>
  );
}