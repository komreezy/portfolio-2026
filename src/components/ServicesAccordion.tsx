"use client";

import { useState, useEffect, useRef } from "react";

const services = [
  {
    title: "DUI Defense",
    description:
      "Facing DUI charges can be overwhelming, but you have rights. As a former prosecutor, I've seen these cases from both sides and know how to build an effective defense. I provide honest assessments and fight to protect your license, your record, and your future.",
  },
  {
    title: "Car Accidents",
    description:
      "Car accidents are the leading cause of personal injury claims in Georgia. As a licensed engineer and former prosecutor, I understand how to analyze crash evidence and build the strongest possible case. I fight to get you compensation for medical bills, lost wages, and pain and suffering.",
  },
  {
    title: "Truck Accidents",
    description:
      "Accidents involving commercial trucks often result in catastrophic injuries. My engineering background gives me a unique ability to understand the technical aspects of these complex cases. I have experience taking on trucking companies and their insurers to secure maximum compensation.",
  },
  {
    title: "Motorcycle Accidents",
    description:
      "Motorcycle riders face unique dangers on Georgia roads. When negligent drivers cause accidents, I help injured riders recover damages for their injuries, bike damage, and other losses. I fight to ensure riders aren't unfairly blamed for accidents they didn't cause.",
  },
  {
    title: "Pedestrian Accidents",
    description:
      "Pedestrians have virtually no protection when struck by vehicles. These accidents often result in severe injuries requiring extensive medical treatment. I work to hold negligent drivers accountable and recover full compensation for your injuries and suffering.",
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
