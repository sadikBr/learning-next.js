import Container from '@/components/container';
import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Container className='flex h-full items-center justify-center'>
      {children}
    </Container>
  );
}
