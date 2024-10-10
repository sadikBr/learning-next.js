'use client';

import { useState } from 'react';
import ClientComponentTwo from './client-component-two';
// import ServerComponentOne from './server-component-one';

export default function ClientComponentOne() {
  useState('Batman');
  return (
    <div>
      <h2>Client Component One</h2>
      <ClientComponentTwo />

      {/* Can't use server components in client components (the below line will lead to an error thrown) */}
      {/* But there is a workaround for this by passing the Server Component as a child of the Client Component */}
      {/* <ClientComponentOne>
            <ServerComponentOne />
          </ClientComponentOne> */}
      {/* <ServerComponentOne /> */}
    </div>
  );
}
