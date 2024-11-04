'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function ThemeToggler() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='dark:bg-gray-800 dark:hover:bg-gray-900 bg-white hover:bg-gray-200 rounded-md p-2'>
          <SunIcon
            color='gold'
            className='absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
          />
          <MoonIcon className='size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <span className='sr-only'>Toggle theme</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
