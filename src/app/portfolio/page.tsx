import Link from "next/link";

const practiceAreas = [
  {
    title: "Business Formation & Structuring",
    category: "Corporate Law",
    description:
      "Guiding entrepreneurs and business owners through entity selection, formation, and organizational structuring for optimal liability protection and tax efficiency.",
    link: "#",
  },
  {
    title: "Mergers & Acquisitions",
    category: "Transactional",
    description:
      "Full-service M&A representation including due diligence, deal structuring, negotiation, and closing for buyers, sellers, and investors.",
    link: "#",
  },
  {
    title: "Contract Drafting & Negotiation",
    category: "Commercial Law",
    description:
      "Comprehensive contract services covering employment agreements, vendor contracts, licensing deals, and complex commercial arrangements.",
    link: "#",
  },
  {
    title: "Business Litigation",
    category: "Dispute Resolution",
    description:
      "Strategic advocacy in commercial disputes, breach of contract claims, partnership disagreements, and shareholder litigation.",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="grid md:grid-cols-[30%_70%] gap-12">
          <div>
            <span className="heading-serif">Practice</span>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-[var(--primary)] leading-tight">
              Areas of
              <br />
              <span className="font-serif italic">expertise</span>
            </h1>
            <p className="mt-8 text-base font-light text-[var(--foreground)] opacity-80 max-w-lg">
              Focused legal services for businesses at every stage of growth.
              Each practice area reflects deep expertise and a commitment
              to achieving the best possible outcomes for clients.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas List */}
      <section className="border-t border-[var(--border)]">
        {practiceAreas.map((area, index) => (
          <article
            key={index}
            className="border-b border-[var(--border)] py-12 px-[var(--side-padding)] group hover:bg-[var(--card)] transition-colors duration-300"
          >
            <Link href={area.link} className="block">
              <div className="grid md:grid-cols-[30%_70%] gap-12 items-center">
                <div>
                  <span className="text-xs text-[var(--muted-foreground)] uppercase tracking-widest">
                    {area.category}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-light text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-150">
                      {area.title}
                    </h2>
                    <p className="mt-3 text-sm font-light text-[var(--foreground)] opacity-70 max-w-lg">
                      {area.description}
                    </p>
                  </div>

                  <div className="hidden md:block">
                    <span className="text-[var(--primary)] text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                      Learn More &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="grid md:grid-cols-[30%_70%] gap-12">
          <div>
            <span className="heading-serif">Consultation</span>
          </div>
          <div>
            <p className="text-lg font-light text-[var(--foreground)] max-w-lg">
              Facing a legal challenge or planning your next business move?
              I&apos;m here to help you navigate the path forward with confidence.
            </p>
            <Link href="/contact" className="btn-outlined inline-block mt-8">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
