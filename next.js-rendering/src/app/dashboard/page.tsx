'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [name, setName] = useState('');

  console.log('This is the dashboard page.');

  return (
    <div className='w-screen h-scree flex flex-col items-center p-6'>
      <h2 className='self-start mb-8'>Dashboard Page</h2>
      <input
        className='text-black w-full mb-4 px-2 py-1'
        type='text'
        placeholder='Enter your name'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      {name && <p>Hello, {name}!</p>}
    </div>
  );
}
