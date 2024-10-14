import Link from 'next/link';
import Image from 'next/image';

import NotFoundImage from '../assets/not-found.png';

const NotFoundPage = () => {
  return (
    <div className='w-full custom-home-height flex items-center overflow-hidden'>
      <div className='w-2/5 text-center ml-10'>
        <div className='text-primary mb-10'>
          <h2 className='font-bold text-9xl mb-4'>404</h2>
          <p className='text-6xl'>Page Not Found</p>
        </div>
        <div className='text-3xl font-light mb-20 text-gray-400'>
          We&apos;re sorry the page you requested couldn&apos;t be found. <br />{' '}
          Pleas go back to the home page
        </div>

        <Link
          className='text-primary border-2 border-primary text-lg font-bold px-16 py-4 rounded hover:bg-primary hover:text-white transition-all'
          href='/'
        >
          Go Back Home
        </Link>
      </div>
      <div className='w-3/5'>
        <Image
          className='w-full pointer-events-none'
          priority
          src={NotFoundImage}
          alt='home page banner'
          width={2448}
          height={1632}
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
