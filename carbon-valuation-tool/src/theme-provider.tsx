'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { shadesOfPurple } from '@clerk/themes';
import { createContext, useContext, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

type ThemeContextProps = {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { item: theme, setItem: setTheme } = useLocalStorage('theme');

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ClerkProvider
        appearance={
          theme === 'dark'
            ? {
                baseTheme: shadesOfPurple,
              }
            : {}
        }
      >
        {children}
      </ClerkProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
