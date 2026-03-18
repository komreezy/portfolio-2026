import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Practice Areas | DUI Defense & Personal Injury | Assured Justice Firm",
  description: "Arash Jafary provides DUI defense and personal injury representation in Alpharetta, Cobb County, and throughout Georgia. Car, truck, motorcycle, and pedestrian accidents. Free consultation.",
  keywords: ["DUI attorney Georgia", "personal injury lawyer Alpharetta", "car accident attorney Cobb County", "truck accident lawyer", "motorcycle accident attorney"],
};

const practiceAreas = [
  {
    title: "DUI Defense",
    slug: "dui-defense",
    description:
      "Facing DUI charges can be overwhelming and frightening, but you have rights. As a former prosecutor at the Fulton County DA's Office and Cobb County Solicitor General's Office, I know how the state builds these cases—and I know how to fight them. I provide honest assessments of your situation and fight to protect your license, your record, and your future.",
  },
  {
    title: "Car Accidents",
    slug: "car-accidents",
    description:
      "Car accidents are the leading cause of personal injury claims in Georgia. As a licensed Engineer-in-Training and former prosecutor, I understand how to analyze crash evidence, investigate the scene, and build the strongest possible case. With results including a $250,000 settlement, I fight to recover maximum compensation for your injuries.",
  },
  {
    title: "Truck Accidents",
    slug: "truck-accidents",
    description:
      "Collisions with commercial trucks often cause catastrophic injuries. My engineering background allows me to understand the technical complexities of these cases, from black box data to ELD records to FMCSA violations. I have experience taking on trucking companies and their insurers to secure maximum compensation.",
  },
  {
    title: "Uber & Lyft Accidents",
    slug: "rideshare-accidents",
    description:
      "Injured in an Uber or Lyft accident? Rideshare cases involve complex insurance coverage tiers and corporate liability shields. I navigate these complicated claims to hold the right parties accountable and secure maximum compensation for passengers, drivers, and third-party victims.",
  },
  {
    title: "Motorcycle Accidents",
    slug: "motorcycle-accidents",
    description:
      "Motorcycle riders face unique dangers on Georgia roads, and they're often unfairly blamed for accidents. When negligent drivers cause accidents, I fight to ensure riders aren't held responsible for crashes they didn't cause and recover full damages for their injuries and losses.",
  },
  {
    title: "Pedestrian Accidents",
    slug: "pedestrian-accidents",
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
              Practice Areas
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-xl font-medium text-[var(--primary)] mb-2">
              DUI Defense & Personal Injury Attorney in Georgia
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-[var(--muted-foreground)] font-light">
              Serving Alpharetta, Cobb County, Fulton County, and all of Georgia
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="grid md:grid-cols-2 gap-8">
          {practiceAreas.map((area, index) => (
            <ScrollReveal key={area.title} delay={0.1 * index}>
              <Link href={`/practice-areas/${area.slug}`}>
                <article className="border border-[var(--border)] p-8 hover:border-[var(--primary)] transition-colors duration-300 group h-full">
                  <h2 className="font-display text-2xl font-light text-[var(--foreground)] mb-4 group-hover:text-[var(--primary)] transition-colors duration-150">
                    {area.title}
                  </h2>
                  <p className="text-sm font-light text-[var(--muted-foreground)] leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <span className="text-sm font-medium text-[var(--primary)] inline-flex items-center gap-1">
                    Learn More <span>&rarr;</span>
                  </span>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
