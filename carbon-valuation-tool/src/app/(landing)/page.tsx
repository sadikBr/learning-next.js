import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, Globe, Zap } from 'lucide-react';
import FeatureCard from '@/components/feature-card';

import HeroImage from '@/../public/assets/banner-image.png';
import Container from '@/components/container';
import { currentUser } from '@clerk/nextjs/server';

export default async function HomePage() {
  const user = await currentUser();

  return (
    <Container>
      <div className='flex flex-col md:flex-row items-center justify-between mb-16'>
        <div className='md:w-1/2 mb-8 md:mb-0'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4 font-heading'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400'>
              Measure & Reduce
            </span>
            <br />
            Your Carbon Footprint
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 mb-8'>
            Empower your business with accurate CO2 emission calculations and
            actionable insights.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            {!user ? (
              <>
                <Button
                  asChild
                  size='lg'
                  className='bg-green-600 hover:bg-green-700 text-white font-bold rounded-md'
                >
                  <Link href='/sign-up'>
                    Get Started <ArrowRight className='ml-2 h-5 w-5' />
                  </Link>
                </Button>
                <Button
                  asChild
                  size='lg'
                  variant='outline'
                  className='rounded-md'
                >
                  <Link href='/calculator'>Try Calculator</Link>
                </Button>
              </>
            ) : (
              <Button
                asChild
                size='lg'
                className='bg-green-600 hover:bg-green-700 text-white font-bold rounded-md'
              >
                <Link href='/projects'>
                  My Projects <ArrowRight className='ml-2 h-5 w-5' />
                </Link>
              </Button>
            )}
          </div>
        </div>
        <div className='md:w-1/2 relative flex items-center justify-end'>
          <div className='absolute inset-0 top-1/2 left-1/2 -translate-y-1/2 translate bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse'></div>
          <Image
            src={HeroImage}
            alt='Carbon footprint illustration'
            width={800}
            height={800}
            className='relative z-10'
            priority
          />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
        <FeatureCard
          icon={
            <BarChart2 className='h-10 w-10 text-green-600 dark:text-white' />
          }
          title='Accurate Calculations'
          description='Powered by the Climatiq API for precise CO2 emission estimates across various sectors and activities.'
        />
        <FeatureCard
          icon={<Globe className='h-10 w-10 text-blue-600 dark:text-white' />}
          title='Global Coverage'
          description='Applicable to businesses worldwide, with region-specific emission factors for enhanced accuracy.'
        />
        <FeatureCard
          icon={<Zap className='h-10 w-10 text-yellow-600 dark:text-white' />}
          title='Actionable Insights'
          description='Receive personalized recommendations and track your progress in reducing emissions over time.'
        />
      </div>
      {!user ? (
        <div className='text-center rounded-lg p-8'>
          <h2 className='text-3xl font-bold mb-4 font-heading'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400'>
              Ready to Make a Difference?
            </span>
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 mb-16'>
            Join thousands of businesses committed to reducing their carbon
            footprint and building a sustainable future.
          </p>
          <Button
            asChild
            size='lg'
            className='group py-6 px-11 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md'
          >
            <Link href='/sign-up'>
              Get Started Now For Free{' '}
              <ArrowRight className='group-hover:translate-x-1 transition' />
            </Link>
          </Button>
        </div>
      ) : (
        <h1>Analytics (coming soon)</h1>
      )}
    </Container>
  );
}
