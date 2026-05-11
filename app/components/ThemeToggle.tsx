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

  // Inline SVGs inherit color via currentColor → automatically track
  // var(--text-color). Sized to 16px so it sits comfortably in the
  // 32px circular button.
  const SunIcon = (
    <svg
      width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );

  const MoonIcon = (
    <svg
      width="16" height="16" viewBox="0 0 24 24"
      fill="currentColor" stroke="none"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );

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
        padding: 0,
        lineHeight: 1,
      }}
    >
      {theme === 'dark' ? SunIcon : MoonIcon}
    </button>
  );
}
