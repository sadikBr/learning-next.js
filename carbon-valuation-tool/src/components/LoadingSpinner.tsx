export default function LoadingSpinner() {
  return (
    <div className='flex items-center justify-center custom-home-height'>
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-light-primary dark:border-dark-accent-secondary'></div>
    </div>
  );
}
