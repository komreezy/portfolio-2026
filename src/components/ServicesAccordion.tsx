"use client";

import { useState } from "react";

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and applications built with modern technologies. From responsive marketing sites to complex web applications, we craft solutions that perform beautifully across all devices.",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design that balances aesthetics with functionality. We create intuitive interfaces and seamless experiences that delight users and drive engagement.",
  },
  {
    title: "Brand Strategy",
    description:
      "Strategic brand development that tells your unique story. We help define your voice, visual identity, and positioning to create lasting connections with your audience.",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that connect with your audience. From content strategy to performance marketing, we help you reach the right people at the right time.",
  },
];

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-[var(--side-padding)] py-[var(--section-spacing)]">
      <div className="grid md:grid-cols-[30%_70%] gap-12 mb-12">
        <div>
          <span className="heading-serif">Services</span>
        </div>
        <div>
          <p className="text-[var(--muted-foreground)] text-sm font-light max-w-md">
            We offer a comprehensive range of digital services to help bring your vision to life.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border)]">
        {services.map((service, index) => (
          <div key={index} className="accordion-item">
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
        ))}
      </div>
    </section>
  );
}
