import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote:
      "After my car accident, I didn't know where to turn. The team at Arash Jafari Law fought the insurance company and got me a settlement that covered all my medical bills and then some.",
    author: "Sarah M.",
  },
  {
    quote:
      "When I slipped and fell at a grocery store, I didn't think I had a case. Arash proved me wrong and got me compensation for my injuries, lost wages, and pain and suffering.",
    author: "James T.",
  },
  {
    quote:
      "The insurance company offered me a lowball settlement after my truck accident. Arash took my case to trial and won me three times what they originally offered.",
    author: "Michael R.",
  },
  {
    quote:
      "When my husband was killed by a drunk driver, the team helped our family through the worst time of our lives. They were compassionate, professional, and relentless in pursuing justice.",
    author: "Maria G.",
  },
  {
    quote:
      "I was injured due to a defective product and had no idea how to proceed. Arash handled everything and got me a great settlement. I couldn't have done it without him.",
    author: "Lisa K.",
  },
  {
    quote:
      "After my motorcycle accident, the other driver's insurance tried to blame me. Arash fought back with evidence and expert witnesses. They got me the compensation I deserved.",
    author: "David W.",
  },
  {
    quote:
      "The medical malpractice case was complex, but Arash and his team never gave up. They worked with medical experts and built a strong case. I'm grateful for their dedication.",
    author: "Patricia H.",
  },
  {
    quote:
      "I was hesitant to hire a lawyer, but after my workplace injury, I realized I needed help. Arash got me workers' comp benefits AND a personal injury settlement. Highly recommend!",
    author: "Robert C.",
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
              Arash Jafari Law
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
