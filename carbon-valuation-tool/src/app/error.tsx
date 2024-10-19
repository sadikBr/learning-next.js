'use client';

import ErrorMessage from '@/components/ErrorMessage';

export default function HomeErrorPage({ error }: { error: Error }) {
  return <ErrorMessage error={error} />;
}
