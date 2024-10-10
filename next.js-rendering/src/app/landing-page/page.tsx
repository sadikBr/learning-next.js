import NavBar from '@/components/navbar';

export default function LandingPage() {
  return (
    <div className='w-full h-full flex flex-col gap-6'>
      <NavBar />
      <main>
        <h2>Page Heading</h2>
      </main>
    </div>
  );
}
