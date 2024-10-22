'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { dark, shadesOfPurple } from '@clerk/themes';
import { createContext, useContext, useState } from 'react';

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
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ClerkProvider
        appearance={{ baseTheme: theme === 'light' ? shadesOfPurple : dark }}
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
