import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// IMPORTANT: Ensure this line is present and correct
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Awesome Portfolio',
  description: 'A personal portfolio showcasing skills, projects, and contact information.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Ensure no whitespace between <html> and <body> tags to prevent hydration errors
    <html lang="en" className={inter.className}>
      <body className="bg-gray-50 text-gray-900 leading-relaxed antialiased">
        <Navbar />
        <main className="min-h-[calc(100vh-120px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
