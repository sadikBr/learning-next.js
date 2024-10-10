import Link from 'next/link';

export default function Products() {
  return (
    <div className='flex items-center gap-4 text-cyan-600 '>
      <p className='hover:text-cyan-300'>
        <Link href='/products/1'>Product 1</Link>
      </p>
      <p className='hover:text-cyan-300'>
        <Link href='/products/2'>Product 2</Link>
      </p>
      <p className='hover:text-cyan-300'>
        <Link href='/products/3'>Product 3</Link>
      </p>
      <p className='hover:text-cyan-300'>
        <Link href='/products/4'>Product 4</Link>
      </p>
      <p className='hover:text-cyan-300'>
        <Link href='/products/5'>Product 5</Link>
      </p>
    </div>
  );
}
