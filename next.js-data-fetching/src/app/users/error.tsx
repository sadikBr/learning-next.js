'use client';

import { useEffect } from 'react';

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='text-2xl mb-4 text-red-500'>
        Error fetching users data
      </div>
      <div className='text-sm text-red-500'>{error.message}</div>
    </div>
  );
}
