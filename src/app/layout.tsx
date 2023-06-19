import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/Toaster';

export const metadata = {
  title: 'Bargain Finder NZ',
  description: 'Bargain Finder NZ',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        'bg-white text-slate-900 antialiased light',
        inter.className
      )}
    >
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        {/* @ts-expect-error Server Component */}
        <Navbar />
        <div className="container max-w-7xl mx-auto h-full p-12">
          {' '}
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
