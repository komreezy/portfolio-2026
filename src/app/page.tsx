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
                Fighting for What&apos;s Right
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-xl md:text-2xl font-light text-white/80 mb-8">
                Put a Former Prosecutor to Work for You
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <Link href="/contact" className="btn-primary-light">
                Schedule a Consultation Today
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
              &ldquo;Whether this was your first and only brush with the law or a repeat offense, I&apos;ll help you find a resolution that protects your interests and helps you move on to a better, brighter life.&rdquo;
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
            Criminal Defense Attorney Serving Georgia
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
                After graduating cum laude from law school, I was a practicing prosecutor for almost a decade. In that decade, I became well-equipped with the knowledge and resources to curate strategies against a defendant&apos;s case.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-4">
                Now, as a criminal defense attorney, I remember many of those strategies and tactics I used as a criminal prosecutor to stay one step ahead of the opposition that I now fight against.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-8">
                My experience as a prosecutor provides me with a unique advantage because I know how the other side operates — and I intend to use that advantage to benefit your case.
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
              A Strong Defense You Can Count On
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ScrollReveal delay={0.1}>
                <p className="text-base font-light text-[var(--foreground)] leading-relaxed mb-4">
                  So you have been charged with a crime; what now? You may think that choosing a public defender in court may be your best option, especially if you have a tight budget. The reality is that your future is at risk if you&apos;re convicted. At our firm, we work hard to protect your rights.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed">
                  After working as a criminal prosecutor for ten years, I learned many different legal strategies that can be used to punish those charged with crimes such as domestic violence, drunk driving (DUI), or drug crimes. Now, it&apos;s my job to use the knowledge and mind of a prosecutor to my client&apos;s advantage.
                </p>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal delay={0.15}>
                <p className="text-base font-light text-[var(--foreground)] leading-relaxed mb-4">
                  While representing you after you have been accused, I will build a thorough argument to ensure you are fought for honestly, justly, and efficiently. I&apos;ve built a reputation in the legal community as a skilled defense litigator because of my ability to think outside the box.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed">
                  Don&apos;t risk your future with just any attorney. I have dealt with cases involving anything from self-defense to juvenile offenses and traffic violations. Call my office today to put an accomplished criminal defense attorney on your side.
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
              Trouble With The Law?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Link href="/contact" className="btn-outlined-light">
              Just Call Today
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
