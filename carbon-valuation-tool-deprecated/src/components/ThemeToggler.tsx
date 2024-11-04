'use client';

import { useTheme } from '@/theme-provider';
import { SunIcon, MoonIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className='flex items-center'>
      <input
        className='sr-only'
        id='theme-toggle'
        type='checkbox'
        onChange={toggleTheme}
      />
      <label
        className='hover:bg-blue-950 p-1 rounded-lg active:scale-75 cursor-pointer'
        htmlFor='theme-toggle'
      >
        {theme.theme === 'light' && <MoonIcon color='white' />}
        {theme.theme === 'dark' && <SunIcon color='gold' />}
      </label>
    </div>
  );
}
