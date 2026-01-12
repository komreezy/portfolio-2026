"use client";

import { useState, useEffect, useRef } from "react";

const services = [
  {
    title: "Car Accidents",
    description:
      "Car accidents are the leading cause of personal injury claims. We handle all types of auto accidents, from rear-end collisions to multi-vehicle pileups, fighting to get you compensation for medical bills, lost wages, and pain and suffering.",
  },
  {
    title: "Truck Accidents",
    description:
      "Accidents involving commercial trucks often result in catastrophic injuries. We have experience taking on trucking companies and their insurers to secure maximum compensation for victims of truck accidents.",
  },
  {
    title: "Medical Malpractice",
    description:
      "When healthcare providers fail to meet the standard of care, patients suffer. We handle cases involving surgical errors, misdiagnosis, medication mistakes, birth injuries, and other forms of medical negligence.",
  },
  {
    title: "Wrongful Death",
    description:
      "Losing a loved one due to someone else's negligence is devastating. We help families seek justice and compensation for funeral expenses, lost income, loss of companionship, and the emotional toll of their loss.",
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
            Dedicated legal representation for accident victims throughout Georgia. We fight to maximize your compensation.
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
