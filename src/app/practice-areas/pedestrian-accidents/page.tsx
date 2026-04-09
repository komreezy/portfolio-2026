import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Pedestrian Accident Attorney Georgia | Assured Justice Firm",
  description: "Injured as a pedestrian in Georgia? Attorney Arash Jafary fights to hold negligent drivers accountable and recover maximum compensation. Free consultation. Call (678) 522-6273.",
  keywords: ["pedestrian accident attorney Georgia", "hit by car lawyer", "pedestrian injury lawyer Alpharetta", "crosswalk accident attorney", "pedestrian crash lawyer Cobb County"],
};

export default function PedestrianAccidents() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)] bg-[var(--card)]">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-wider text-[var(--primary)] mb-4">Practice Area</p>
          <h1 className="font-display text-4xl md:text-5xl font-light text-[var(--foreground)] leading-tight mb-6">
            Pedestrian Accident Attorney in Georgia
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] font-light mb-8">
            Holding negligent drivers accountable for devastating pedestrian injuries.
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
            Pedestrians Have No Protection When Struck by Vehicles
          </h2>
          <p className="text-base font-light text-[var(--foreground)] leading-relaxed mb-6">
            When a vehicle strikes a pedestrian, the results are almost always catastrophic. Unlike vehicle occupants, pedestrians have no airbags, seat belts, or metal frame to absorb impact. The injuries—traumatic brain injuries, spinal cord damage, multiple fractures, internal bleeding—often require extensive medical treatment and can result in permanent disability or death.
          </p>
          <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-6">
            I work to hold negligent drivers accountable and recover full compensation for pedestrian accident victims in Alpharetta, Cobb County, Fulton County, and throughout Georgia. This includes compensation for immediate medical care, long-term rehabilitation, lost income, and the profound impact these injuries have on your quality of life.
          </p>
          <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-8">
            As a licensed Engineer-in-Training, I can analyze accident reconstruction evidence, vehicle speed calculations, and sight-line analysis to prove exactly how the driver&apos;s negligence caused your injuries.
          </p>

          {/* Common Scenarios */}
          <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">
            Common Pedestrian Accident Scenarios
          </h3>
          <ul className="space-y-4 mb-8">
            <li className="border-l-2 border-[var(--primary)] pl-4">
              <strong className="text-[var(--foreground)]">Crosswalk accidents</strong>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">Drivers who fail to yield to pedestrians in marked or unmarked crosswalks.</p>
            </li>
            <li className="border-l-2 border-[var(--primary)] pl-4">
              <strong className="text-[var(--foreground)]">Distracted driving</strong>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">Drivers texting or otherwise distracted who don&apos;t see pedestrians until it&apos;s too late.</p>
            </li>
            <li className="border-l-2 border-[var(--primary)] pl-4">
              <strong className="text-[var(--foreground)]">Backing accidents</strong>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">Drivers in parking lots or driveways who fail to check for pedestrians behind their vehicle.</p>
            </li>
            <li className="border-l-2 border-[var(--primary)] pl-4">
              <strong className="text-[var(--foreground)]">Turning vehicle accidents</strong>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">Drivers making left or right turns who focus on traffic and miss pedestrians in the crosswalk.</p>
            </li>
            <li className="border-l-2 border-[var(--primary)] pl-4">
              <strong className="text-[var(--foreground)]">Drunk or impaired drivers</strong>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">Impaired drivers with delayed reaction times who cannot stop in time to avoid pedestrians.</p>
            </li>
          </ul>

          {/* What You Can Recover */}
          <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">
            Compensation for Pedestrian Accident Victims
          </h3>
          <div className="bg-[var(--card)] p-6 rounded-sm border border-[var(--border)] mb-8">
            <ul className="space-y-3 text-base font-light text-[var(--foreground)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--primary)] mt-1">&#8226;</span>
                <span><strong>Emergency and ongoing medical care</strong> — surgeries, hospital stays, rehabilitation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--primary)] mt-1">&#8226;</span>
                <span><strong>Future medical expenses</strong> — ongoing treatment, therapy, medical equipment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--primary)] mt-1">&#8226;</span>
                <span><strong>Lost wages</strong> — income lost during recovery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--primary)] mt-1">&#8226;</span>
                <span><strong>Diminished earning capacity</strong> — if injuries prevent returning to your previous work</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--primary)] mt-1">&#8226;</span>
                <span><strong>Pain and suffering</strong> — physical pain and emotional trauma</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--primary)] mt-1">&#8226;</span>
                <span><strong>Loss of enjoyment of life</strong> — impact on daily activities and quality of life</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--primary)] mt-1">&#8226;</span>
                <span><strong>Wrongful death damages</strong> — for families who have lost a loved one</span>
              </li>
            </ul>
          </div>

          {/* Georgia Law */}
          <h3 className="font-display text-2xl font-light text-[var(--foreground)] mb-4">
            Georgia&apos;s Comparative Negligence Law
          </h3>
          <p className="text-base font-light text-[var(--muted-foreground)] leading-relaxed mb-8">
            Insurance companies often try to blame pedestrians for accidents—claiming you weren&apos;t in a crosswalk, were wearing dark clothing, or were distracted. Under Georgia&apos;s modified comparative negligence rule, you can still recover damages as long as you were less than 50% at fault. I fight to minimize any fault assigned to you and maximize your recovery.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-[var(--side-padding)] bg-[var(--primary-dark)]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl font-light text-[var(--footer-text)] mb-6">
            Struck by a Vehicle? You Deserve Full Compensation.
          </h2>
          <p className="text-base font-light text-[var(--footer-text)] opacity-80 mb-8">
            I hold negligent drivers accountable and fight for the compensation you need to recover. Call now for a free consultation.
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
