'use client';

import ErrorMessage from '@/components/ErrorMessage';

export default function ProjectsErrorPage({ error }: { error: Error }) {
  return <ErrorMessage error={error} />;
}
