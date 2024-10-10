'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className='flex flex-col sm:flex-row w-full h-full'>
      <div className='w-52 sm:mb-0 mb-6 flex sm:flex-col flex-row'>
        <Link
          className={`py-3 px-2 sm:mr-0 mr-2 sm:w-full w-60 mb-3 border border-teal-400 ${
            pathname === '/auth/register' && 'bg-teal-200 text-black'
          } rounded hover:bg-teal-200 hover:text-black transition`}
          href='/auth/register'
        >
          Register
        </Link>
        <Link
          className={`py-3 px-2 mb-3 sm:w-full w-60 border border-teal-400 ${
            pathname === '/auth/login' && 'bg-teal-200 text-black'
          } rounded hover:bg-teal-200 hover:text-black transition`}
          href='/auth/login'
        >
          Login
        </Link>
      </div>
      <div className='flex-1 ml-0 sm:ml-5'>{children}</div>
    </div>
  );
}
