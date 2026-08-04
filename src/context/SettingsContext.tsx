import React, { createContext, useContext, useState } from 'react';

type FontStyle = 'sans' | 'serif' | 'dyslexic';
type FontSize = 'small' | 'medium' | 'large';
type Theme = 'light' | 'dark';

interface Settings {
  fontStyle: FontStyle;
  fontSize: FontSize;
  theme: Theme;
  setFontStyle: (f: FontStyle) => void;
  setFontSize: (s: FontSize) => void;
  setTheme: (t: Theme) => void;
}

const SettingsContext = createContext<Settings>({
  fontStyle: 'sans',
  fontSize: 'medium',
  theme: 'light',
  setFontStyle: () => {},
  setFontSize: () => {},
  setTheme: () => {},
});

export const useSettings = () => useContext(SettingsContext);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [fontStyle, setFontStyle] = useState<FontStyle>('sans');
  const [fontSize, setFontSize] = useState<FontSize>('medium');
  const [theme, setTheme] = useState<Theme>(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  return (
    <SettingsContext.Provider value={{ fontStyle, fontSize, theme, setFontStyle, setFontSize, setTheme }}>
      {children}
    </SettingsContext.Provider>
  );
}