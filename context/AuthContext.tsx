// context/AuthContext.tsx

'use client';

import React, { createContext, useContext, ReactNode } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { User } from "firebase/auth";

// Define the shape of the context
interface AuthContextProps {
  user: User | null;
  loading: boolean;
  error: Error | null;
}

// Initialize the context with undefined
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * AuthProvider component that wraps your app and makes auth object available to any child component that calls useAuth().
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  console.log("AuthProvider - user:", user);
  console.log("AuthProvider - loading:", loading);
  console.log("AuthProvider - error:", error);

  return (
    <AuthContext.Provider value={{ user: user ?? null, loading, error: error ?? null }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook to use the AuthContext and access user, loading, and error.
 * Throws an error if used outside of AuthProvider.
 */
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
