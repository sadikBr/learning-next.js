export default function ErrorMessage({ error }: { error: Error }) {
  return (
    <div className='flex flex-col items-center justify-center custom-home-height'>
      <div className='text-2xl mb-4 text-red-500'>Something Went Wrong</div>
      <div className='text-sm text-red-500'>{error.message}</div>
    </div>
  );
}
