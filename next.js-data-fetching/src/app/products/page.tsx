// import axios from 'axios';
// In this example we use fetch because it automatically caches the returned results (specific to Next.JS).
// By default Next.JS will cache fetch() requests that occur before any dynamic functions (headers(), cookies(), searchParams) are used and will not cache requests found after dynamic functions.

export const fetchCache = 'default-cache';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

// To opt out of cache there is also the method below by setting the revalidate variable to 0
// This method is based on timing the if you set a value other than 0
// The cache will be revalidated after that amount of seconds.
// The same as the property revalidate in the options object below
// export const revalidate = 0;

export default async function ProductsPage() {
  // When using this method to opt out of caching, be aware that any fetch request that comes after the one that has the no-store option will not use the cache also.
  // To avoid this put any fetch request that you want to use the cache before the one that is not using it.
  // Or you can use a route level configuration as another way to avoid this issue (see the top of the page).
  const options: RequestInit = {
    cache: 'default',
    next: {
      revalidate: 10,
    },
  };
  const response = await fetch('http://localhost:3001/products', options);
  const products: Product[] = await response.json();

  return (
    <ul className='space-y-4 p-4'>
      {products.map((product) => (
        <li
          key={product.id}
          className='p-4 bg-white shadow-md rounded-md text-gray-700'
        >
          <h2 className='text-xl font-semibold'>{product.title}</h2>
          <p>{product.description}</p>
          <p className='text-lg font-medium'>${product.price}</p>
        </li>
      ))}
    </ul>
  );
}
