import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const practiceAreas = [
    { href: "/practice-areas/dui", label: "DUI Lawyer" },
    { href: "/practice-areas/domestic-violence", label: "Domestic Violence" },
    { href: "/practice-areas/juvenile-defense", label: "Juvenile Defense" },
    { href: "/practice-areas/mental-health", label: "Mental Health" },
    { href: "/practice-areas/probation-violation", label: "Probation Violation" },
    { href: "/practice-areas/self-defense", label: "Self Defense" },
    { href: "/practice-areas/traffic-violations", label: "Traffic Violations" },
  ];

  const quickLinks = [
    { href: "/contact", label: "Contact Us" },
    { href: "/firm-overview", label: "Firm Overview" },
    { href: "/about", label: "About" },
    { href: "/practice-areas", label: "Practice Areas" },
  ];

  const resources = [
    { href: "/blog", label: "Blog" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <footer className="bg-[var(--footer-bg)] mt-auto py-16">
      <div className="px-[var(--side-padding)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Get in Touch Column */}
          <div>
            <h3 className="text-[var(--footer-accent)] text-xs uppercase tracking-widest mb-6">
              Get in Touch
            </h3>
            <div className="mb-6">
              <p className="text-[var(--footer-accent)] font-serif text-lg">
                Arash Jafari
              </p>
              <p className="text-[var(--footer-text)] text-sm font-light opacity-80">
                Attorney at Law
              </p>
            </div>
            <div className="space-y-2 text-[var(--footer-text)] text-sm font-light opacity-80">
              <p>1190 Buckhead Crossing Suite D,</p>
              <p>Woodstock, GA 30189</p>
              <p className="pt-2">(678) 362-3176 – Phone</p>
              <p>(678) 669-2604 – Fax</p>
              <p>
                <a
                  href="mailto:contact@arashjafarilaw.com"
                  className="hover:opacity-100 transition-opacity duration-150"
                >
                  contact@arashjafarilaw.com
                </a>
              </p>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-[var(--footer-accent)] text-xs uppercase tracking-widest mb-6">
              Resources
            </h4>
            <nav className="flex flex-col gap-3">
              {resources.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--footer-text)] text-sm font-light opacity-80 hover:opacity-100 transition-opacity duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Criminal Defense Column */}
          <div>
            <h4 className="text-[var(--footer-accent)] text-xs uppercase tracking-widest mb-6">
              Criminal Defense
            </h4>
            <nav className="flex flex-col gap-3">
              {practiceAreas.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--footer-text)] text-sm font-light opacity-80 hover:opacity-100 transition-opacity duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-[var(--footer-accent)] text-xs uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--footer-text)] text-sm font-light opacity-80 hover:opacity-100 transition-opacity duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--footer-text)] opacity-80 hover:opacity-100 transition-opacity duration-150"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.17.5C10.24.5,9.25,3.11,9.25,5.32v2.14H6.5v4h2.75V24h5.25V11.5h3.54l.46-4Z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--footer-text)] opacity-80 hover:opacity-100 transition-opacity duration-150"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--footer-text)] opacity-80 hover:opacity-100 transition-opacity duration-150"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.45,20.45H16.89V14.88c0-1.33,0-3-1.85-3s-2.14,1.45-2.14,2.94v5.62H9.34V9h3.42v1.56h.05a3.76,3.76,0,0,1,3.38-1.85c3.62,0,4.28,2.38,4.28,5.48v6.26ZM5.34,7.43A2.07,2.07,0,1,1,7.41,5.36,2.07,2.07,0,0,1,5.34,7.43Zm1.78,13H3.56V9H7.12ZM22.22,0H1.77A1.75,1.75,0,0,0,0,1.73V22.27A1.75,1.75,0,0,0,1.77,24H22.22A1.76,1.76,0,0,0,24,22.27V1.73A1.76,1.76,0,0,0,22.22,0Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--footer-accent)] border-opacity-30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--footer-text)] text-xs font-light opacity-60">
              &copy; {currentYear} Arash Jafari, Attorney at Law. All rights reserved.
            </p>
            <div className="flex gap-4 text-[var(--footer-text)] text-xs font-light opacity-60">
              <Link href="/disclaimer" className="hover:opacity-100 transition-opacity duration-150">
                Disclaimer
              </Link>
              <span>|</span>
              <Link href="/privacy-policy" className="hover:opacity-100 transition-opacity duration-150">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/terms" className="hover:opacity-100 transition-opacity duration-150">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <p className="text-[var(--footer-text)] text-xs font-light opacity-40 mt-4 text-center max-w-4xl mx-auto">
            The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
}
