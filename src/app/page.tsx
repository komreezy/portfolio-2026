import Link from "next/link";
import Marquee from "@/components/Marquee";
import ServicesAccordion from "@/components/ServicesAccordion";
import ScrollReveal from "@/components/ScrollReveal";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreview from "@/components/BlogPreview";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 px-[var(--side-padding)] py-20 w-full text-center">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
                Injured? We Fight for You
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-xl md:text-2xl font-light text-white/80 mb-8">
                Experienced Personal Injury Attorneys in Georgia
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <Link href="/contact" className="btn-primary-light">
                Get Your Free Case Review
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-[var(--side-padding)] bg-[var(--card)]">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <blockquote className="text-xl md:text-2xl font-light text-[var(--foreground)] leading-relaxed mb-4">
              &ldquo;When you&apos;re injured due to someone else&apos;s negligence, you deserve an attorney who will fight tirelessly to get you the compensation you need to recover and move forward with your life.&rdquo;
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-sm font-medium text-[var(--primary)]">&mdash; Arash Jafari</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Attorney Introduction Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--foreground)] text-center mb-12">
            Personal Injury Attorney Serving Georgia
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <ScrollReveal delay={0.1} className="clip-reveal-wrapper">
            <div className="image-placeholder aspect-[3/4] rounded-sm"></div>
          </ScrollReveal>
          <div>
            <ScrollReveal delay={0.15}>
              <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-2">Arash Jafari</h3>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-sm uppercase tracking-wider text-[var(--primary)] mb-6">Attorney at Law</p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="text-base font-light text-[var(--foreground)] leading-relaxed mb-4">
                With over a decade of experience representing injured victims throughout Georgia, I have recovered millions of dollars for my clients. I understand the tactics insurance companies use to minimize your claim, and I know how to fight back.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-4">
                From car accidents and slip-and-fall injuries to medical malpractice and wrongful death, I handle all types of personal injury cases. My approach is simple: treat every client like family and fight for every dollar they deserve.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-8">
                I work on a contingency fee basis, which means you pay nothing unless we win your case. Your focus should be on healing — let me handle the legal fight.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <Link href="/about" className="text-sm font-medium text-[var(--primary)] hover:underline inline-flex items-center gap-1">
                More About Me <span>&rarr;</span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Accordion Section */}
      <ServicesAccordion />

      {/* Value Proposition Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--foreground)] text-center mb-12">
              Maximum Compensation for Your Injuries
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ScrollReveal delay={0.1}>
                <p className="text-base font-light text-[var(--foreground)] leading-relaxed mb-4">
                  After an accident, you&apos;re dealing with medical bills, lost wages, and pain that affects every aspect of your life. Insurance companies will try to settle your claim quickly and cheaply. You deserve an attorney who will fight for the full value of your case.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed">
                  I investigate every case thoroughly, working with medical experts, accident reconstructionists, and economists to build the strongest possible claim. Whether through negotiation or trial, I pursue every avenue to maximize your recovery.
                </p>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal delay={0.15}>
                <p className="text-base font-light text-[var(--foreground)] leading-relaxed mb-4">
                  You may be entitled to compensation for medical expenses, lost income, pain and suffering, and more. I help clients understand all of their options and fight to recover damages for both current and future needs.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed">
                  Don&apos;t let the insurance company take advantage of you. Whether you were injured in a car accident, slip and fall, or due to medical negligence, call my office today for a free consultation.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[var(--primary-dark)] py-16">
        <div className="flex flex-col items-center justify-center text-center px-[var(--side-padding)]">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--footer-text)] mb-6">
              Injured in an Accident?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Link href="/contact" className="btn-outlined-light">
              Free Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Alternating Content Section */}
      <section className="py-[var(--section-spacing)]">
        {/* Block 1: Text Left (70%), Image Right (30%) */}
        <div className="px-[var(--side-padding)] mb-[var(--section-spacing)]">
          <div className="grid md:grid-cols-[70%_30%] gap-10 items-center">
            <div>
              <ScrollReveal>
                <span className="heading-serif mb-6 block">My Philosophy</span>
              </ScrollReveal>
              <ScrollReveal delay={0.18}>
                <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--foreground)] mb-6 leading-tight">
                  Counsel with clarity,
                  <br />advocate with conviction
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.36}>
                <p className="text-[var(--muted-foreground)] font-light max-w-xl leading-relaxed">
                  I don&apos;t just review your case — I help you understand the implications and make informed decisions. Every legal strategy is tailored to your specific situation, every recommendation grounded in practical reality.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} className="clip-reveal-wrapper">
              <div className="image-placeholder rounded-sm"></div>
            </ScrollReveal>
          </div>
        </div>

        {/* Block 2: Image Left (30%), Text Right (70%) */}
        <div className="px-[var(--side-padding)]">
          <div className="grid md:grid-cols-[30%_70%] gap-10 items-center">
            <ScrollReveal delay={0.1} className="clip-reveal-wrapper">
              <div className="image-placeholder rounded-sm"></div>
            </ScrollReveal>
            <div>
              <ScrollReveal>
                <span className="heading-serif mb-6 block">My Approach</span>
              </ScrollReveal>
              <ScrollReveal delay={0.18}>
                <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--foreground)] mb-6 leading-tight">
                  Responsive by commitment,
                  <br />thorough by practice
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.36}>
                <p className="text-[var(--muted-foreground)] font-light max-w-xl leading-relaxed">
                  Effective legal representation requires partnership. I work closely with you throughout every matter, from initial consultation to final resolution, ensuring you&apos;re informed and confident at every step of the process.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <BlogPreview />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Final CTA Section - Dark Background */}
      <section className="bg-[var(--primary-dark)] py-20">
        <div className="flex flex-col items-center justify-center text-center px-[var(--side-padding)]">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[var(--footer-text)] mb-8">
              Schedule a consultation
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <Link href="/contact" className="btn-outlined-light">
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
