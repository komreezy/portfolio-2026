import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Uber & Lyft Accident Attorney in Georgia | Rideshare Injury Lawyer",
  description: "Injured in an Uber or Lyft accident in Georgia? Former prosecutor Arash Jafary navigates complex rideshare insurance claims. Free consultation. Call (678) 522-6273.",
  keywords: ["Uber accident attorney Georgia", "Lyft accident lawyer Alpharetta", "rideshare accident attorney", "Uber crash lawyer Cobb County", "Lyft injury attorney Fulton County"],
};

export default function RideshareAccidents() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)] bg-[var(--card)]">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-wider text-[var(--primary)] mb-4">Practice Area</p>
          <h1 className="font-display text-4xl md:text-5xl font-light text-[var(--foreground)] leading-tight mb-6">
            Uber & Lyft Accident Attorney in Georgia
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] font-light mb-8">
            Injured as a passenger, driver, or by a rideshare vehicle? Navigate complex insurance coverage with an attorney who knows how rideshare claims work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">
              Free Consultation
            </Link>
            <a href="tel:+16785226273" className="btn-outlined">
              Call (678) 522-6273
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-light text-[var(--foreground)] mb-6">
            Rideshare Accidents Are Different—And More Complicated
          </h2>
          <p className="text-base font-light text-[var(--foreground)] leading-relaxed mb-6">
            When you&apos;re injured in an accident involving an Uber or Lyft vehicle—whether you&apos;re a passenger, another driver, or a pedestrian—the insurance situation becomes immediately complex. Unlike traditional car accidents, rideshare cases can involve multiple insurance policies, app-based coverage tiers, and corporate liability shields that make it difficult to determine who pays for your injuries.
          </p>
          <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-6">
            Uber and Lyft provide coverage that changes depending on the driver&apos;s status at the time of the accident—whether the app was off, on and waiting for a ride request, en route to pick up a passenger, or actively transporting a rider. Each stage triggers different policy limits, and insurance companies routinely dispute which coverage applies.
          </p>
          <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-8">
            As a former prosecutor serving Alpharetta, Cobb County, Fulton County, and all of Georgia, I understand how rideshare companies and their insurers attempt to minimize liability. I know the coverage structures, the common disputes, and how to build a case that holds the right parties accountable.
          </p>

          {/* Rideshare Coverage Tiers */}
          <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">
            Understanding Uber and Lyft Insurance Coverage
          </h3>
          <div className="bg-[var(--card)] p-6 rounded-sm border border-[var(--border)] mb-8">
            <ul className="space-y-4 text-base font-light text-[var(--foreground)]">
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong>App Off (Driver&apos;s Personal Insurance)</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">When the driver is offline, only their personal auto insurance applies—which often excludes rideshare use.</p>
              </li>
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong>App On, No Passenger (Contingent Liability)</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">Uber/Lyft provides limited contingent coverage if the driver&apos;s personal policy denies the claim—typically $50,000 per person for injuries.</p>
              </li>
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong>En Route to Pickup or During Trip ($1 Million Policy)</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">When a driver accepts a ride request and during the trip, Uber/Lyft&apos;s commercial $1 million liability policy applies—but disputes over fault and coverage still arise.</p>
              </li>
              <li className="border-l-2 border-[var(--primary)] pl-4">
                <strong>Uninsured/Underinsured Motorist Coverage</strong>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">If you&apos;re hit by another driver with inadequate insurance, rideshare companies provide UM/UIM coverage during active trips—but accessing it requires aggressive legal work.</p>
              </li>
            </ul>
          </div>

          {/* Common Rideshare Accident Scenarios */}
          <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">
            Types of Rideshare Accidents I Handle
          </h3>
          <ul className="space-y-3 mb-8 text-base font-light text-[var(--muted-foreground)]">
            <li className="flex items-start gap-3">
              <span className="text-[var(--primary)] mt-1">&#8226;</span>
              <span><strong>Passenger injuries</strong> — You were riding in an Uber or Lyft and were injured due to driver negligence or a third-party collision</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--primary)] mt-1">&#8226;</span>
              <span><strong>Third-party injuries</strong> — You were hit by an Uber or Lyft driver while driving, biking, or walking</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--primary)] mt-1">&#8226;</span>
              <span><strong>Rideshare driver injuries</strong> — You drive for Uber/Lyft and were injured on the job due to another driver&apos;s fault</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--primary)] mt-1">&#8226;</span>
              <span><strong>Multi-vehicle crashes</strong> — Complex accidents involving rideshare vehicles and multiple other cars</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--primary)] mt-1">&#8226;</span>
              <span><strong>Uninsured motorist claims</strong> — The at-fault driver fled the scene or has no insurance</span>
            </li>
          </ul>

          {/* What You Can Recover */}
          <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">
            Compensation Available in Rideshare Accident Cases
          </h3>
          <div className="bg-[var(--card)] p-6 rounded-sm border border-[var(--border)] mb-8">
            <ul className="space-y-3 text-base font-light text-[var(--foreground)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--primary)] mt-1">&#8226;</span>
                <span><strong>Medical expenses</strong> — emergency treatment, hospitalization, surgery, physical therapy, future care</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--primary)] mt-1">&#8226;</span>
                <span><strong>Lost wages and income</strong> — time missed from work during recovery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--primary)] mt-1">&#8226;</span>
                <span><strong>Lost earning capacity</strong> — if your injuries prevent you from returning to your previous job</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--primary)] mt-1">&#8226;</span>
                <span><strong>Pain and suffering</strong> — physical pain, emotional distress, and diminished quality of life</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--primary)] mt-1">&#8226;</span>
                <span><strong>Property damage</strong> — vehicle repair or replacement costs</span>
              </li>
            </ul>
          </div>

          {/* Why Choose Me */}
          <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">
            Why Rideshare Accident Cases Require a Skilled Attorney
          </h3>
          <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-6">
            Uber and Lyft have legal teams whose job is to minimize the company&apos;s liability and shift responsibility onto their drivers or third parties. They use app data, driver contracts, and insurance policy exclusions to avoid paying claims.
          </p>
          <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-6">
            I understand how these companies operate. I know how to obtain driver app logs, investigate whether the driver was properly insured and authorized, and establish the correct insurance coverage tier. I also know when to pursue claims against the rideshare company itself for negligent driver screening or app design flaws.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="border-l-2 border-[var(--primary)] pl-4">
              <strong className="text-[var(--foreground)]">Former prosecutor experience</strong>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">I know how to investigate complex liability, gather evidence, and build cases that stand up in court.</p>
            </li>
            <li className="border-l-2 border-[var(--primary)] pl-4">
              <strong className="text-[var(--foreground)]">Direct attorney access</strong>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">You work directly with me, not a paralegal or case manager. I handle your case personally from start to finish.</p>
            </li>
            <li className="border-l-2 border-[var(--primary)] pl-4">
              <strong className="text-[var(--foreground)]">No upfront fees</strong>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">I work on a contingency fee basis—you pay nothing unless we recover compensation for you.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-[var(--side-padding)] bg-[var(--primary-dark)]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl font-light text-[var(--footer-text)] mb-6">
            Injured in an Uber or Lyft Accident? Get the Compensation You Deserve.
          </h2>
          <p className="text-base font-light text-[var(--footer-text)] opacity-80 mb-8">
            Don&apos;t let rideshare companies minimize your claim. Call now for a free consultation—you pay nothing unless we win.
          </p>
          <a href="tel:+16785226273" className="btn-outlined-light">
            Call (678) 522-6273
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
