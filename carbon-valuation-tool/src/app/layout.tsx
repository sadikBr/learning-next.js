import ThemeToggler from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { ClerkProvider } from '@clerk/nextjs';
import { Leaf } from 'lucide-react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

import Container from '@/components/container';
import ExtendedUserButton from '@/components/extended-user-button';
import { currentUser } from '@clerk/nextjs/server';
import { shadesOfPurple } from '@clerk/themes';
import { Inter, Poppins } from 'next/font/google';

import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
});

export default async function RootLayout({ children }: PropsWithChildren) {
  const user = await currentUser();

  return (
    <ClerkProvider
      dynamic
      appearance={{
        baseTheme: shadesOfPurple,
        signIn: {
          baseTheme: shadesOfPurple,
        },
        signUp: {
          baseTheme: shadesOfPurple,
        },
      }}
    >
      <html lang='en' suppressHydrationWarning>
        <body
          className={`${inter.variable} ${poppins.variable} font-sans h-screen overflow-scroll`}
        >
          <NextThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <div className='flex flex-col h-full bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300'>
              <header className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md'>
                <Container className='px-4 py-4 flex justify-between items-center'>
                  <Link
                    href='/'
                    className='text-2xl font-bold text-green-600 dark:text-green-400 font-heading flex items-center'
                  >
                    <Leaf className='mr-2 h-6 w-6' />
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400'>
                      Carbon Valuation Tool
                    </span>
                  </Link>
                  <div className='flex items-center space-x-4'>
                    {user ? (
                      <ExtendedUserButton />
                    ) : (
                      <Button
                        variant='default'
                        className='bg-green-600 hover:bg-green-700 text-white'
                        asChild
                      >
                        <Link href='/sign-in'>Sign In</Link>
                      </Button>
                    )}
                    <ThemeToggler />
                  </div>
                </Container>
              </header>
              <main className='px-4 py-8 flex-1 bg-white dark:bg-gray-800'>
                {children}
              </main>
              <footer className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-md mt-auto'>
                <Container className='px-4 py-6 text-center text-gray-600 dark:text-gray-400'>
                  © 2023 Carbon Valuation Tool. All rights reserved.
                </Container>
              </footer>
            </div>
          </NextThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
