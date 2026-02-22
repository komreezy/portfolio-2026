"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling past the hero section
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href="/contact"
      className={`lg:hidden fixed bottom-6 right-6 z-50 bg-[var(--primary)] text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 hover:bg-[var(--primary-dark)] ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Contact Me"
    >
      {/* Phone icon */}
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      <span className="text-sm font-medium uppercase tracking-wider">
        Contact
      </span>
    </Link>
  );
}
