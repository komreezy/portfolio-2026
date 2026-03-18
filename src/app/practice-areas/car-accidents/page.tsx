import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Car Accident Attorney in Alpharetta & Cobb County, GA | Assured Justice Firm",
  description: "Injured in a car accident in Georgia? Former prosecutor and licensed engineer Arash Jafary fights for maximum compensation. $250K settlement won. Free consultation. Call (678) 522-6273.",
  keywords: ["car accident attorney Alpharetta", "car accident lawyer Cobb County", "auto accident attorney Georgia", "car crash lawyer Fulton County", "vehicle accident lawyer"],
};

export default function CarAccidents() {
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
              Car Accident Attorney in Alpharetta & Cobb County, Georgia
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[var(--muted-foreground)] font-light mb-8">
              Licensed engineer and former prosecutor fights for maximum compensation after your car accident.
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
              Engineering Expertise Meets Legal Experience
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base font-light text-[var(--foreground)] leading-relaxed mb-6">
              Car accidents are the leading cause of personal injury claims in Georgia. If you&apos;ve been injured in a collision in Alpharetta, Cobb County, Fulton County, or anywhere in the state, you need an attorney who understands both the legal system and the technical evidence that can make or break your case.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-6">
              As a licensed Engineer-in-Training and former prosecutor, I bring a unique combination of skills to every car accident case. I can analyze crash reconstruction data, vehicle black box information, and engineering evidence that other attorneys might overlook. This technical expertise has helped me secure results including a $250,000 car accident settlement.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-8">
              Insurance companies have teams of adjusters, engineers, and lawyers working to minimize your claim. I level the playing field by bringing the same level of technical and legal expertise to fight for your maximum compensation.
            </p>
          </ScrollReveal>

          {/* What You Can Recover */}
          <ScrollReveal delay={0.25}>
            <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">
              What You Can Recover After a Car Accident
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="bg-[var(--card)] p-6 rounded-sm border border-[var(--border)] mb-8">
              <ul className="space-y-3 text-base font-light text-[var(--foreground)]">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>Medical expenses</strong> — past, current, and future treatment costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>Lost wages</strong> — time missed from work during recovery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>Lost earning capacity</strong> — if injuries affect your ability to work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>Pain and suffering</strong> — physical and emotional distress</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>Property damage</strong> — vehicle repair or replacement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">&#8226;</span>
                  <span><strong>Loss of enjoyment of life</strong> — impact on daily activities</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Common Causes */}
          <ScrollReveal delay={0.35}>
            <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">
              Common Causes of Car Accidents I Handle
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <ul className="space-y-2 text-base font-light text-[var(--muted-foreground)]">
                <li>&#8226; Distracted driving (texting, phones)</li>
                <li>&#8226; Speeding and reckless driving</li>
                <li>&#8226; Drunk or impaired driving</li>
                <li>&#8226; Running red lights and stop signs</li>
              </ul>
              <ul className="space-y-2 text-base font-light text-[var(--muted-foreground)]">
                <li>&#8226; Unsafe lane changes</li>
                <li>&#8226; Following too closely</li>
                <li>&#8226; Failure to yield</li>
                <li>&#8226; Poor weather conditions</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Why Choose Me */}
          <ScrollReveal delay={0.45}>
            <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">
              Why Choose a Former Prosecutor and Engineer?
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <ul className="space-y-4 mb-8">
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong className="text-[var(--foreground)]">Technical crash analysis</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">I personally review accident reconstruction reports, vehicle data recorders, and engineering evidence—not just expert summaries.</p>
              </li>
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong className="text-[var(--foreground)]">Courtroom experience</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">Insurance companies know I&apos;m prepared to take your case to trial if they don&apos;t offer fair compensation.</p>
              </li>
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong className="text-[var(--foreground)]">Direct attorney access</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">When you call, you talk to me—not a paralegal or case manager. I handle every aspect of your case personally.</p>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-[var(--side-padding)] bg-[var(--primary-dark)]">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-light text-[var(--footer-text)] mb-6">
              Injured in a Car Accident? Get the Compensation You Deserve.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-base font-light text-[var(--footer-text)] opacity-80 mb-8">
              Don&apos;t let insurance companies minimize your claim. Call now for a free consultation—you pay nothing unless we win.
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
