'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'la-theme';

function getInitialTheme(): Theme {
  if (typeof document === 'undefined') return 'dark';
  return (document.documentElement.dataset.theme as Theme) || 'dark';
}

export default function ThemeToggle() {
  // Hydrate from <html data-theme> so we match the inline script in layout.tsx
  // and don't flash the wrong icon for a frame.
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Private mode / quota — ignore. Theme still applies for the session.
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
      style={{
        background: 'transparent',
        border: '1px solid var(--border-color)',
        color: 'var(--text-color)',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        padding: 0,
        lineHeight: 1,
      }}
    >
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  );
}
