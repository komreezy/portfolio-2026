"use client";

import { useState, useEffect, useRef } from "react";

const services = [
  {
    title: "Business Formation",
    description:
      "Strategic guidance for entrepreneurs and business owners on entity selection, formation, and structuring. From LLCs to corporations, we help you establish the right legal foundation for long-term success.",
  },
  {
    title: "Contract Law",
    description:
      "Comprehensive contract drafting, review, and negotiation services. We protect your interests in employment agreements, vendor contracts, partnership agreements, and complex commercial transactions.",
  },
  {
    title: "Mergers & Acquisitions",
    description:
      "End-to-end legal support for buying, selling, or merging businesses. We conduct thorough due diligence, structure deals, and navigate negotiations to maximize value and minimize risk.",
  },
  {
    title: "Corporate Governance",
    description:
      "Ongoing counsel for boards, executives, and shareholders on governance matters, compliance, fiduciary duties, and corporate policy development to ensure sound business practices.",
  },
];

function ScrollRevealItem({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay * 1000);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="scroll-reveal">
      {children}
    </div>
  );
}

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-[var(--side-padding)] py-[var(--section-spacing)]">
      <div className="grid md:grid-cols-[30%_70%] gap-12 mb-12">
        <ScrollRevealItem>
          <span className="heading-serif">Practice Areas</span>
        </ScrollRevealItem>
        <ScrollRevealItem delay={0.18}>
          <p className="text-[var(--muted-foreground)] text-sm font-light max-w-md">
            Focused legal expertise to help businesses navigate complex challenges and seize opportunities.
          </p>
        </ScrollRevealItem>
      </div>

      <div className="border-b border-[var(--border)]">
        {services.map((service, index) => (
          <ScrollRevealItem key={index} delay={0.1 * index}>
            <div className="accordion-item">
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="accordion-title">{service.title}</h3>
                <span className={`accordion-icon ${openIndex === index ? "open" : ""}`}>
                  +
                </span>
              </div>
              <div className={`accordion-content ${openIndex === index ? "open" : ""}`}>
                <div className="accordion-inner">
                  <p className="accordion-body">{service.description}</p>
                </div>
              </div>
            </div>
          </ScrollRevealItem>
        ))}
      </div>
    </section>
  );
}
