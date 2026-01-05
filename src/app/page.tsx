import Link from "next/link";
import Marquee from "@/components/Marquee";
import ServicesAccordion from "@/components/ServicesAccordion";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <div className="text-center px-[var(--side-padding)] animate-reveal">
          <img
            src="/logo.svg"
            alt="Assured Justice"
            className="h-48 md:h-64 lg:h-80 mx-auto"
          />
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee />

      {/* Intro Split Section */}
      <section className="px-[var(--side-padding)] py-[var(--section-spacing)]">
        <div className="grid md:grid-cols-[30%_70%] gap-12">
          <ScrollReveal>
            <span className="heading-serif">About</span>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal delay={0.18}>
              <p className="text-lg font-light text-[var(--foreground)] leading-relaxed max-w-2xl">
                With over 15 years of experience in corporate and business law, I provide
                strategic counsel to entrepreneurs, growing companies, and established businesses
                navigating complex legal challenges.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.36}>
              <p className="text-lg font-light text-[var(--muted-foreground)] leading-relaxed max-w-2xl">
                Every client relationship begins with listening — understanding your business,
                your goals, and the challenges you face. From there, I craft practical legal
                solutions that protect your interests while enabling your success. Clear communication,
                sound judgment, and unwavering advocacy are at the heart of my practice.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Accordion Section */}
      <ServicesAccordion />

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
                <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)] mb-6 leading-tight">
                  Counsel with <span className="font-serif italic">clarity</span>,
                  <br />advocate with conviction
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.36}>
                <p className="text-[var(--muted-foreground)] font-light max-w-xl leading-relaxed">
                  I don&apos;t just review contracts — I help you understand the implications and
                  make informed decisions. Every legal strategy is tailored to your specific
                  situation, every recommendation grounded in practical business reality.
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
                <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)] mb-6 leading-tight">
                  Responsive by <span className="font-serif italic">commitment</span>,
                  <br />thorough by practice
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.36}>
                <p className="text-[var(--muted-foreground)] font-light max-w-xl leading-relaxed">
                  Effective legal representation requires partnership. I work closely with you
                  throughout every matter, from initial consultation to final resolution, ensuring
                  you&apos;re informed and confident at every step of the process.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Background */}
      <section className="bg-[var(--primary-dark)] py-20">
        <div className="flex flex-col items-center justify-center text-center px-[var(--side-padding)]">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-light text-[var(--footer-text)] mb-8">
              Schedule a <span className="font-serif italic">consultation</span>
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
