import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileCtaBar } from '@/components/MobileCtaBar'; // <-- 1. IMPORT IT

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CL Towing NYC - 24/7 Towing in Queens & Brooklyn',
  description:
    'Reliable 24/7 emergency towing and roadside assistance in Queens and Brooklyn. We offer jump starts, tire changes, and lockout services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children} {/* <-- REMOVED <main> WRAPPER */}
        <Footer />
        <MobileCtaBar /> {/* <-- 2. ADD IT HERE (inside <body>) */}
      </body>
    </html>
  );
}