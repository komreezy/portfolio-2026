import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center px-[var(--side-padding)] py-[var(--section-spacing)]">
        <div className="w-full">
          <div className="grid md:grid-cols-[30%_70%] gap-12 items-end">
            {/* Left Column - Label */}
            <div className="animate-reveal">
              <span className="heading-serif">Developer & Designer</span>
            </div>

            {/* Right Column - Main Content */}
            <div>
              <h1 className="display-text animate-reveal-delay-1">
                Crafting digital
                <br />
                <span className="font-serif italic">experiences</span>
              </h1>
            </div>
          </div>

          {/* Subtitle Row */}
          <div className="grid md:grid-cols-[30%_70%] gap-12 mt-16">
            <div></div>
            <div className="max-w-xl animate-reveal-delay-2">
              <p className="text-lg font-light text-[var(--foreground)] leading-relaxed">
                Building thoughtful, purposeful websites and applications that
                blend form and function. Focused on clean code, elegant design,
                and meaningful user experiences.
              </p>

              <div className="flex gap-4 mt-10 animate-reveal-delay-3">
                <Link href="/portfolio" className="btn-outlined">
                  View Work
                </Link>
                <Link href="/contact" className="btn-outlined">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section Divider */}
      <section className="border-t border-[var(--border)] py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="grid md:grid-cols-[30%_70%] gap-12">
          <div>
            <span className="heading-serif">Selected Work</span>
          </div>
          <div>
            <p className="text-[var(--muted-foreground)] text-sm font-light max-w-md">
              A curated selection of projects showcasing expertise in web development,
              design systems, and digital product creation.
            </p>
            <Link
              href="/portfolio"
              className="inline-block mt-6 text-[var(--primary)] text-sm font-light hover:opacity-70 transition-opacity duration-150"
            >
              Explore all projects &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
