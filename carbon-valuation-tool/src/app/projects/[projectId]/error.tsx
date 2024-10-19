'use client';

import ErrorMessage from '@/components/ErrorMessage';

export default function ProjectErrorPage({ error }: { error: Error }) {
  return <ErrorMessage error={error} />;
}
