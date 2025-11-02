import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Column 1: Logo & About */}
          <div>
            <Image
              src="/logo-light.png" // Updated path
              alt="CL Towing NYC Logo"
              width={200}
              height={40} // Adjusted height
              className="mb-4"
            />
            <p className="max-w-xs">
              Your reliable 24/7 partner for towing and roadside assistance in
              Queens and Brooklyn.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-cyan-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Service Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="font-semibold text-white">Phone:</span>
                <a
                  href="tel:+19292846067"
                  className="hover:text-cyan-400 transition-colors"
                >
                  +1 (929) 284-6067
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-white">Areas:</span>
                <span>Queens & Brooklyn, NYC</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-white">Hours:</span>
                <span>24 Hours / 7 Days a Week</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} CL Towing INC. All Rights Reserved.
          </p>
          <p className="mt-1">
            Developed by{' '}
            <a
              href="https://sjaywebsolutions.lk" // Your company website
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-cyan-400 transition-colors"
            >
              S Jay Web Solutions (Pvt) Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}