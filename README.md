# Firebase Auth Next.js

A modern authentication solution built with Next.js, Firebase, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm or Yarn
- Firebase account

### Installation

1. Navigate to the project directory:
```bash
cd firebase-auth-nextjs
```

2. Install dependencies:
```bash
# Using npm
npm install

# Using Yarn
yarn install
```

### Environment Setup

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

> **Note**: Replace placeholder values with your actual Firebase credentials from Firebase Console.

### Running the Application

```bash
# Development
npm run dev
# or
yarn dev

# Production build
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
firebase-auth-nextjs/
├── app/
│   ├── dashboard/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   └── layout.tsx
├── components/
│   └── ui/
│       └── button.tsx
├── context/
│   └── AuthContext.tsx
├── hoc/
│   └── withAuth.tsx
├── lib/
│   ├── firebase.ts
│   └── utils.ts
├── public/
├── styles/
│   └── globals.css
└── [configuration files]
```

## 🔒 Authentication Flow

- **Registration**: Email/password signup with redirect to dashboard
- **Login**: Secure authentication for existing users
- **Protected Routes**: Dashboard access restricted to authenticated users
- **Logout**: Simple sign-out with redirect to login

## 💅 UI Components

### Button Component Example

```typescript
'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🔧 Troubleshooting

### Common Issues

1. **TypeScript Errors in catch Clauses**
```typescript
// Solution: Type catch clause as unknown
try {
  // code
} catch (err: unknown) {
  if (err instanceof Error) {
    setError(err.message);
  } else {
    setError('An unexpected error occurred.');
  }
}
```

2. **Environment Variables Not Loading**
- Verify `.env.local` exists in root directory
- Restart development server after changes
- Ensure variables are prefixed with `NEXT_PUBLIC_`

3. **Shadcn UI Styling Issues**
- Check Tailwind configuration
- Verify `cn` utility implementation

## 📦 Deployment

1. Push code to GitHub
2. Sign up on Vercel
3. Import your repository
4. Configure environment variables
5. Deploy!

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)

## 📬 Contact

- Email: your.email@example.com
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- GitHub: [@yourusername](https://github.com/yourusername)

---

Built with ❤️
