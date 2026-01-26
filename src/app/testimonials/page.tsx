import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote:
      "Arash is someone who makes sure to get all facts and analyzes them well. He is responsive, thorough, and genuinely cares about his clients. I highly recommend him for anyone seeking legal representation.",
    author: "Babak K.",
  },
  {
    quote:
      "After my car accident, I didn't know where to turn. Arash at Assured Justice Firm fought the insurance company and got me a settlement that covered all my medical bills and then some. His engineering background really helped explain what happened.",
    author: "Sarah M.",
  },
  {
    quote:
      "The insurance company offered me a lowball settlement after my truck accident. Arash took my case seriously, investigated everything, and got me what I deserved. He was always available to answer my questions.",
    author: "Michael R.",
  },
  {
    quote:
      "After my motorcycle accident, the other driver's insurance tried to blame me. Arash fought back with evidence and his technical expertise. He got me the compensation I deserved and kept me informed every step of the way.",
    author: "David W.",
  },
  {
    quote:
      "What I appreciated most was Arash's honesty. He gave me straight answers about my DUI case, explained everything in plain language, and fought hard for the best outcome. His prosecutor experience really showed.",
    author: "James T.",
  },
  {
    quote:
      "When you work with Arash, you work directly with him—not a case manager. He returned my calls, explained my options clearly, and treated my case like it was his own. That personal attention made all the difference.",
    author: "Lisa K.",
  },
];

export default function Testimonials() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)] bg-[var(--card)]">
        <div className="max-w-4xl">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-light text-[var(--foreground)] leading-tight mb-4">
              Testimonials
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h3 className="text-xl font-medium text-[var(--primary)] mb-2">
              Personal Injury Attorney in Georgia
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-[var(--muted-foreground)] font-light">
              Assured Justice Firm
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="max-w-3xl mx-auto space-y-12">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <div className="border-l-2 border-[var(--primary)] pl-6">
                <blockquote className="text-lg font-light text-[var(--foreground)] leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <p className="text-sm font-medium text-[var(--primary)]">
                  &mdash; {testimonial.author}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
