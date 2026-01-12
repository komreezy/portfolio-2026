import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export default function FirmOverview() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)] bg-[var(--card)]">
        <div className="max-w-4xl">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-light text-[var(--foreground)] leading-tight mb-4">
              Local & Reliable Legal Guidance
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h3 className="text-xl font-medium text-[var(--primary)] mb-2">
              Personal Injury Attorney in Georgia
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-[var(--muted-foreground)] font-light mb-8">
              Arash Jafari Law
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <Link href="/contact" className="btn-outlined">
              Schedule a Consultation
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
                Firm Overview
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base font-light text-[var(--foreground)] leading-relaxed mb-6">
                The Law Office of Arash Jafari is a dedicated personal injury firm committed to helping accident victims throughout Georgia get the compensation they deserve.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed">
                Whether you were injured in a car accident, slip and fall, or due to medical negligence, we fight tirelessly against insurance companies to maximize your recovery and help you move forward with your life.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} className="clip-reveal-wrapper">
            <div className="image-placeholder aspect-[4/3] rounded-sm"></div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trial Attorney Difference */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)] bg-[var(--card)]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal delay={0.1} className="clip-reveal-wrapper order-2 md:order-1">
            <div className="image-placeholder aspect-[4/3] rounded-sm"></div>
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
                We pride ourselves on our trial skills, which gives us leverage in every negotiation. Insurance companies know that we&apos;re prepared to take your case to court if they don&apos;t offer fair compensation — and that makes all the difference.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-6">
                Most personal injury cases settle before trial, but having an attorney with courtroom experience ensures the insurance company takes your claim seriously. We know how to present evidence, question witnesses, and argue persuasively before a jury.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.45}>
              <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed">
                We place a premium on communication with our clients. You&apos;ll always know the status of your case and understand your options. We work with you to make informed decisions about settlements and, when necessary, trial.
              </p>
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
              If you or a loved one has been injured due to someone else&apos;s negligence, I invite you to contact my law firm for a free consultation. To get started, fill out my online contact form or call my office at <strong className="font-medium">(678) 362-3176</strong>.
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
