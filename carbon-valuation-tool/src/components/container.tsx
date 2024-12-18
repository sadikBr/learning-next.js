import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`${cn(
        'container mx-auto w-full max-w-screen-2xl',
        className
      )}`}
    >
      {children}
    </div>
  );
}
