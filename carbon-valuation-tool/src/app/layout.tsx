import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';
import type { Metadata } from 'next';

import './globals.css';
import Link from 'next/link';
import ExtendedUserButton from '@/components/ExtendedUserButton';

export const metadata: Metadata = {
  title: 'Carbon Valuation Tool',
  description: 'Tool to calculate and manage your company GHG emissions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className='w-screen h-screen overflow-y-hidden'>
          <div className='w-full h-full'>
            <nav className='fixed z-50 w-full bg-primary h-28 flex items-center justify-center'>
              <div className='w-[90vw] mx-auto flex items-center justify-between'>
                <h1 className='text-white font-bold text-2xl'>
                  <Link href='/'>Carbon Valuation Tool</Link>
                </h1>
                <div>
                  <SignedOut>
                    <div className='border-2 cursor-pointer px-5 py-2 border-white text-white rounded hover:text-primary hover:bg-white transition-all'>
                      <SignInButton />
                    </div>
                  </SignedOut>
                  <SignedIn>
                    <ExtendedUserButton />
                  </SignedIn>
                </div>
              </div>
            </nav>

            <div className='pt-28'>{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
