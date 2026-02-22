"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface NavItem {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks: NavItem[] = [
    { href: "/", label: "Home" },
    { href: "/firm-overview", label: "Firm Overview" },
    { href: "/about", label: "About" },
    { href: "/practice-areas", label: "Practice Areas" },
    {
      href: "#",
      label: "Resources",
      children: [
        { href: "/blog", label: "Blog" },
        { href: "/testimonials", label: "Testimonials" },
        { href: "/faq", label: "FAQ" },
      ],
    },
    { href: "/contact", label: "Contact" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const phoneNumber = "(678) 522-6273";

  return (
    <header className="bg-[#F9F5F0] h-[var(--header-height)] flex items-center sticky top-0 z-50 border-b border-[var(--border)]">
      <div className="w-full px-[var(--side-padding)]">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-aj.png"
              alt="Assured Justice"
              width={130}
              height={104}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.children ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="text-[var(--foreground)] text-sm font-light uppercase tracking-wider hover:text-[var(--primary)] transition-colors duration-150 flex items-center gap-1"
                    >
                      {link.label}
                      <svg
                        className={`w-3 h-3 transition-transform duration-150 ${openDropdown === link.label ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-2 bg-[var(--background)] border border-[var(--border)] shadow-lg min-w-[160px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 text-sm font-light text-[var(--foreground)] hover:bg-[var(--card)] hover:text-[var(--primary)] transition-colors duration-150"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[var(--foreground)] text-sm font-light uppercase tracking-wider hover:text-[var(--primary)] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Phone CTA - Desktop */}
          <a
            href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
            className="hidden lg:flex items-center gap-2 bg-[var(--primary)] text-white px-4 py-2 text-sm font-medium hover:bg-[var(--primary-dark)] transition-colors duration-150"
          >
            <span className="text-xs uppercase tracking-wider">Call or Text</span>
            <span>{phoneNumber}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 text-[var(--foreground)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-[var(--header-height)] bg-[var(--background)] z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="px-[var(--side-padding)] pt-8 pb-8 flex flex-col gap-6 h-full overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <div className="space-y-3">
                  <span className="text-[var(--foreground)] text-lg font-light uppercase tracking-wider">
                    {link.label}
                  </span>
                  <div className="pl-4 pt-2 space-y-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block text-[var(--muted-foreground)] text-base font-light hover:text-[var(--primary)] transition-colors duration-150"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="text-[var(--foreground)] text-lg font-light uppercase tracking-wider hover:text-[var(--primary)] transition-colors duration-150 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          {/* Mobile Phone CTA */}
          <a
            href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
            className="mt-auto flex items-center justify-center gap-2 bg-[var(--primary)] text-white px-4 py-4 text-sm font-medium"
          >
            <span className="text-xs uppercase tracking-wider">Call or Text</span>
            <span>{phoneNumber}</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
