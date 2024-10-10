import Link from 'next/link';

export default function DefaultNotifications() {
  return (
    <section className='w-full h-full flex flex-col items-center justify-center'>
      <h1 className='mt-auto'>Default Notifications Section</h1>
      <Link
        className='self-end mt-auto mb-3 mr-3 text-teal-400'
        href='/dashboard/archived'
      >
        Archived Notifications
      </Link>
    </section>
  );
}
