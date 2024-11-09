import { AlertTriangle, RefreshCcw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Container from '@/components/container';

export default function ErrorDisplay({
  message,
  reset,
}: {
  message: string;
  reset: () => void;
}) {
  return (
    <Container className='max-w-2xl'>
      <div className='w-full h-full flex flex-col rounded-2xl items-center justify-center bg-gradient-to-br from-red-50 to-pink-100 dark:bg-transparent'>
        <div className='w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden'>
          <div className='bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 p-6 text-white relative'>
            <div className='absolute top-0 left-0 w-full h-full opacity-20'>
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className='absolute animate-ping'
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 10 + 5}px`,
                    height: `${Math.random() * 10 + 5}px`,
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    animationDuration: `${Math.random() * 3 + 1}s`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
            <div className='relative z-10'>
              <AlertTriangle className='h-16 w-16 mx-auto mb-4 animate-bounce' />
              <h1 className='text-3xl font-bold mb-2'>
                Oops! Something went wrong
              </h1>
              <p className='text-lg opacity-80'>
                We encountered an error while loading the page.
              </p>
            </div>
          </div>
          <div className='p-6'>
            <div className='bg-blue-600 rounded-lg p-4 mb-6'>
              <p className='text-white font-mono text-sm'>Error: {message}</p>
            </div>
            <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
              <Button
                onClick={reset}
                className='bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 text-white transition-all duration-300'
              >
                <RefreshCcw className='mr-2 h-4 w-4 animate-spin' />
                Try Again
              </Button>
              <Button
                asChild
                variant='outline'
                className='border-blue-400 text-blue-400 dark:bg-white hover:text-blue-400 transition-all duration-300'
              >
                <Link href='/'>
                  <Home className='mr-2 h-4 w-4' />
                  Go to Homepage
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
