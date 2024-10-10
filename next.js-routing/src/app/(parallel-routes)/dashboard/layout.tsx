export default function DashboardLayout({
  children,
  login,
  notifications,
  metrics,
  analytics,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
  notifications: React.ReactNode;
  metrics: React.ReactNode;
  analytics: React.ReactNode;
}) {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <div className='w-full h-full'>
      <h1 className='text-2xl font-extrabold mb-3'>{children}</h1>
      <div className='flex gap-3 h-[94.8%]'>
        <div className='flex flex-col w-1/3 gap-3'>
          <div className='flex-1 flex items-center justify-center border border-teal-200 rounded font-semibold'>
            {metrics}
          </div>
          <div className='flex-1 flex items-center justify-center border border-teal-200 rounded font-semibold'>
            {analytics}
          </div>
        </div>
        <div className='flex-1 flex items-center justify-center border border-teal-200 rounded font-semibold'>
          {notifications}
        </div>
      </div>
    </div>
  ) : (
    login
  );
}
