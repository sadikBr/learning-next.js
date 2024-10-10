import fs from 'fs';
import ServerComponentTwo from './server-component-two';
import ClientComponentOne from './client-component-one';

export default function ServerComponentOne() {
  fs.readFileSync('src/components/server-component-one.tsx', 'utf-8');

  return (
    <div>
      <h2>Server Component One</h2>
      <ServerComponentTwo />
      <ClientComponentOne />
    </div>
  );
}
