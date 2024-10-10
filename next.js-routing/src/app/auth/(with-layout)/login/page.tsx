export default function Login() {
  return (
    <>
      <h1 className='mb-6 text-3xl font-bold'>Login to your account</h1>
      <form className='flex flex-col gap-4'>
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
          autoComplete='current-password'
        />
        <input
          className='self-end mt-6 px-3 py-1 border border-teal-200 rounded cursor-pointer hover:bg-teal-200 hover:text-black transition'
          type='submit'
          value='Login'
        />
      </form>
    </>
  );
}
