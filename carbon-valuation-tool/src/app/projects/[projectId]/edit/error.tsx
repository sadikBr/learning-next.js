'use client';

import ErrorMessage from '@/components/ErrorMessage';

export default function EditProjectErrorPage({ error }: { error: Error }) {
  return <ErrorMessage error={error} />;
}
