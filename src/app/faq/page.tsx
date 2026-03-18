"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

const duiFaqs = [
  {
    question: "What should I do immediately after a DUI arrest in Georgia?",
    answer:
      "After a DUI arrest in Georgia, you have only 30 days to request an administrative license suspension (ALS) hearing to potentially save your license. Contact a DUI attorney immediately. Do not discuss your case with anyone except your lawyer, and do not post anything about your arrest on social media. Time is critical—failing to request the ALS hearing within 30 days results in automatic license suspension.",
  },
  {
    question: "Can I refuse a breathalyzer test in Georgia?",
    answer:
      "Georgia's implied consent law means that by driving on Georgia roads, you've agreed to chemical testing if arrested for DUI. Refusing a breathalyzer can result in an automatic one-year license suspension, separate from any criminal penalties. However, the decision to refuse or submit is complex and depends on your specific situation. If you've already refused, contact an attorney immediately to discuss your options.",
  },
  {
    question: "What is the difference between a DUI and a DUI per se?",
    answer:
      "A standard DUI charge means the officer observed signs of impairment affecting your ability to drive safely—this can be proven even without a breath or blood test. A DUI per se is based solely on your blood alcohol concentration (BAC) being at or above the legal limit of 0.08% (or 0.02% for drivers under 21). You can be charged with both, but they require different defense strategies.",
  },
  {
    question: "How long does a DUI case take in Georgia?",
    answer:
      "Most DUI cases in Georgia take 3-6 months to resolve, though complex cases can take longer. The timeline depends on factors like whether you request a jury trial, the complexity of the evidence, court scheduling, and whether negotiations are successful. As a former prosecutor, I work to resolve your case as efficiently as possible while ensuring the best outcome.",
  },
  {
    question: "Will I lose my license for a DUI in Georgia?",
    answer:
      "A DUI conviction typically results in license suspension, but this isn't automatic. By requesting an ALS hearing within 30 days and mounting an effective defense, we may be able to save your driving privileges. First-time offenders may also qualify for a limited driving permit that allows driving to work, school, and medical appointments.",
  },
];

const personalInjuryFaqs = [
  {
    question: "How long do I have to file a personal injury claim in Georgia?",
    answer:
      "In Georgia, you generally have two years from the date of the accident to file a personal injury lawsuit. This is called the statute of limitations. However, it's important to start your case as soon as possible—evidence can disappear, witnesses' memories fade, and insurance companies may be less cooperative the longer you wait. Contact an attorney promptly to protect your rights.",
  },
  {
    question: "How much is my car accident case worth in Georgia?",
    answer:
      "The value of your case depends on several factors: the severity of your injuries, medical expenses (past and future), lost wages, pain and suffering, and the impact on your quality of life. Cases involving permanent disability, disfigurement, or significant ongoing treatment are typically worth more. During your free consultation, I will review the details of your case and provide an honest assessment of what you may be entitled to recover.",
  },
  {
    question: "What if I was partially at fault for the accident?",
    answer:
      "Georgia follows a modified comparative negligence rule. You can still recover damages as long as you are less than 50% at fault. Your recovery will be reduced by your percentage of fault. For example, if you are 20% at fault and your damages are $100,000, you would recover $80,000. Insurance companies often try to assign more fault to victims than warranted—I fight to minimize any fault assigned to you.",
  },
  {
    question: "Do I need an attorney if insurance already made an offer?",
    answer:
      "Yes—especially if insurance has already made an offer. Initial offers from insurance companies are almost always far below what your case is actually worth. They're hoping you'll accept before consulting an attorney who can evaluate the true value of your claim. Before accepting any offer, have an attorney review it. I offer free consultations and can tell you whether the offer is fair.",
  },
  {
    question: "What if I can't afford a lawyer?",
    answer:
      "I work on a contingency fee basis for personal injury cases, which means you pay nothing upfront and no attorney fees unless we win your case. My fee is a percentage of the recovery we obtain for you. This allows you to get experienced legal representation without any financial risk.",
  },
  {
    question: "Should I talk to the insurance company?",
    answer:
      "I strongly advise against giving recorded statements to insurance adjusters without speaking to an attorney first. Insurance companies are looking to minimize their payouts, and anything you say can be used to reduce or deny your claim. Even innocent statements like 'I'm feeling fine' can be used against you later. Let me handle all communications with the insurance company on your behalf.",
  },
  {
    question: "What compensation can I recover in a personal injury case?",
    answer:
      "Depending on your case, you may be entitled to compensation for medical expenses (past and future), lost wages and earning capacity, pain and suffering, emotional distress, loss of enjoyment of life, property damage, and in some cases involving egregious conduct, punitive damages. I work to maximize your total recovery across all categories.",
  },
];

export default function FAQ() {
  const [openDuiIndex, setOpenDuiIndex] = useState<number | null>(0);
  const [openPiIndex, setOpenPiIndex] = useState<number | null>(null);

  const toggleDuiAccordion = (index: number) => {
    setOpenDuiIndex(openDuiIndex === index ? null : index);
  };

  const togglePiAccordion = (index: number) => {
    setOpenPiIndex(openPiIndex === index ? null : index);
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
              DUI Defense & Personal Injury Attorney in Georgia
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-[var(--muted-foreground)] font-light">
              Serving Alpharetta, Cobb County, Fulton County, and all of Georgia
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* DUI FAQ Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">DUI Defense FAQs</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-base font-light text-[var(--muted-foreground)] mb-8">
              If you&apos;ve been arrested for DUI in Georgia, time is critical. Here are answers to the most common questions about DUI charges and defense strategies.
            </p>
          </ScrollReveal>

          <div className="border-b border-[var(--border)]">
            {duiFaqs.map((faq, index) => (
              <ScrollReveal key={index} delay={0.05 * index}>
                <div className="accordion-item">
                  <div
                    className="accordion-header"
                    onClick={() => toggleDuiAccordion(index)}
                  >
                    <h3 className="accordion-title">{faq.question}</h3>
                    <span className={`accordion-icon ${openDuiIndex === index ? "open" : ""}`}>
                      +
                    </span>
                  </div>
                  <div className={`accordion-content ${openDuiIndex === index ? "open" : ""}`}>
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

      {/* Personal Injury FAQ Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)] bg-[var(--card)]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">Personal Injury FAQs</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-base font-light text-[var(--muted-foreground)] mb-8">
              If you&apos;ve been injured in an accident, you probably have a lot of questions. Here are answers to some of the most common questions about personal injury claims in Georgia.
            </p>
          </ScrollReveal>

          <div className="border-b border-[var(--border)]">
            {personalInjuryFaqs.map((faq, index) => (
              <ScrollReveal key={index} delay={0.05 * index}>
                <div className="accordion-item">
                  <div
                    className="accordion-header"
                    onClick={() => togglePiAccordion(index)}
                  >
                    <h3 className="accordion-title">{faq.question}</h3>
                    <span className={`accordion-icon ${openPiIndex === index ? "open" : ""}`}>
                      +
                    </span>
                  </div>
                  <div className={`accordion-content ${openPiIndex === index ? "open" : ""}`}>
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
