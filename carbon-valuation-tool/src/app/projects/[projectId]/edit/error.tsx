'use client';

import ErrorDisplay from '@/components/error-component';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <ErrorDisplay message={error.message} reset={reset} />;
}
