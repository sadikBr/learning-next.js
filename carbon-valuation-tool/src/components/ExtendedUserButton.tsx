'use client';

import { UserButton, useAuth } from '@clerk/nextjs';

const DotIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      fill='currentColor'
    >
      <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z' />
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
            labelIcon={<DotIcon />}
          />
          {isAdmin && (
            <UserButton.Link
              label='Application Administration'
              labelIcon={<DotIcon />}
              href='/admin-dashboard'
            />
          )}
          <UserButton.Action label='manageAccount' />
          <UserButton.Action label='signOut' />
        </UserButton.MenuItems>
      </UserButton>
    </>
  );
}
