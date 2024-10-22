import Link from 'next/link';
import Image from 'next/image';

import HomePageImage from '../assets/banner-image.png';
import { currentUser } from '@clerk/nextjs/server';

const HomePage = async () => {
  const user = await currentUser();

  return (
    <div className='w-full custom-home-height flex items-center overflow-hidden'>
      <div className='w-1/3 text-center ml-10'>
        <h2 className='font-bold text-7xl dark:text-dark-text-primary text-light-primary mb-10'>
          Carbon Valuation Tool
        </h2>
        <div className='text-2xl font-light mb-20 text-gray-400 dark:text-dark-text-secondary'>
          Let&apos;s make the world a better place, calculate your CO2 emissions
          and keep on reducing them.
        </div>

        <Link
          className='text-light-primary dark:text-dark-text-primary border-2 border-light-primary dark:border-dark-text-primary text-lg font-bold px-16 py-4 rounded hover:bg-light-primary dark:hover:bg-dark-text-primary hover:text-white dark:hover:text-dark-background-primary transition-all'
          href={`${user ? '/projects' : '/calculator'}`}
        >
          {user ? 'My Projects' : 'Test Calculator'}
        </Link>
      </div>
      <div className='w-2/3'>
        <Image
          className='w-full pointer-events-none'
          priority
          src={HomePageImage}
          alt='home page banner'
          width={1606}
          height={1361}
        />
      </div>
    </div>
  );
};

export default HomePage;
