export default function About() {
  const credentials = [
    "J.D., Georgia State University",
    "Georgia State Bar",
    "Million Dollar Advocates Forum",
    "Super Lawyers Rising Star",
    "AVVO 10.0 Rating",
    "Georgia Trial Lawyers Association",
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
            <h1 className="font-display text-4xl md:text-5xl font-light text-[var(--primary)] leading-tight">
              Fighting for the
              <br />
              injured
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
                I&apos;m Arash Jafari, a personal injury attorney
                dedicated to helping accident victims get the compensation
                they deserve.
              </p>

              <p className="text-base font-light text-[var(--foreground)] leading-relaxed opacity-80">
                With over a decade of experience representing injured clients
                throughout Georgia, I have recovered millions of dollars in
                settlements and verdicts. I understand the physical, emotional,
                and financial toll an injury takes on you and your family.
              </p>

              <p className="text-base font-light text-[var(--foreground)] leading-relaxed opacity-80">
                I started my career working for insurance companies, so I know
                exactly how they operate — the tactics they use to minimize
                claims and deny coverage. Now I use that knowledge to fight
                for my clients and hold insurers accountable.
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
                    Car Accidents
                  </h3>
                  <p className="text-sm font-light text-[var(--foreground)] opacity-80">
                    Extensive experience handling auto accident cases,
                    from fender benders to catastrophic collisions.
                  </p>
                </div>
                <div>
                  <h3 className="text-[var(--primary)] text-sm uppercase tracking-wider mb-2">
                    Medical Malpractice
                  </h3>
                  <p className="text-sm font-light text-[var(--foreground)] opacity-80">
                    Holding healthcare providers accountable for negligence
                    that causes patient harm.
                  </p>
                </div>
                <div>
                  <h3 className="text-[var(--primary)] text-sm uppercase tracking-wider mb-2">
                    Wrongful Death
                  </h3>
                  <p className="text-sm font-light text-[var(--foreground)] opacity-80">
                    Compassionate representation for families who have lost
                    loved ones due to negligence.
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
