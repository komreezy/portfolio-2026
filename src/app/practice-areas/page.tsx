import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

const practiceAreas = [
  {
    title: "Criminal Defense",
    description:
      "If you have been arrested, it is almost certain that you need a criminal defense attorney. There are decisions you face that will have a big effect on the outcome of your case. Our firm aggressively defends against all types of criminal offenses.",
    link: "/practice-areas/criminal-defense",
  },
  {
    title: "DUI",
    description:
      "We specialize in providing exceptional legal representation for individuals facing DUI charges. We are committed to protecting your rights and fighting for your freedom. Don't face the challenges of a DUI charge alone.",
    link: "/practice-areas/dui",
  },
  {
    title: "Probation Violation",
    description:
      "Violating any conditions of probation may cause the judge to revoke, change, or terminate the probation—or impose additional penalties. Trust us to navigate the complexities of probation violation laws and advocate for the best possible outcome.",
    link: "/practice-areas/probation-violation",
  },
  {
    title: "Traffic Violations",
    description:
      "Exceptional legal representation for individuals facing traffic violations and traffic tickets in Georgia. Don't let a traffic violation jeopardize your future—let us give you the support you need.",
    link: "/practice-areas/traffic-violations",
  },
  {
    title: "Domestic Violence",
    description:
      "Whether you need guidance on restraining orders, assault charges, or any other domestic violence-related matters, we are here to navigate the intricacies of your case with professionalism and discretion.",
    link: "/practice-areas/domestic-violence",
  },
  {
    title: "Juvenile Delinquency",
    description:
      "Our unwavering commitment lies in advocating for the rights of juveniles facing delinquency charges. Entrust us to be your advocate throughout the legal process for juvenile defense.",
    link: "/practice-areas/juvenile-defense",
  },
  {
    title: "Self Defense",
    description:
      "Everyone wants to feel safe, and when a person feels threatened by another, they may use self-defense actions. With an emphasis on self-defense representation, we are committed to safeguarding your rights.",
    link: "/practice-areas/self-defense",
  },
  {
    title: "Mental Health",
    description:
      "Mental health is a vital component of overall well-being. With a focus on mental health representation, we are committed to upholding your rights, ensuring your concerns are addressed with care.",
    link: "/practice-areas/mental-health",
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
              Criminal Defense Attorney in Georgia
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
