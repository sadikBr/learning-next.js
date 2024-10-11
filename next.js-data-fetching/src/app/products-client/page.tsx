'use client';
import { useEffect, useState } from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export default function ProductsClientPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('http://localhost:3001/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const products = await response.json();
        setProducts(products);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
