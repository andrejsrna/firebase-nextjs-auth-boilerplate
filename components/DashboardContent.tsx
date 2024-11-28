// components/DashboardContent.tsx

'use client';

import React from 'react';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { Button } from './ui/button'; // Adjust the import path based on your project structure

const DashboardContent: React.FC = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Optional: Additional logout logic, e.g., redirecting to home page
    } catch (error) {
      console.error('Error signing out:', error);
      // Optional: Display error message to the user
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 text-center">Dashboard</h1>
        <p className="text-lg mb-6 text-gray-900 text-center">Welcome, {user?.email}!</p>
        <Button onClick={handleLogout} className="w-full">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default DashboardContent;
