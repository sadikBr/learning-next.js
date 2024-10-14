import Link from 'next/link';
import Image from 'next/image';
import { currentUser } from '@clerk/nextjs/server';

import HomePageImage from '../assets/banner-image.png';

const HomePage = async () => {
  const user = await currentUser();

  return (
    <div className='w-full custom-home-height flex items-center overflow-hidden'>
      <div className='w-1/3 text-center ml-10'>
        <h2 className='font-bold text-7xl text-primary mb-10'>
          Carbon Valuation Tool
        </h2>
        <div className='text-2xl font-light mb-20 text-gray-400'>
          Let&apos;s make the world a better place, calculate your CO2 emissions
          and keep on reducing them.
        </div>

        <Link
          className='text-primary border-2 border-primary text-lg font-bold px-16 py-4 rounded hover:bg-primary hover:text-white transition-all'
          href={`${user ? '/projects' : '/calculator'}`}
        >
          {user ? 'My Projects' : 'Test Calculator'}
        </Link>
      </div>
      <div className='w-2/3'>
        <Image
          className='w-full pointer-events-none'
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
