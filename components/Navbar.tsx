'use client'; // <-- Add this at the very top

import { useState, useEffect } from 'react'; // <-- Import hooks
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // <-- Using lucide for icons
import { AnimatePresence, motion } from 'framer-motion';

export function Navbar() {
  // --- 1. STATE TO TRACK SCROLL & MOBILE MENU ---
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- 2. EFFECT TO HANDLE SCROLL LISTENER ---
  useEffect(() => {
    const handleScroll = () => {
      // Set to true if scrolled more than 10px, else false
      setIsScrolled(window.scrollY > 10);
    };

    // Add event listener on mount
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this runs once on mount

  // --- 3. DYNAMIC CLASSES BASED ON SCROLL STATE ---
  const headerClasses = `
      fixed top-0 w-full z-50 transition-all duration-300 ease-in-out    
      ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-sm shadow-sm' // Scrolled state
          : 'bg-transparent shadow-none' // Top state
    }
  `;

  const linkClasses = `
    font-medium transition-colors
    ${
      isScrolled
        ? 'text-gray-900 hover:text-cyan-500' // Scrolled text
        : 'text-white hover:text-cyan-300' // Top text (for dark video)
    }
  `;

  const mobileIconColor = isScrolled ? 'text-gray-900' : 'text-white';

  return (
    <header className={headerClasses}>
      <nav className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo (conditionally changes source) */}
        <Link href="/">
          <Image
            src={isScrolled ? '/logo.png' : '/logo-light.png'} // <-- Conditional logo
            alt="CL Towing NYC Logo"
            width={150}
            height={40}
            priority
          />
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className={linkClasses}>
            Home
          </Link>
          <Link href="/about" className={linkClasses}>
            About
          </Link>
          <Link href="#services" className={linkClasses}>
            Services
          </Link>
          <Link href="/locations" className={linkClasses}>
            Locations
          </Link>
        </div>

        {/* CTA Button (Desktop) */}
        <a
          href="tel:+19292846067"
          className="hidden md:inline-block bg-cyan-500 text-white font-bold px-6 py-2 rounded-full hover:bg-cyan-600 transition-colors"
        >
          Call Now
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={mobileIconColor} // <-- Conditional color
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* --- 4. MOBILE MENU DROPDOWN --- */}
      {/* This will slide down from the top */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              <Link
                href="/"
                className="text-gray-900 font-medium hover:text-cyan-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-900 font-medium hover:text-cyan-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-gray-900 font-medium hover:text-cyan-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/locations"
                className="text-gray-900 font-medium hover:text-cyan-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Locations
              </Link>
              <a
                href="tel:+19292846067"
                className="w-full bg-cyan-500 text-white text-center font-bold px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// --- 5. Don't forget to import these ---
// You will need to add framer-motion and lucide-react to your project:
// npm install framer-motion lucide-react