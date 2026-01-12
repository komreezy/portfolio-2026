"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    question: "Should I accept a plea bargain?",
    answer:
      "A plea bargain is an agreement between you and the prosecutor where you plead guilty to a lesser charge in exchange for a reduced sentence. Whether to accept depends on the strength of the evidence against you, the potential penalties if convicted at trial, and your personal circumstances. I will thoroughly analyze your case and provide honest advice about your options, but the decision is always yours.",
  },
  {
    question: "What will happen to my record?",
    answer:
      "Criminal convictions in Georgia remain on your record permanently and can affect employment, housing, and other opportunities. However, depending on the outcome of your case, there may be options for record restriction or expungement. We work to achieve outcomes that minimize long-term consequences for your record.",
  },
  {
    question: "Will I go to jail?",
    answer:
      "Whether you face jail time depends on many factors including the nature of the offense, your prior criminal history, and the circumstances of your case. Many criminal cases are resolved without jail time through alternatives like probation, diversion programs, or community service. I will fight to keep you out of jail and explore every available option.",
  },
  {
    question: "Should I talk to police when questioned?",
    answer:
      "You have the constitutional right to remain silent and the right to an attorney. Generally, it is advisable to politely decline to answer questions without a lawyer present. Anything you say can be used against you, and even innocent statements can be misinterpreted. Contact an attorney before speaking with law enforcement.",
  },
  {
    question: "The police say they can seize my assets — is that true?",
    answer:
      "Georgia law does allow for asset forfeiture in certain criminal cases, particularly those involving drugs or other serious offenses. However, there are legal protections and processes that must be followed. If you are facing asset seizure, it is critical to have an attorney who understands forfeiture law and can protect your property rights.",
  },
  {
    question: "How much will this cost?",
    answer:
      "Legal fees vary depending on the complexity of your case, the charges you face, and the amount of work required. During our initial consultation, I will provide you with a clear explanation of my fee structure and what to expect. I believe in transparency and will work with you to find a solution that fits your budget.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)] bg-[var(--card)]">
        <div className="max-w-4xl">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-light text-[var(--foreground)] leading-tight mb-4">
              Frequently Asked Questions
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h3 className="text-xl font-medium text-[var(--primary)] mb-2">
              Attorney in Georgia
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-[var(--muted-foreground)] font-light">
              Arash Jafari Law
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">FAQs</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-base font-light text-[var(--muted-foreground)] mb-8">
              During an initial consultation, I&apos;m often asked similar questions relating to a criminal charge. While each case is different, I provided the information below to help you understand the basics of the criminal justice system.
            </p>
          </ScrollReveal>

          <div className="border-b border-[var(--border)]">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={0.1 * index}>
                <div className="accordion-item">
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="accordion-title">{faq.question}</h3>
                    <span className={`accordion-icon ${openIndex === index ? "open" : ""}`}>
                      +
                    </span>
                  </div>
                  <div className={`accordion-content ${openIndex === index ? "open" : ""}`}>
                    <div className="accordion-inner">
                      <p className="accordion-body">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
