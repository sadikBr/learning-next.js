'use client';

import { UserButton, useAuth } from '@clerk/nextjs';

const CalculatorIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='currentColor'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-10 15a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm-8 -4a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm-1 -7h-6a2 2 0 0 0 -2 2v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-1a2 2 0 0 0 -2 -2z' />
    </svg>
  );
};

const DashboardIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z' />
      <path d='M10 16h6' />
      <path d='M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M4 8h3' />
      <path d='M4 12h3' />
      <path d='M4 16h3' />
    </svg>
  );
};

const AdminDashboardIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='currentColor'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2zm10 -4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 -8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z' />
    </svg>
  );
};

export default function ExtendedUserButton() {
  const { has, isLoaded } = useAuth();

  if (!isLoaded) {
    return <div>Loading ....</div>;
  }

  const isAdmin = has({ role: 'org:admin' });

  return (
    <>
      <UserButton
        showName
        appearance={{
          elements: {
            userButtonAvatarBox: 'w-16 h-16',
            userButtonOuterIdentifier: 'text-white text-lg',
            userButtonTrigger: 'px-2 py-1',
          },
        }}
      >
        <UserButton.MenuItems>
          <UserButton.Link
            href='/dashboard'
            label='Dashboard'
            labelIcon={<DashboardIcon />}
          />
          <UserButton.Link
            href='/calculator'
            label='Calculator'
            labelIcon={<CalculatorIcon />}
          />
          {isAdmin && (
            <UserButton.Link
              label='Application Administration'
              labelIcon={<AdminDashboardIcon />}
              href='/dashboard/admin'
            />
          )}
          <UserButton.Action label='manageAccount' />
          <UserButton.Action label='signOut' />
        </UserButton.MenuItems>
      </UserButton>
    </>
  );
}
