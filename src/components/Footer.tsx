import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const practiceAreas = [
    { href: "/practice-areas/dui-defense", label: "DUI Defense" },
    { href: "/practice-areas/car-accidents", label: "Car Accidents" },
    { href: "/practice-areas/truck-accidents", label: "Truck Accidents" },
    { href: "/practice-areas/motorcycle-accidents", label: "Motorcycle Accidents" },
    { href: "/practice-areas/pedestrian-accidents", label: "Pedestrian Accidents" },
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
          {/* Call Now Column */}
          <div>
            <h3 className="text-[var(--footer-accent)] text-xs uppercase tracking-widest mb-6">
              Call Now
            </h3>
            <div className="mb-6">
              <p className="text-[var(--footer-accent)] font-serif text-lg">
                Arash Jafary
              </p>
              <p className="text-[var(--footer-text)] text-sm font-light opacity-80">
                Attorney at Law
              </p>
            </div>
            <div className="space-y-2 text-[var(--footer-text)] text-sm font-light opacity-80">
              <p>4575 Webb Bridge Road, #2361</p>
              <p>Alpharetta, GA 30023</p>
              <p className="pt-2">(678) 522-6273 – Phone</p>
              <p>
                <a
                  href="mailto:Info@assuredjusticefirm.com"
                  className="hover:opacity-100 transition-opacity duration-150"
                >
                  Info@assuredjusticefirm.com
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

          {/* Practice Areas Column */}
          <div>
            <h4 className="text-[var(--footer-accent)] text-xs uppercase tracking-widest mb-6">
              Practice Areas
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
            <SocialMediaLinks variant="dark" className="mt-6" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--footer-accent)] border-opacity-30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--footer-text)] text-xs font-light opacity-60">
              &copy; {currentYear} Assured Justice Firm. All rights reserved.
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
