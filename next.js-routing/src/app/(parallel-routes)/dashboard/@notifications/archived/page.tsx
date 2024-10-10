import Link from 'next/link';

export default function ArchivedNotifications() {
  return (
    <section className='w-full h-full flex flex-col items-center justify-center'>
      <h1 className='mt-auto'>Archived Notifications Section</h1>
      <Link
        className='self-end mt-auto mb-3 mr-3 text-teal-400'
        href='/dashboard'
      >
        Default Notifications
      </Link>
    </section>
  );
}
