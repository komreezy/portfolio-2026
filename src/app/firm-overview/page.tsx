import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Our Firm | DUI Defense & Personal Injury | Assured Justice Firm",
  description: "Assured Justice Firm is led by Arash Jafary, a former prosecutor and licensed engineer serving Alpharetta, Cobb County, Fulton County, and all of Georgia. Learn why clients choose us.",
  keywords: ["Assured Justice Firm", "Alpharetta attorney", "Cobb County lawyer", "former prosecutor Georgia", "personal injury firm"],
};

export default function FirmOverview() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)] bg-[var(--card)]">
        <div className="max-w-4xl">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-light text-[var(--foreground)] leading-tight mb-4">
              A Different Kind of Law Firm
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h3 className="text-xl font-medium text-[var(--primary)] mb-2">
              DUI Defense & Personal Injury Attorney in Georgia
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-[var(--muted-foreground)] font-light mb-8">
              Serving Alpharetta, Cobb County, Fulton County, and all of Georgia
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <Link href="/contact" className="btn-outlined">
              Schedule a Free Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Firm Overview Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--foreground)] mb-8">
                Our Promise
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base font-light text-[var(--foreground)] leading-relaxed mb-6">
                At Assured Justice Firm, we believe every client deserves more than just legal representation—they deserve an advocate who fights like it&apos;s personal. Founded by Arash Jafary, a former prosecutor at the Fulton County District Attorney&apos;s Office and Cobb County Solicitor General&apos;s Office, our firm brings insider knowledge and technical expertise to every DUI defense and personal injury case.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-4">
                We serve clients in Alpharetta, Cobb County, Fulton County, Roswell, Marietta, Johns Creek, and throughout Georgia. Whether you&apos;re facing DUI charges or recovering from a car, truck, motorcycle, or pedestrian accident, we fight tirelessly against insurance companies and prosecutors to protect your rights.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-8">
                With over 500 cases handled and results including a $250,000 car accident settlement, we have the experience and track record to fight for maximum compensation.
              </p>
            </ScrollReveal>
            {/* Testimonial */}
            <ScrollReveal delay={0.35}>
              <div className="p-6 border-l-2 border-[var(--primary)]">
                <h3 className="text-sm font-medium text-[var(--primary)] uppercase tracking-wider mb-4">
                  HIGHLY RECOMMENDED!
                </h3>
                <p className="text-sm font-light text-[var(--foreground)] leading-relaxed mb-4">
                  &ldquo;Arash is someone who makes sure to get all facts and analyzes them well. He is responsive, thorough, and genuinely cares about his clients. I highly recommend him for anyone seeking legal representation.&rdquo;
                </p>
                <p className="text-xs font-medium text-[var(--muted-foreground)]">
                  Babak K.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} className="clip-reveal-wrapper">
            <Image
              src="/firm-overview.avif"
              alt="Professional law office"
              width={800}
              height={600}
              className="w-full h-auto object-cover aspect-[4/3] rounded-sm"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Trial Attorney Difference */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)] bg-[var(--card)]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal delay={0.1} className="clip-reveal-wrapper order-2 md:order-1">
            <Image
              src="/fountain-pen.jpg"
              alt="Fountain pen writing on paper"
              width={800}
              height={600}
              className="w-full h-auto object-cover aspect-[4/3] rounded-sm"
            />
          </ScrollReveal>
          <div className="order-1 md:order-2">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--foreground)] mb-8">
                The Trial Attorney Difference
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h3 className="text-lg font-medium text-[var(--primary)] mb-4">
                Honest, Expert Lawyers
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="text-base font-light text-[var(--foreground)] leading-relaxed mb-6">
                Real trial experience gives leverage in every negotiation. Insurance companies and prosecutors know I&apos;m prepared to take your case to court if they don&apos;t offer fair treatment — and that makes all the difference.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-6">
                As a former prosecutor, I&apos;ve handled hundreds of cases and know how the state builds its case. This insider knowledge helps me find weaknesses others miss, whether we&apos;re negotiating a settlement or preparing for trial.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.45}>
              <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-8">
                When you hire me, you work directly with me—not a case manager. I believe in clear communication, personal attention, and treating every client&apos;s case with the same care and urgency as if the roles were reversed.
              </p>
            </ScrollReveal>
            {/* Testimonial */}
            <ScrollReveal delay={0.55}>
              <div className="p-6 border-l-2 border-[var(--primary)] bg-white/50">
                <h3 className="text-sm font-medium text-[var(--primary)] uppercase tracking-wider mb-4">
                  HONEST & DIRECT!
                </h3>
                <p className="text-sm font-light text-[var(--foreground)] leading-relaxed mb-4">
                  &ldquo;What I appreciated most was Arash&apos;s honesty. He gave me straight answers about my case, explained everything in plain language, and always returned my calls. You work with him directly, not a case manager.&rdquo;
                </p>
                <p className="text-xs font-medium text-[var(--muted-foreground)]">
                  Sarah M.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--foreground)] text-center mb-12">
              Why Choose Assured Justice Firm?
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="p-6 border border-[var(--border)] rounded-sm">
                <h3 className="font-medium text-[var(--foreground)] mb-3">Other Firms</h3>
                <ul className="space-y-2 text-sm font-light text-[var(--muted-foreground)]">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">&#10007;</span>
                    You talk to case managers and paralegals
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">&#10007;</span>
                    Cookie-cutter approach to every case
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">&#10007;</span>
                    Quick settlements without maximizing value
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">&#10007;</span>
                    No technical expertise for accident analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">&#10007;</span>
                    Limited trial experience
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="p-6 border-2 border-[var(--primary)] rounded-sm bg-[var(--primary)]/5">
                <h3 className="font-medium text-[var(--primary)] mb-3">Assured Justice Firm</h3>
                <ul className="space-y-2 text-sm font-light text-[var(--foreground)]">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">&#10003;</span>
                    Direct access to your attorney on every call
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">&#10003;</span>
                    Tailored strategy for your unique situation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">&#10003;</span>
                    Fight for maximum compensation, not quick payouts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">&#10003;</span>
                    Licensed Engineer-in-Training for crash analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">&#10003;</span>
                    Former prosecutor with real trial experience
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-[var(--side-padding)] bg-[var(--primary-dark)]">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--footer-text)] mb-6">
              Learn More at a Consultation
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-base font-light text-[var(--footer-text)] opacity-80 mb-8">
              If you or a loved one has been injured due to someone else&apos;s negligence, or if you&apos;re facing DUI charges, I invite you to contact my law firm for a free consultation. To get started, fill out my online contact form or call my office at <strong className="font-medium">(678) 522-6273</strong>.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <Link href="/contact" className="btn-outlined-light">
              Schedule a Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
