import { Loader2 } from 'lucide-react';
import Container from './container';

export default function LoadingSpinner() {
  return (
    <Container className='max-w-2xl'>
      <div className='w-full h-full flex flex-col items-center justify-center mt-60'>
        <div className='w-full h-full'>
          <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden'>
            <div className='p-8 flex flex-col items-center'>
              <div className='relative w-32 h-32 mb-8'>
                <div className='absolute inset-0 rounded-full border-t-4 border-b-4 border-indigo-500 animate-spin'></div>
                <div className='absolute inset-4 rounded-full border-r-4 border-l-4 border-purple-500 animate-spin animate-reverse'></div>
                <div className='absolute inset-8 rounded-full border-t-4 border-b-4 border-pink-500 animate-spin animate-delay-500'></div>
                <Loader2 className='absolute inset-0 w-full h-full text-indigo-600 dark:text-indigo-400 animate-pulse' />
              </div>
              <h1 className='text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2 animate-pulse'>
                Loading
              </h1>
              <p className='text-gray-600 dark:text-gray-400 text-center mb-6'>
                Please wait while we load your page
              </p>
              <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4 overflow-hidden'>
                <div className='bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 h-2.5 rounded-full animate-shimmer'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
