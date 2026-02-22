import Link from "next/link";
import Image from "next/image";
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
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-[var(--primary)] font-medium mb-6">
                Former Prosecutor · Licensed Engineer · Georgia Attorney
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
                We Walk With You Through Your Hardest Moments
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto mb-10">
                Personal Injury and DUI Defense throughout Georgia. You get insider knowledge from a former prosecutor, proven courtroom strategy, and direct access to your attorney every step of the way.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary-light">
                  Schedule Free Consultation
                </Link>
                <a href="tel:+16785226273" className="btn-secondary-light">
                  Call (678) 522-6273
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-[var(--side-padding)] bg-[var(--card)]">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <blockquote className="text-xl md:text-2xl font-light text-[var(--foreground)] leading-relaxed mb-4">
              &ldquo;Every client deserves to be treated with dignity, fought for relentlessly, and advised with integrity—even when the answers aren&apos;t easy.&rdquo;
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-sm font-medium text-[var(--primary)]">&mdash; Arash Jafary</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Attorney Introduction Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--foreground)] text-center mb-12">
            DUI Defense and Personal Injury Attorney Serving Georgia
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <ScrollReveal delay={0.1} className="clip-reveal-wrapper">
            <div className="aspect-[3/4] relative overflow-hidden rounded-sm">
              <Image
                src="/arash-jafary-2.jpg"
                alt="Arash Jafary - Attorney at Law"
                fill
                className="object-cover object-top"
              />
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal delay={0.15}>
              <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-2">Arash Jafary</h3>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-sm uppercase tracking-wider text-[var(--primary)] mb-6">Attorney at Law • Former Prosecutor • Licensed Engineer</p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="text-base font-light text-[var(--foreground)] leading-relaxed mb-4">
                I bring a unique combination of skills to every case: experience as a former prosecutor understanding how cases are built and tried, and a background as a licensed engineer understanding crash evidence, investigations, and technical details that others miss.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-4">
                With over 500 cases handled, including a $250,000 car accident settlement, I know how to fight for maximum compensation. When you work with me, you work directly with me—not a case manager. I handle every aspect of your case personally.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-8">
                I work on a contingency fee basis for personal injury cases, which means you pay nothing unless we win. Your focus should be on healing — let me handle the legal fight.
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

      {/* What Happens When You Call Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)] bg-[var(--card)]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--foreground)] text-center mb-16">
              What Happens When You Call
            </h2>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row md:items-stretch gap-4 md:gap-0">
            {/* Step 1 */}
            <ScrollReveal delay={0.1} className="flex-1">
              <div className="bg-[var(--background)] p-6 rounded-sm shadow-sm border border-[var(--border)] text-center h-full">
                <span className="font-display text-xl text-[var(--primary)] italic">1</span>
                <h3 className="font-medium text-[var(--foreground)] mt-3 mb-3">Free Consultation</h3>
                <p className="text-sm font-light text-[var(--muted-foreground)] leading-relaxed">
                  Call, text, or fill out the form. We respond within 24 hours, often same-day.
                </p>
              </div>
            </ScrollReveal>

            {/* Arrow 1 */}
            <div className="hidden md:flex items-center justify-center w-8 shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[var(--primary)]" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Step 2 */}
            <ScrollReveal delay={0.2} className="flex-1">
              <div className="bg-[var(--background)] p-6 rounded-sm shadow-sm border border-[var(--border)] text-center h-full">
                <span className="font-display text-xl text-[var(--primary)] italic">2</span>
                <h3 className="font-medium text-[var(--foreground)] mt-3 mb-3">Case Evaluation</h3>
                <p className="text-sm font-light text-[var(--muted-foreground)] leading-relaxed">
                  Arash personally reviews your situation and explains your options — no obligation.
                </p>
              </div>
            </ScrollReveal>

            {/* Arrow 2 */}
            <div className="hidden md:flex items-center justify-center w-8 shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[var(--primary)]" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Step 3 */}
            <ScrollReveal delay={0.3} className="flex-1">
              <div className="bg-[var(--background)] p-6 rounded-sm shadow-sm border border-[var(--border)] text-center h-full">
                <span className="font-display text-xl text-[var(--primary)] italic">3</span>
                <h3 className="font-medium text-[var(--foreground)] mt-3 mb-3">Strategy Session</h3>
                <p className="text-sm font-light text-[var(--muted-foreground)] leading-relaxed">
                  We build a tailored legal strategy using trial experience and technical expertise.
                </p>
              </div>
            </ScrollReveal>

            {/* Arrow 3 */}
            <div className="hidden md:flex items-center justify-center w-8 shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[var(--primary)]" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Step 4 */}
            <ScrollReveal delay={0.4} className="flex-1">
              <div className="bg-[var(--background)] p-6 rounded-sm shadow-sm border border-[var(--border)] text-center h-full">
                <span className="font-display text-xl text-[var(--primary)] italic">4</span>
                <h3 className="font-medium text-[var(--foreground)] mt-3 mb-3">Fight For You</h3>
                <p className="text-sm font-light text-[var(--muted-foreground)] leading-relaxed">
                  We negotiate hard and go to trial if needed. You have a real trial lawyer in your corner.
                </p>
              </div>
            </ScrollReveal>
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

      {/* Credentials Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--foreground)] text-center mb-12">
              Credentials
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Former Prosecutor */}
            <ScrollReveal delay={0.1}>
              <div className="bg-[#F6F5EF] rounded-lg p-6 border border-[var(--border)] h-full">
                <div className="flex items-center gap-2 mb-4">
                  <svg width="16" height="16" className="text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24" style={{minWidth: '16px', maxWidth: '16px'}}>
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                  </svg>
                  <h3 className="font-medium text-[var(--foreground)]">Former Prosecutor</h3>
                </div>
                <p className="text-sm font-light text-[var(--muted-foreground)] leading-relaxed">
                  Handled hundreds of cases at the Fulton County DA&apos;s Office and Cobb County Solicitor General. Knows exactly how the state builds cases — and how to dismantle them.
                </p>
              </div>
            </ScrollReveal>

            {/* Licensed Engineer */}
            <ScrollReveal delay={0.2}>
              <div className="bg-[#F6F5EF] rounded-lg p-6 border border-[var(--border)] h-full">
                <div className="flex items-center gap-2 mb-4">
                  <svg width="16" height="16" className="text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24" style={{minWidth: '16px', maxWidth: '16px'}}>
                    <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                  </svg>
                  <h3 className="font-medium text-[var(--foreground)]">Licensed Engineer (EIT)</h3>
                </div>
                <p className="text-sm font-light text-[var(--muted-foreground)] leading-relaxed">
                  Engineer-in-Training certification provides unique technical expertise to analyze accident reconstruction, vehicle data, and engineering evidence that other attorneys overlook.
                </p>
              </div>
            </ScrollReveal>

            {/* Direct Attorney Access */}
            <ScrollReveal delay={0.3}>
              <div className="bg-[#F6F5EF] rounded-lg p-6 border border-[var(--border)] h-full">
                <div className="flex items-center gap-2 mb-4">
                  <svg width="16" height="16" className="text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24" style={{minWidth: '16px', maxWidth: '16px'}}>
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                  </svg>
                  <h3 className="font-medium text-[var(--foreground)]">Direct Attorney Access</h3>
                </div>
                <p className="text-sm font-light text-[var(--muted-foreground)] leading-relaxed">
                  You work directly with Arash — not a paralegal or case manager. Every call, every update, every strategy session is with your actual trial attorney.
                </p>
              </div>
            </ScrollReveal>
          </div>
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
                  Stand up for people
                  <br />when the system feels overwhelming
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.36}>
                <p className="text-[var(--muted-foreground)] font-light max-w-xl leading-relaxed">
                  I believe in honesty, preparation, and accountability. I&apos;ll give you straight answers—even when they&apos;re not what you want to hear. My goal is to make a real difference in your life, not just collect a fee. I treat every client&apos;s case as if the roles were reversed.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} className="clip-reveal-wrapper">
              <div className="relative rounded-sm overflow-hidden">
                <Image
                  src="/gavel.jpg"
                  alt="Wooden gavel on marble surface"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/20 to-transparent pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Block 2: Image Left (30%), Text Right (70%) */}
        <div className="px-[var(--side-padding)]">
          <div className="grid md:grid-cols-[30%_70%] gap-10 items-center">
            <ScrollReveal delay={0.1} className="clip-reveal-wrapper">
              <div className="relative rounded-sm overflow-hidden">
                <Image
                  src="/consultation-meeting.jpg"
                  alt="Professional consultation meeting"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-[var(--primary)]/20 to-transparent pointer-events-none" />
              </div>
            </ScrollReveal>
            <div>
              <ScrollReveal>
                <span className="heading-serif mb-6 block">My Approach</span>
              </ScrollReveal>
              <ScrollReveal delay={0.18}>
                <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--foreground)] mb-6 leading-tight">
                  Direct relationship,
                  <br />personal attention
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.36}>
                <p className="text-[var(--muted-foreground)] font-light max-w-xl leading-relaxed">
                  When you hire me, you get me—not a case manager or paralegal handling your calls. I explain things in plain language, return calls promptly, and keep you informed at every step. You deserve an attorney who treats your case with the same care and urgency as if it were their own family.
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
              Schedule a FREE Consultation
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <a href="tel:+16785226273" className="btn-outlined-light">
              Call (678) 522-6273
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
