export default function About() {
  const credentials = [
    "J.D., Harvard Law School",
    "B.A., Yale University",
    "California State Bar",
    "AV Preeminent Rating",
    "Super Lawyers",
    "Best Lawyers in America",
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
              Advocating with
              <br />
              <span className="font-serif italic">purpose</span>
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
                I&apos;m Arash Jafari, a business and corporate attorney
                dedicated to helping clients navigate complex legal challenges
                with confidence and clarity.
              </p>

              <p className="text-base font-light text-[var(--foreground)] leading-relaxed opacity-80">
                With over 15 years of experience advising startups, growth-stage
                companies, and established businesses, I bring a pragmatic approach
                to legal counsel. I believe in building lasting relationships and
                truly understanding each client&apos;s unique goals.
              </p>

              <p className="text-base font-light text-[var(--foreground)] leading-relaxed opacity-80">
                Prior to establishing my practice, I served as General Counsel
                at a Fortune 500 company and worked at a leading international
                law firm. This experience gives me valuable perspective on both
                sides of complex business transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="border-t border-[var(--border)] py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="grid md:grid-cols-[30%_70%] gap-12">
          <div>
            <span className="heading-serif">Credentials</span>
          </div>

          <div>
            <div className="flex flex-wrap gap-3">
              {credentials.map((credential) => (
                <span
                  key={credential}
                  className="border border-[var(--border-solid)] text-[var(--foreground)] px-4 py-2 text-sm font-light"
                >
                  {credential}
                </span>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-[var(--border)]">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-[var(--primary)] text-sm uppercase tracking-wider mb-2">
                    Transactional
                  </h3>
                  <p className="text-sm font-light text-[var(--foreground)] opacity-80">
                    Complex deal structuring, M&A transactions, and
                    contract negotiations for businesses of all sizes.
                  </p>
                </div>
                <div>
                  <h3 className="text-[var(--primary)] text-sm uppercase tracking-wider mb-2">
                    Advisory
                  </h3>
                  <p className="text-sm font-light text-[var(--foreground)] opacity-80">
                    Strategic counsel on corporate governance, compliance,
                    and risk management.
                  </p>
                </div>
                <div>
                  <h3 className="text-[var(--primary)] text-sm uppercase tracking-wider mb-2">
                    Litigation
                  </h3>
                  <p className="text-sm font-light text-[var(--foreground)] opacity-80">
                    Business dispute resolution through negotiation,
                    mediation, and courtroom advocacy.
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
