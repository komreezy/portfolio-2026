import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

const practiceAreas = [
  {
    title: "DUI Defense",
    description:
      "Facing DUI charges can be overwhelming and frightening, but you have rights. As a former prosecutor, I've handled hundreds of these cases and know how to build an effective defense. I provide honest assessments of your situation and fight to protect your license, your record, and your future.",
  },
  {
    title: "Car Accidents",
    description:
      "Car accidents are the leading cause of personal injury claims in Georgia. As a licensed engineer and former prosecutor, I understand how to analyze crash evidence, investigate the scene, and build the strongest possible case to recover compensation for your medical bills, lost wages, and pain and suffering.",
  },
  {
    title: "Truck Accidents",
    description:
      "Collisions with commercial trucks often cause catastrophic injuries. My engineering background allows me to understand the technical complexities of these cases, from black box data to maintenance records. I have experience taking on trucking companies and their insurers to secure maximum compensation.",
  },
  {
    title: "Motorcycle Accidents",
    description:
      "Motorcycle riders face unique dangers on Georgia roads, and they're often unfairly blamed for accidents. When negligent drivers cause accidents, I fight to ensure riders aren't held responsible for crashes they didn't cause and recover full damages for their injuries and losses.",
  },
  {
    title: "Pedestrian Accidents",
    description:
      "Pedestrians have virtually no protection when struck by vehicles, often resulting in severe or catastrophic injuries. I work to hold negligent drivers accountable and recover full compensation for medical expenses, lost income, and the pain and suffering you've endured.",
  },
];

export default function PracticeAreas() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)] bg-[var(--card)]">
        <div className="max-w-4xl">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-light text-[var(--foreground)] leading-tight mb-4">
              Our Practice Areas
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-[var(--muted-foreground)] font-light">
              Personal Injury Attorney in Georgia
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="grid md:grid-cols-2 gap-8">
          {practiceAreas.map((area, index) => (
            <ScrollReveal key={area.title} delay={0.1 * index}>
              <article className="border border-[var(--border)] p-8 hover:border-[var(--primary)] transition-colors duration-300 group">
                <h2 className="font-display text-2xl font-light text-[var(--foreground)] mb-4 group-hover:text-[var(--primary)] transition-colors duration-150">
                  {area.title}
                </h2>
                <p className="text-sm font-light text-[var(--muted-foreground)] leading-relaxed">
                  {area.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
