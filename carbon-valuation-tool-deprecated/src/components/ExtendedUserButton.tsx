'use client';

import { UserButton, useAuth } from '@clerk/nextjs';
import { LayoutDashboardIcon, CalculatorIcon, ChartNoAxesCombinedIcon } from 'lucide-react';

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
            userButtonOuterIdentifier:
              'text-white dark:text-dark-text-secondary text-lg',
            userButtonTrigger: 'px-2 py-1',
          },
        }}
      >
        <UserButton.MenuItems>
          <UserButton.Link
            href='/dashboard'
            label='Dashboard'
            labelIcon={<LayoutDashboardIcon size={16} />}
          />
          <UserButton.Link
            href='/calculator'
            label='Calculator'
            labelIcon={<CalculatorIcon size={16} />}
          />
          {isAdmin && (
            <UserButton.Link
              label='Application Administration'
              labelIcon={<ChartNoAxesCombinedIcon size={16} />}
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
