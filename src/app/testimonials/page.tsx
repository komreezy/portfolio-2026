import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote:
      "We are forever grateful for the help of the Law Office. I would recommend their services to anyone.",
    author: "Gina S.",
  },
  {
    quote:
      "I have worked with this firm since 2008 and I would recommend them to anybody who needs an attorney. They work harder than anybody I know and genuinely care about achieving the best result in your case.",
    author: "Ryan D.",
  },
  {
    quote:
      "An aggressive trial lawyer who will not shy away from a fight in the courtroom and cares a whole lot about making sure the right thing gets done.",
    author: "Eric B.",
  },
  {
    quote:
      "I cannot say enough about this attorney. From the moment I walked into the office, they took the time to look into my case and continued to strive to give me the best outcome for my case. They aren't an attorney who is about trying to make money off your case or your hardship. They are genuine in their efforts to ensure the best optimal results.",
    author: "Christine M.",
  },
  {
    quote:
      "An attorney who truly cares about the best interest of their client. They have a calm demeanor, are an excellent communicator, and understand the system and what needs to be done to get the best possible outcome. Another incredible thing is their honesty. If you are asking for legal counsel they are not an expert on, they are not afraid to tell you the truth and refer you to someone more experienced.",
    author: "Nicole M.",
  },
  {
    quote:
      "Don't go to court alone! Very professional, has a deep knowledge of the law, has the negotiation skills, connections and has the respect of the prosecutors inside the courtroom. It was pretty awesome to observe them in action as they worked to reduce my violation, reduce fines and avoid higher insurance costs!",
    author: "Tonya O.",
  },
  {
    quote:
      "The Law Office has been exceptional at going above and beyond for their clients. Especially when there is an evident need for substance abuse treatment. I would HIGHLY recommend them. They go way above and beyond the call of duty. They care. And in today's world, that's hard to find.",
    author: "Acceptance Recovery Center",
  },
  {
    quote:
      "Very rarely do you meet a lawyer that truly cares about their clients and LISTENS to what they have to say. They go far beyond what is typically expected, and the world desperately needs more people like them. So grateful to have crossed paths with them.",
    author: "Kristina M.",
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
              Criminal Defense Attorney in Georgia
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
