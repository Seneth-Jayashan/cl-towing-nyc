import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileCtaBar } from '@/components/MobileCtaBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CL Towing NYC - 24/7 Towing & Roadside Assistance in Queens & Brooklyn',
  description:
    'CL Towing NYC provides fast, reliable 24/7 towing and roadside assistance in Queens, Brooklyn, and the greater NYC area. Jump starts, lockouts, tire changes, and emergency towing — always nearby and ready to help.',
  keywords: [
    'towing NYC',
    '24/7 towing Queens',
    'emergency towing Brooklyn',
    'roadside assistance NYC',
    'car lockout service',
    'flat tire help Queens',
    'jump start Brooklyn',
    'tow truck near me',
    'CL Towing NYC',
  ],
  authors: [{ name: 'CL Towing NYC', url: 'https://cltowingnyc.com' }],
  creator: 'CL Towing NYC',
  publisher: 'CL Towing NYC',
  robots: 'index, follow',

  // ✅ Favicon and icons
  icons: {
    icon: '/favicon.png', // or '/favicon.ico'
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },

  // ✅ Open Graph for Facebook / Messenger / WhatsApp
  openGraph: {
    title: 'CL Towing NYC - Fast & Reliable 24/7 Towing in Queens & Brooklyn',
    description:
      'Need a tow in NYC? CL Towing NYC provides 24/7 towing and roadside assistance services. Serving Queens, Brooklyn, and all of New York City.',
    url: 'https://cltowingnyc.com',
    siteName: 'CL Towing NYC',
    images: [
      {
        url: '/towing-img-3.png', // replace with your banner image in /public/images/
        width: 1200,
        height: 630,
        alt: 'CL Towing NYC Tow Truck',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // ✅ Twitter card for better previews
  twitter: {
    card: 'summary_large_image',
    title: 'CL Towing NYC - 24/7 Emergency Towing & Roadside Help',
    description:
      'Reliable 24-hour towing and roadside assistance in Queens & Brooklyn. Get fast help for jump starts, tire changes, and lockouts.',
    creator: '@cltowingnyc', // if you have a Twitter handle
    images: ['/towing-img-3.png'], // replace with your image in /public/images/
  },

  // ✅ Additional metadata
  category: 'Automotive',
  metadataBase: new URL('https://cltowingnyc.com'),
  alternates: {
    canonical: 'https://cltowingnyc.com',
  },
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
        {children}
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
