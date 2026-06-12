import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('paychain-theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('paychain-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      className="theme-switcher"
      onClick={toggleTheme}
      data-tooltip={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <span className="theme-icon moon">🌙</span>
      ) : (
        <span className="theme-icon sun">☀️</span>
      )}
    </button>
  );
};

export default ThemeSwitcher;
