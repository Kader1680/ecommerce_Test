// pages/404.js
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">Oops! The page you're looking for does not exist.</p>
      <Link href="/">
        Go back home 
      </Link>
    </div>
  );
}
