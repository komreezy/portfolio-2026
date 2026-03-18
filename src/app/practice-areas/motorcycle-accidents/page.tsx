import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Motorcycle Accident Attorney Georgia | Assured Justice Firm",
  description: "Injured in a motorcycle accident in Georgia? Attorney Arash Jafary fights against bias and insurance companies to get riders the compensation they deserve. Free consultation. Call (678) 522-6273.",
  keywords: ["motorcycle accident attorney Georgia", "motorcycle crash lawyer", "biker accident attorney Alpharetta", "motorcycle injury lawyer Cobb County", "motorcycle wreck attorney"],
};

export default function MotorcycleAccidents() {
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
              Motorcycle Accident Attorney in Georgia
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[var(--muted-foreground)] font-light mb-8">
              Fighting bias against riders and insurance companies that try to shift blame.
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
              Motorcycle Riders Face Unique Challenges After an Accident
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base font-light text-[var(--foreground)] leading-relaxed mb-6">
              Motorcycle riders face unique dangers on Georgia roads—and often face unfair bias after accidents. When a negligent driver causes a collision, insurance companies and juries sometimes wrongly assume the motorcyclist was at fault simply because they were on a bike. I fight to ensure riders aren&apos;t held responsible for crashes they didn&apos;t cause.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-6">
              Because motorcyclists have minimal protection in a collision, injuries are often severe: traumatic brain injuries, spinal cord damage, road rash, broken bones, and internal injuries. These injuries require extensive medical treatment and can result in permanent disability. I work to recover full compensation for both immediate and long-term needs.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-8">
              As a licensed Engineer-in-Training, I can analyze accident reconstruction evidence, helmet effectiveness, and vehicle dynamics to build the strongest possible case for why the other driver—not you—was at fault.
            </p>
          </ScrollReveal>

          {/* Common Causes */}
          <ScrollReveal delay={0.25}>
            <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">
              Common Causes of Motorcycle Accidents
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <ul className="space-y-4 mb-8">
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong className="text-[var(--foreground)]">Left-turn collisions</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">Drivers turning left often fail to see oncoming motorcycles or misjudge their speed, causing devastating T-bone crashes.</p>
              </li>
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong className="text-[var(--foreground)]">Lane change accidents</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">Motorcycles in blind spots are often hit when drivers change lanes without properly checking mirrors.</p>
              </li>
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong className="text-[var(--foreground)]">Rear-end collisions</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">Distracted drivers who fail to see stopped motorcycles can cause serious injuries even at low speeds.</p>
              </li>
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong className="text-[var(--foreground)]">Door opening accidents</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">Parked drivers opening doors into traffic lanes can cause riders to crash or swerve into oncoming traffic.</p>
              </li>
            </ul>
          </ScrollReveal>

          {/* What You Can Recover */}
          <ScrollReveal delay={0.35}>
            <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">
              What You Can Recover
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="bg-[var(--card)] p-6 rounded-sm border border-[var(--border)] mb-8">
              <ul className="space-y-3 text-base font-light text-[var(--foreground)]">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>Medical expenses</strong> — emergency care, surgeries, rehabilitation, ongoing treatment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>Lost wages</strong> — time missed during recovery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>Future lost income</strong> — if injuries prevent returning to work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>Pain and suffering</strong> — physical pain and emotional trauma</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>Property damage</strong> — motorcycle repair or replacement, gear</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>Disfigurement</strong> — scarring from road rash or other injuries</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Fighting Bias */}
          <ScrollReveal delay={0.45}>
            <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">
              Fighting Bias Against Motorcyclists
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-8">
              Insurance adjusters often assume motorcyclists are reckless risk-takers. I counter this bias with facts: police reports, witness statements, accident reconstruction, and evidence that proves the other driver&apos;s negligence caused your injuries. I make sure your case is judged on what actually happened—not stereotypes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-[var(--side-padding)] bg-[var(--primary-dark)]">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-light text-[var(--footer-text)] mb-6">
              Injured in a Motorcycle Accident? I Fight for Riders.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-base font-light text-[var(--footer-text)] opacity-80 mb-8">
              Don&apos;t let insurance companies blame you for an accident you didn&apos;t cause. Call now for a free consultation.
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
