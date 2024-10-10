import { Suspense } from 'react';

import Reviews from '@/components/reviews';
import Product from '@/components/product';

export default function ProductDtailsPage() {
  return (
    <div>
      <h2>Product Details Page</h2>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Product />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
