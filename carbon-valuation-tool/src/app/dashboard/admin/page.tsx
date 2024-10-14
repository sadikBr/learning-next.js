'use client';

import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const { has, isLoaded } = useAuth();
  const router = useRouter();

  if (!isLoaded) {
    return <div>Loading ....</div>;
  }

  const isAdmin = has({ role: 'org:admin' });

  if (!isAdmin) {
    router.replace('/dashboard');
  }

  return (
    isAdmin && (
      <div className='container'>
        <h2>Admin Dashboard Page!</h2>
      </div>
    )
  );
}
