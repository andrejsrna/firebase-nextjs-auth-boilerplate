// app/page.tsx

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Adjust the path based on your project structure

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col bg-grey-100 items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        This is an example of a Firebase Auth web app
      </h1>
      <Button asChild>
        <Link href="/login">
          Login
        </Link>
      </Button>
    </div>
  );
};

export default HomePage;
