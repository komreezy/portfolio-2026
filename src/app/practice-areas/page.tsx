import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

const practiceAreas = [
  {
    title: "Car Accidents",
    description:
      "Car accidents can result in devastating injuries and significant financial burdens. We fight to hold negligent drivers accountable and recover compensation for medical bills, lost wages, pain and suffering, and more.",
    link: "/practice-areas/car-accidents",
  },
  {
    title: "Truck Accidents",
    description:
      "Collisions with commercial trucks often cause catastrophic injuries. We have experience taking on trucking companies and their insurers to secure the maximum compensation our clients deserve.",
    link: "/practice-areas/truck-accidents",
  },
  {
    title: "Motorcycle Accidents",
    description:
      "Motorcycle riders face unique dangers on Georgia roads. When negligent drivers cause accidents, we help injured riders recover damages for their injuries, bike damage, and other losses.",
    link: "/practice-areas/motorcycle-accidents",
  },
  {
    title: "Slip & Fall",
    description:
      "Property owners have a duty to maintain safe premises. If you were injured due to hazardous conditions like wet floors, uneven surfaces, or poor lighting, we can help you pursue a premises liability claim.",
    link: "/practice-areas/slip-and-fall",
  },
  {
    title: "Medical Malpractice",
    description:
      "When healthcare providers fail to meet the standard of care, patients suffer. We handle cases involving surgical errors, misdiagnosis, medication mistakes, and other forms of medical negligence.",
    link: "/practice-areas/medical-malpractice",
  },
  {
    title: "Wrongful Death",
    description:
      "Losing a loved one due to someone else's negligence is devastating. We help families seek justice and compensation for funeral expenses, lost income, and the emotional toll of their loss.",
    link: "/practice-areas/wrongful-death",
  },
  {
    title: "Workers' Compensation",
    description:
      "Injured on the job? You may be entitled to workers' compensation benefits. We help injured workers navigate the claims process and fight for the benefits they deserve.",
    link: "/practice-areas/workers-compensation",
  },
  {
    title: "Product Liability",
    description:
      "Defective products can cause serious injuries. Whether it's a faulty vehicle part, dangerous medication, or unsafe consumer product, we hold manufacturers accountable for their negligence.",
    link: "/practice-areas/product-liability",
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
                <p className="text-sm font-light text-[var(--muted-foreground)] leading-relaxed mb-6">
                  {area.description}
                </p>
                <Link
                  href={area.link}
                  className="text-sm font-medium text-[var(--primary)] hover:underline inline-flex items-center gap-1"
                >
                  Learn More
                  <span>&rarr;</span>
                </Link>
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
