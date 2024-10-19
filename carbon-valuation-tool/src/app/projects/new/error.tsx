'use client';

import ErrorMessage from '@/components/ErrorMessage';

export default function NewProjectErrorPage({ error }: { error: Error }) {
  return <ErrorMessage error={error} />;
}
