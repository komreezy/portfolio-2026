"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    question: "How much is my personal injury case worth?",
    answer:
      "The value of your case depends on several factors, including the severity of your injuries, medical expenses, lost wages, pain and suffering, and the impact on your quality of life. During your free consultation, I will review the details of your case and provide an honest assessment of what you may be entitled to recover.",
  },
  {
    question: "How long will my case take?",
    answer:
      "Every case is different. Some cases settle within a few months, while complex cases may take a year or more. Factors that affect the timeline include the severity of your injuries, whether liability is disputed, and whether the case goes to trial. I will keep you informed throughout the process and work to resolve your case as efficiently as possible.",
  },
  {
    question: "What if I can't afford a lawyer?",
    answer:
      "I work on a contingency fee basis, which means you pay nothing upfront and no attorney fees unless we win your case. My fee is a percentage of the recovery we obtain for you. This allows you to get experienced legal representation without any financial risk.",
  },
  {
    question: "Should I talk to the insurance company?",
    answer:
      "I strongly advise against giving recorded statements to insurance adjusters without speaking to an attorney first. Insurance companies are looking to minimize their payouts, and anything you say can be used to reduce or deny your claim. Let me handle all communications with the insurance company on your behalf.",
  },
  {
    question: "What if the accident was partly my fault?",
    answer:
      "Georgia follows a modified comparative negligence rule. You can still recover damages as long as you are less than 50% at fault. Your recovery will be reduced by your percentage of fault. For example, if you are 20% at fault and your damages are $100,000, you would recover $80,000.",
  },
  {
    question: "What compensation can I recover?",
    answer:
      "Depending on your case, you may be entitled to compensation for medical expenses (past and future), lost wages and earning capacity, pain and suffering, emotional distress, loss of enjoyment of life, and in some cases, punitive damages. I will work to maximize your total recovery.",
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
              Personal Injury Attorney in Georgia
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
              If you&apos;ve been injured in an accident, you probably have a lot of questions. Here are answers to some of the most common questions I receive from potential clients.
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
