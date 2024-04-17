import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-3xl font-bold mb-4">Oops!</h1>
      <p className="text-lg mb-8">The page you are looking for does not exist.</p>
      <Link href="/">
        <p className="text-accent text hover:underline">Return Home</p>
      </Link>
    </div>
  );
}
