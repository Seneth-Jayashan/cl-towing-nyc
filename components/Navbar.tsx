import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png" // Updated path
            alt="CL Towing NYC Logo"
            width={100}
            height={40} // Adjusted height for new logo
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className="text-gray-900 font-medium hover:text-cyan-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-900 font-medium hover:text-cyan-500 transition-colors"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-gray-900 font-medium hover:text-cyan-500 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/locations"
            className="text-gray-900 font-medium hover:text-cyan-500 transition-colors"
          >
            Locations
          </Link>
        </div>

        {/* CTA Button */}
        <a
          href="tel:+19292846067"
          className="hidden md:inline-block bg-cyan-500 text-white font-bold px-6 py-2 rounded-full hover:bg-cyan-600 transition-colors"
        >
          Call Now
        </a>

        {/* Mobile Menu Button (Add functionality later) */}
        <div className="md:hidden">
          <button className="text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}