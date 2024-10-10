'use client';

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    router.replace('/');

    // Other options
    // router.push('/');
    // router.forward();
    // router.back();
  }

  return (
    <>
      <h1 className='mb-6 text-3xl font-bold'>Create your account</h1>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className='flex flex-col gap-4'
      >
        <input
          className='px-2 py-1 text-black'
          type='email'
          placeholder='Enter your email'
          autoComplete='username'
        />
        <input
          className='px-2 py-1 text-black'
          type='password'
          placeholder='Enter your password'
          autoComplete='new-password'
        />
        <input
          className='px-2 py-1 text-black'
          type='password'
          placeholder='Confirm the password'
          autoComplete='new-password'
        />
        <input
          className='self-end mt-6 px-3 py-1 border border-teal-200 rounded cursor-pointer hover:bg-teal-200 hover:text-black transition'
          type='submit'
          value='Register'
        />
      </form>
    </>
  );
}
