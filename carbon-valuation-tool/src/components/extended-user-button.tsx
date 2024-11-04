'use client';

import { UserButton, useAuth } from '@clerk/nextjs';
import {
  LayoutDashboardIcon,
  CalculatorIcon,
  ChartNoAxesCombinedIcon,
} from 'lucide-react';

export default function ExtendedUserButton() {
  const { has, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className='flex items-center gap-3 animate-pulse'>
        <div className='w-20 h-5 bg-gray-300' />
        <div className='w-12 h-12 rounded-full bg-gray-300' />
      </div>
    );
  }

  const isAdmin = has({ role: 'org:admin' });

  return (
    <>
      <UserButton
        showName
        appearance={{
          elements: {
            userButtonAvatarBox: 'w-12 h-12',
            userButtonOuterIdentifier:
              'text-gray-600 dark:text-gray-300 text-md',
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
