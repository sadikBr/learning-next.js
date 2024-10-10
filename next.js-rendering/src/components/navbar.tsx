import NavLinks from './nav-links';
import NavSearch from './nav-search';

export default function NavBar() {
  return (
    <div className='w-full flex justify-between items-center'>
      <div>
        <NavLinks />
      </div>
      <div>
        <NavSearch />
      </div>
    </div>
  );
}
