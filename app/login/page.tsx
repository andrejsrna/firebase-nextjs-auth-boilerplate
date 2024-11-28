// app/login/page.tsx

'use client';

import React, { useState, FormEvent } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Adjust the import path based on your project structure

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false); // Optional: Password visibility toggle

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); // Redirect to dashboard after successful login
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Optional: Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4" aria-label="Login Form">
          {/* Email Field */}
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password Field */}
          <label htmlFor="password" className="sr-only">Password</label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            {/* Optional: Password Visibility Toggle */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                // Icon for hiding password (you can replace with an actual icon)
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 4.5c-4.687 0-8.625 3.875-8.75 8.5.125 4.625 4.063 8.5 8.75 8.5s8.625-3.875 8.75-8.5c-.125-4.625-4.063-8.5-8.75-8.5zm0 15c-3.403 0-6.17-2.557-7.75-6 1.58-3.443 4.347-6 7.75-6s6.17 2.557 7.75 6c-1.58 3.443-4.347 6-7.75 6z" />
                  <path d="M10 7a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              ) : (
                // Icon for showing password (you can replace with an actual icon)
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 3C5 3 1.11 7.28.05 12.5a9.94 9.94 0 001.76 3.29l.02.03c.39.54.9 1.02 1.47 1.42l.03.02c.4.35.89.63 1.42.83 1.05.34 2.14.51 3.23.51s2.18-.17 3.23-.51c.53-.2 1.02-.48 1.42-.83l.03-.02c.57-.4 1.08-.88 1.47-1.42a9.94 9.94 0 001.76-3.29C18.89 7.28 15 3 10 3zm0 14c-2.21 0-4.21-.9-5.72-2.36C4.21 12.1 4 11.3 4 10.5s.21-1.6.28-2.14C5.79 7.4 7.79 6.5 10 6.5s4.21.9 5.72 2.36C15.79 8.9 16 9.7 16 10.5s-.21 1.6-.28 2.14C14.21 13.6 12.21 14.5 10 14.5z" />
                  <path d="M10 9a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              )}
            </button>
          </div>

          {/* Submit Button */}
          <Button type="submit" disabled={!email || !password || isLoading} className="w-full">
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>

          {/* Error Message */}
          {error && <p className="text-red-500" role="alert">{error}</p>}
        </form>

        {/* Navigation to Register */}
        <p className="mt-4 text-center text-gray-900">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
