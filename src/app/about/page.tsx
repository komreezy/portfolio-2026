export default function About() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="grid md:grid-cols-[30%_70%] gap-12">
          <div>
            <span className="heading-serif">About</span>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-[var(--primary)] leading-tight">
              Creating with
              <br />
              <span className="font-serif italic">intention</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="border-t border-[var(--border)] py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="grid md:grid-cols-[30%_70%] gap-12">
          <div>
            <span className="heading-serif">Background</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Photo Placeholder */}
            <div>
              <div className="aspect-[4/5] bg-[var(--secondary)] opacity-40"></div>
              <p className="text-xs text-[var(--muted-foreground)] mt-4 uppercase tracking-wider">
                Your photo here
              </p>
            </div>

            {/* Bio Content */}
            <div className="space-y-8">
              <p className="text-lg font-light text-[var(--foreground)] leading-relaxed">
                Hello! I&apos;m a developer and designer passionate about
                creating digital experiences that are both beautiful and
                functional.
              </p>

              <p className="text-base font-light text-[var(--foreground)] leading-relaxed opacity-80">
                With a focus on clean code and thoughtful design, I build
                websites and applications that serve their purpose elegantly.
                I believe in the power of simplicity and attention to detail.
              </p>

              <p className="text-base font-light text-[var(--foreground)] leading-relaxed opacity-80">
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open source, or enjoying a
                good cup of coffee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-t border-[var(--border)] py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="grid md:grid-cols-[30%_70%] gap-12">
          <div>
            <span className="heading-serif">Expertise</span>
          </div>

          <div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-[var(--border-solid)] text-[var(--foreground)] px-4 py-2 text-sm font-light"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-[var(--border)]">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-[var(--primary)] text-sm uppercase tracking-wider mb-2">
                    Development
                  </h3>
                  <p className="text-sm font-light text-[var(--foreground)] opacity-80">
                    Frontend & backend development with modern frameworks
                    and best practices.
                  </p>
                </div>
                <div>
                  <h3 className="text-[var(--primary)] text-sm uppercase tracking-wider mb-2">
                    Design
                  </h3>
                  <p className="text-sm font-light text-[var(--foreground)] opacity-80">
                    UI/UX design focused on clarity, usability, and
                    visual harmony.
                  </p>
                </div>
                <div>
                  <h3 className="text-[var(--primary)] text-sm uppercase tracking-wider mb-2">
                    Strategy
                  </h3>
                  <p className="text-sm font-light text-[var(--foreground)] opacity-80">
                    Thoughtful approach to problem-solving and
                    product development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
