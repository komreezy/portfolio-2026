import Link from "next/link";
import Marquee from "@/components/Marquee";
import ServicesAccordion from "@/components/ServicesAccordion";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section - Dark Background */}
      <section className="min-h-screen flex items-center justify-center bg-[var(--primary-dark)]">
        <div className="text-center px-[var(--side-padding)] animate-reveal">
          <h1 className="display-text-light">
            Crafting Digital
            <br />
            <span className="font-serif italic">Experiences</span>
          </h1>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee />

      {/* Intro Split Section */}
      <section className="px-[var(--side-padding)] py-[var(--section-spacing)]">
        <div className="grid md:grid-cols-[30%_70%] gap-12">
          <div className="animate-reveal">
            <span className="heading-serif">About</span>
          </div>
          <div className="space-y-6 animate-reveal-delay-1">
            <p className="text-lg font-light text-[var(--foreground)] leading-relaxed max-w-2xl">
              We believe in the power of thoughtful design to transform brands and create
              lasting connections. Our approach combines strategic thinking with creative
              execution to deliver digital experiences that resonate.
            </p>
            <p className="text-lg font-light text-[var(--muted-foreground)] leading-relaxed max-w-2xl">
              Every project begins with understanding — your goals, your audience, your vision.
              From there, we craft solutions that are not just beautiful, but purposeful.
              Clean code, elegant design, and meaningful user experiences are at the heart
              of everything we do.
            </p>
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
              <span className="heading-serif mb-6 block">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)] mb-6 leading-tight">
                Design with <span className="font-serif italic">intention</span>,
                <br />build with purpose
              </h2>
              <p className="text-[var(--muted-foreground)] font-light max-w-xl leading-relaxed">
                We don&apos;t just create websites — we craft digital experiences that tell your story.
                Every element is considered, every interaction is meaningful, and every pixel
                serves a purpose.
              </p>
            </div>
            <div className="image-placeholder rounded-sm"></div>
          </div>
        </div>

        {/* Block 2: Image Left (30%), Text Right (70%) */}
        <div className="px-[var(--side-padding)]">
          <div className="grid md:grid-cols-[30%_70%] gap-10 items-center">
            <div className="image-placeholder rounded-sm"></div>
            <div>
              <span className="heading-serif mb-6 block">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)] mb-6 leading-tight">
                Collaborative by <span className="font-serif italic">nature</span>,
                <br />iterative by design
              </h2>
              <p className="text-[var(--muted-foreground)] font-light max-w-xl leading-relaxed">
                Great work happens through partnership. We work closely with you at every stage,
                from initial concept to final launch, ensuring the end result exceeds expectations
                while staying true to your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Background */}
      <section className="bg-[var(--primary-dark)] py-20">
        <div className="flex flex-col items-center justify-center text-center px-[var(--side-padding)]">
          <h2 className="text-4xl md:text-5xl font-light text-[var(--footer-text)] mb-8">
            Let&apos;s work <span className="font-serif italic">together</span>
          </h2>
          <Link href="/contact" className="btn-outlined-light">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
