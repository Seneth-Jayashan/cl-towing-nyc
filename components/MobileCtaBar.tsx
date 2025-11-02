'use client';

import { Phone } from 'lucide-react';

export function MobileCtaBar() {
  return (
    <a
      href="tel:+19292846067"
      className="
        fixed bottom-0 left-0 right-0 z-50 h-14     // 1. Position: Fixed at bottom, full-width, on top
        flex items-center justify-center gap-2      // 2. Layout: Centered flex
        bg-cyan-500 text-white text-lg font-bold  // 3. Style: Matches your brand
        md:hidden                                 // 4. Visibility: HIDE on desktop, show on mobile
        active:bg-cyan-600                        // 5. Tap Feedback
      "
      aria-label="Call Now for Immediate Help"
    >
      <Phone size={20} />
      <span>Call Now</span>
    </a>
  );
}