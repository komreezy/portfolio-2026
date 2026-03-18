import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Truck Accident Lawyer in Georgia | Assured Justice Firm",
  description: "Injured in a truck accident in Georgia? Engineer and former prosecutor Arash Jafary has the technical expertise to take on trucking companies. Free consultation. Call (678) 522-6273.",
  keywords: ["truck accident lawyer Georgia", "semi truck accident attorney", "18-wheeler accident lawyer", "commercial truck crash attorney", "trucking accident lawyer Alpharetta"],
};

export default function TruckAccidents() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)] bg-[var(--card)]">
        <div className="max-w-4xl">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-wider text-[var(--primary)] mb-4">Practice Area</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl font-light text-[var(--foreground)] leading-tight mb-6">
              Truck Accident Lawyer in Georgia
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[var(--muted-foreground)] font-light mb-8">
              Engineering expertise to analyze black box data and take on trucking companies and their insurers.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Free Consultation
              </Link>
              <a href="tel:+16785226273" className="btn-outlined">
                Call (678) 522-6273
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-light text-[var(--foreground)] mb-6">
              Catastrophic Injuries Require Specialized Legal Representation
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base font-light text-[var(--foreground)] leading-relaxed mb-6">
              Collisions with commercial trucks—18-wheelers, semi-trucks, delivery vehicles—often cause catastrophic or fatal injuries. An 80,000-pound commercial truck can cause devastation that a passenger vehicle simply cannot. These cases require an attorney who understands both the complex federal regulations governing trucking companies and the technical evidence involved.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-6">
              As a licensed Engineer-in-Training, I have the technical background to analyze electronic logging device (ELD) data, black box information, maintenance records, and crash reconstruction evidence. This allows me to identify violations that other attorneys might miss—like hours-of-service violations, improper load distribution, or mechanical failures.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-8">
              Trucking companies and their insurers have deep pockets and aggressive legal teams. They often dispatch investigators to the accident scene within hours, working to minimize their liability before you even know your rights. I move quickly to preserve critical evidence and build the strongest possible case.
            </p>
          </ScrollReveal>

          {/* What Makes Truck Cases Different */}
          <ScrollReveal delay={0.25}>
            <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">
              What Makes Truck Accident Cases Different
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <ul className="space-y-4 mb-8">
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong className="text-[var(--foreground)]">Multiple liable parties</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">The driver, trucking company, cargo loader, vehicle manufacturer, and maintenance providers may all share responsibility.</p>
              </li>
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong className="text-[var(--foreground)]">Federal regulations</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">FMCSA regulations govern hours of service, vehicle maintenance, driver qualifications, and cargo loading. Violations create liability.</p>
              </li>
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong className="text-[var(--foreground)]">Electronic evidence</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">ELDs, GPS data, and black boxes contain crucial evidence that must be preserved before trucking companies can overwrite it.</p>
              </li>
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong className="text-[var(--foreground)]">Higher policy limits</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">Commercial trucks carry higher insurance minimums ($750,000+), but insurers fight harder to protect these larger policies.</p>
              </li>
            </ul>
          </ScrollReveal>

          {/* What You Can Recover */}
          <ScrollReveal delay={0.35}>
            <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">
              Compensation in Truck Accident Cases
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="bg-[var(--card)] p-6 rounded-sm border border-[var(--border)] mb-8">
              <p className="text-base font-light text-[var(--muted-foreground)] mb-4">
                Due to the severity of injuries in truck accidents, compensation often includes:
              </p>
              <ul className="space-y-3 text-base font-light text-[var(--foreground)]">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span>Extensive medical treatment, surgeries, and rehabilitation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span>Long-term or permanent disability accommodations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span>Lost income and diminished earning capacity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span>Pain, suffering, and emotional trauma</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span>Wrongful death damages for families</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-[var(--side-padding)] bg-[var(--primary-dark)]">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-light text-[var(--footer-text)] mb-6">
              Injured in a Truck Accident? Act Fast.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-base font-light text-[var(--footer-text)] opacity-80 mb-8">
              Critical evidence can disappear quickly. Call now for a free consultation—I&apos;ll start preserving evidence and building your case immediately.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <a href="tel:+16785226273" className="btn-outlined-light">
              Call (678) 522-6273
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
