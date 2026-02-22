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

      {/* Value Proposition Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="max-w-5xl mx-auto">
          {/* Personal Injury Subsection */}
          <div className="mb-16">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--foreground)] mb-6">
                Personal Injury
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base font-light text-[var(--foreground)] leading-relaxed mb-4">
                When you&apos;ve been injured due to someone else&apos;s negligence, you deserve an advocate who understands both the legal system and the technical details of your case. As a former prosecutor and licensed engineer, I bring a unique perspective to accident investigation and evidence analysis.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed">
                I handle car accidents, truck accidents, motorcycle accidents, pedestrian accidents, and other personal injury matters throughout Georgia. My goal is to help you recover full compensation for your medical bills, lost wages, pain and suffering, and other damages.
              </p>
            </ScrollReveal>
          </div>

          {/* DUI Defense Subsection */}
          <div className="mb-16">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--foreground)] mb-6">
                DUI Defense
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base font-light text-[var(--foreground)] leading-relaxed mb-4">
                A DUI charge can threaten your license, your job, and your future. Having prosecuted these cases, I understand the system from the inside and know how to build an effective defense strategy tailored to your situation.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed">
                I provide honest assessments and aggressive representation, challenging evidence, questioning procedures, and fighting to protect your rights at every stage of the process.
              </p>
            </ScrollReveal>
          </div>

          {/* CTA Subsection */}
          <div className="text-center">
            <ScrollReveal>
              <h3 className="font-display text-2xl md:text-3xl font-light text-[var(--foreground)] mb-6">
                Get the Representation You Deserve
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-8 max-w-2xl mx-auto">
                Whether you&apos;re facing injuries from an accident or criminal charges, you don&apos;t have to face it alone. Contact my office today for a free consultation to discuss your case.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <Link href="/contact" className="btn-primary">
                Schedule Your Free Consultation
              </Link>
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
            <Link href="/contact" className="btn-outlined-light">
              Call Now
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
