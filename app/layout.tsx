// app/layout.tsx

import { AuthProvider } from '../context/AuthContext';
import './/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next.js Firebase Auth</title>
        {/* Add other head elements here */}
      </head>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
