import ClientComponentOne from '@/components/client-component-one';
import ServerComponentOne from '@/components/server-component-one';

export default function Interleaving() {
  return (
    <div>
      <h2>Interleaving Page</h2>
      <ServerComponentOne />
      <ClientComponentOne />
    </div>
  );
}
