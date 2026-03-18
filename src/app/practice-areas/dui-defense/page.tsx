import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "DUI Defense Attorney in Alpharetta & Cobb County, GA | Assured Justice Firm",
  description: "Facing DUI charges in Georgia? Former prosecutor Arash Jafary provides aggressive DUI defense in Alpharetta, Cobb County, and Fulton County. Free consultation. Call (678) 522-6273.",
  keywords: ["DUI attorney Alpharetta", "DUI lawyer Cobb County", "DUI defense Georgia", "drunk driving lawyer Fulton County", "DUI charges Georgia"],
};

const faqs = [
  {
    question: "What should I do immediately after a DUI arrest in Georgia?",
    answer: "After a DUI arrest, you have only 30 days to request an administrative license suspension hearing to potentially save your license. Contact a DUI attorney immediately. Do not discuss your case with anyone except your lawyer, and do not post anything about your arrest on social media.",
  },
  {
    question: "Can I refuse a breathalyzer test in Georgia?",
    answer: "Georgia's implied consent law means that by driving on Georgia roads, you've agreed to chemical testing if arrested for DUI. Refusing a breathalyzer can result in an automatic one-year license suspension, separate from any criminal penalties. However, the decision to refuse or submit is complex and depends on your specific situation.",
  },
  {
    question: "What is the difference between a DUI and a DUI per se?",
    answer: "A standard DUI charge means the officer observed signs of impairment affecting your ability to drive safely. A DUI per se is based solely on your blood alcohol concentration (BAC) being at or above the legal limit of 0.08%. You can be charged with both, but they require different defense strategies.",
  },
  {
    question: "How long does a DUI case take in Georgia?",
    answer: "Most DUI cases in Georgia take 3-6 months to resolve, though complex cases can take longer. The timeline depends on factors like whether you request a jury trial, the complexity of the evidence, and court scheduling. We work to resolve your case as efficiently as possible while ensuring the best outcome.",
  },
  {
    question: "Will I lose my license for a DUI in Georgia?",
    answer: "A DUI conviction typically results in license suspension, but this isn't automatic. By requesting an ALS hearing within 30 days and mounting an effective defense, we may be able to save your driving privileges. First-time offenders may also qualify for a limited driving permit.",
  },
];

export default function DUIDefense() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)] bg-[var(--card)]">
        <div className="max-w-4xl">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-wider text-[var(--primary)] mb-4">Practice Area</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl font-light text-[var(--foreground)] leading-tight mb-6">
              DUI Defense Attorney in Alpharetta & Cobb County, Georgia
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[var(--muted-foreground)] font-light mb-8">
              Former prosecutor fights to protect your license, your record, and your future.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Free Consultation
              </Link>
              <a href="tel:+16785226273" className="btn-outlined">
                Call (678) 522-6273
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-light text-[var(--foreground)] mb-6">
              Aggressive DUI Defense From a Former Prosecutor
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base font-light text-[var(--foreground)] leading-relaxed mb-6">
              If you&apos;ve been arrested for DUI in Alpharetta, Cobb County, Fulton County, or anywhere in Georgia, the clock is already ticking. You have just 30 days to request an administrative license suspension (ALS) hearing—or you could lose your license before your case even goes to court.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-6">
              As a former prosecutor at the Fulton County District Attorney&apos;s Office and Cobb County Solicitor General&apos;s Office, I&apos;ve handled hundreds of DUI cases from the other side. I know exactly how the state builds these cases, what evidence they rely on, and where to find weaknesses they hope you won&apos;t discover.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-8">
              Every DUI case has potential defenses: improper traffic stops, faulty breathalyzer calibration, procedural violations, and more. I investigate every angle and fight to protect your driving privileges, your record, and your future.
            </p>
          </ScrollReveal>

          {/* What's at Stake */}
          <ScrollReveal delay={0.25}>
            <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">
              What&apos;s at Stake With a Georgia DUI
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="bg-[var(--card)] p-6 rounded-sm border border-[var(--border)] mb-8">
              <ul className="space-y-3 text-base font-light text-[var(--foreground)]">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>License suspension</strong> of up to 12 months (first offense)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>Jail time</strong> of 10 days to 12 months (first offense)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>Fines</strong> ranging from $300 to $1,000 plus surcharges</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>Mandatory DUI school</strong> and substance abuse evaluation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>Ignition interlock device</strong> requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>Criminal record</strong> that affects employment and housing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>Insurance rate increases</strong> of 300% or more</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Defense Strategies */}
          <ScrollReveal delay={0.35}>
            <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">
              How I Fight Your DUI Charges
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-6">
              Every DUI case is different, but common defense strategies include:
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.45}>
            <ul className="space-y-4 mb-8">
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong className="text-[var(--foreground)]">Challenging the traffic stop</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">Police must have reasonable suspicion to pull you over. If the stop was illegal, all evidence gathered after may be inadmissible.</p>
              </li>
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong className="text-[var(--foreground)]">Questioning field sobriety tests</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">These tests are subjective and can be affected by medical conditions, fatigue, nervousness, or poor road conditions.</p>
              </li>
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong className="text-[var(--foreground)]">Examining breathalyzer accuracy</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">Breathalyzer machines require proper calibration and maintenance. I investigate whether protocols were followed.</p>
              </li>
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong className="text-[var(--foreground)]">Reviewing blood test procedures</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">Strict chain-of-custody requirements apply to blood samples. Any break in protocol can invalidate results.</p>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)] bg-[var(--card)]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-light text-[var(--foreground)] mb-8">
              DUI Defense FAQs
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={0.1 * index}>
                <div className="border-b border-[var(--border)] pb-6">
                  <h3 className="font-medium text-[var(--foreground)] mb-3">{faq.question}</h3>
                  <p className="text-sm font-light text-[var(--muted-foreground)] leading-relaxed">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-[var(--side-padding)] bg-[var(--primary-dark)]">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-light text-[var(--footer-text)] mb-6">
              Don&apos;t Wait—Your 30-Day Deadline Is Ticking
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-base font-light text-[var(--footer-text)] opacity-80 mb-8">
              Call now for a free consultation. I&apos;ll review your case, explain your options, and start building your defense immediately.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <a href="tel:+16785226273" className="btn-outlined-light">
              Call (678) 522-6273
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
