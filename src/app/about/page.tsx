export default function About() {
  const credentials = [
    "J.D., Georgia State University",
    "Licensed Professional Engineer",
    "Former Prosecutor",
    "Georgia State Bar",
    "500+ Cases Handled",
    "Georgia Trial Lawyers Association",
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[30%_70%] gap-12">
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
        <div className="max-w-7xl mx-auto grid md:grid-cols-[30%_70%] gap-12">
          <div>
            <span className="heading-serif">Background</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Photo */}
            <div>
              <img
                src="/arash-portrait.png"
                alt="Arash Jafary"
                className="aspect-[4/5] w-full object-cover object-top rounded-sm"
              />
            </div>

            {/* Bio Content */}
            <div className="space-y-8">
              <p className="text-lg font-light text-[var(--foreground)] leading-relaxed">
                I&apos;m Arash Jafary, a personal injury attorney and DUI defense lawyer with a unique background: former prosecutor and licensed professional engineer.
              </p>

              <p className="text-base font-light text-[var(--foreground)] leading-relaxed opacity-80">
                As a former prosecutor, I&apos;ve seen cases from both sides. I understand how the state builds cases, what evidence matters most, and where weaknesses lie. This perspective is invaluable whether I&apos;m defending you against DUI charges or fighting for your personal injury claim.
              </p>

              <p className="text-base font-light text-[var(--foreground)] leading-relaxed opacity-80">
                My engineering background sets me apart when it comes to understanding crash evidence, analyzing accident scenes, and working with technical experts. I don&apos;t just take expert reports at face value—I can dig into the details and challenge flawed analysis.
              </p>

              <p className="text-base font-light text-[var(--foreground)] leading-relaxed opacity-80">
                When you work with me, you work directly with me. I don&apos;t hand clients off to case managers. I believe in honesty, preparation, and accountability—I&apos;ll give you straight answers even when they&apos;re not what you want to hear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="border-t border-[var(--border)] py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[30%_70%] gap-12">
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
                    Personal Injury
                  </h3>
                  <p className="text-sm font-light text-[var(--foreground)] opacity-80">
                    Car, truck, motorcycle, and pedestrian accidents.
                    Engineering expertise for crash analysis.
                  </p>
                </div>
                <div>
                  <h3 className="text-[var(--primary)] text-sm uppercase tracking-wider mb-2">
                    DUI Defense
                  </h3>
                  <p className="text-sm font-light text-[var(--foreground)] opacity-80">
                    Former prosecutor perspective. I know how the state
                    builds cases and where to find weaknesses.
                  </p>
                </div>
                <div>
                  <h3 className="text-[var(--primary)] text-sm uppercase tracking-wider mb-2">
                    Trial Experience
                  </h3>
                  <p className="text-sm font-light text-[var(--foreground)] opacity-80">
                    Real courtroom experience that gives leverage in every
                    negotiation. Insurance companies know I&apos;ll take cases to trial.
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
