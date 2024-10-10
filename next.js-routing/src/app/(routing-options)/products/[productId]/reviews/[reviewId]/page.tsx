import { notFound } from 'next/navigation';

export default function Review({
  params: { productId, reviewId },
}: {
  params: { productId: string; reviewId: string };
}) {
  if (+reviewId > 1000) return notFound();

  return (
    <h1>
      This page contains the review {reviewId} of product {productId}
    </h1>
  );
}
