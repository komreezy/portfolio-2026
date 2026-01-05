import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--footer-bg)] mt-auto py-16">
      <div className="px-[var(--side-padding)]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-[var(--footer-accent)] font-serif text-lg mb-4">
              James Mitchell
            </h3>
            <p className="text-[var(--footer-text)] text-sm font-light opacity-80">
              Attorney at Law
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-[var(--footer-accent)] text-xs uppercase tracking-widest mb-4">
              Navigate
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-[var(--footer-text)] text-sm font-light opacity-80 hover:opacity-100 transition-opacity duration-150"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[var(--footer-text)] text-sm font-light opacity-80 hover:opacity-100 transition-opacity duration-150"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="text-[var(--footer-text)] text-sm font-light opacity-80 hover:opacity-100 transition-opacity duration-150"
              >
                Practice Areas
              </Link>
              <Link
                href="/contact"
                className="text-[var(--footer-text)] text-sm font-light opacity-80 hover:opacity-100 transition-opacity duration-150"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-[var(--footer-accent)] text-xs uppercase tracking-widest mb-4">
              Connect
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--footer-text)] text-sm font-light opacity-80 hover:opacity-100 transition-opacity duration-150"
              >
                LinkedIn
              </Link>
              <Link
                href="https://martindale.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--footer-text)] text-sm font-light opacity-80 hover:opacity-100 transition-opacity duration-150"
              >
                Martindale-Hubbell
              </Link>
              <Link
                href="https://avvo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--footer-text)] text-sm font-light opacity-80 hover:opacity-100 transition-opacity duration-150"
              >
                Avvo
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-[var(--footer-accent)] text-xs uppercase tracking-widest mb-4">
              Get in Touch
            </h4>
            <p className="text-[var(--footer-text)] text-sm font-light opacity-80">
              james@mitchelllaw.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--footer-accent)] border-opacity-30">
          <p className="text-[var(--footer-text)] text-xs font-light opacity-60 text-center">
            &copy; {currentYear} James Mitchell, Attorney at Law. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
