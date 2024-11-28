// hoc/withAuth.tsx

'use client'; // Marks this file as a Client Component

import React, { ComponentType, FC, ReactElement } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation'; // Use next/navigation for client-side routing
import { useEffect } from 'react';

/**
 * Higher-Order Component to protect routes that require authentication.
 * Redirects unauthenticated users to the login page.
 *
 * @param WrappedComponent - The component to wrap and protect.
 * @returns A new component that checks authentication before rendering the wrapped component.
 */
function withAuth<P extends Record<string, any>>(
  WrappedComponent: ComponentType<P>
): FC<P> {
  const AuthenticatedComponent: FC<P> = (props): ReactElement => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push('/login');
      }
    }, [user, loading, router]);

    if (loading || !user) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
}

export default withAuth;
