import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <h1 className='text-4xl text-center mt-8'>Welcome to your Next.js app!</h1>
    </>
  );
}
