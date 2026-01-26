export default function Contact() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="grid md:grid-cols-[30%_70%] gap-12">
          <div>
            <span className="heading-serif">Contact</span>
          </div>
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-light text-[var(--primary)] leading-tight">
              Schedule a
              <br />
              consultation
            </h1>
            <p className="mt-8 text-base font-light text-[var(--foreground)] opacity-80 max-w-lg">
              I offer complimentary initial consultations to discuss your legal
              needs and explore how I can help. Whether you&apos;re facing an
              immediate challenge or planning ahead, I&apos;m here to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="border-t border-[var(--border)] py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="grid md:grid-cols-[30%_70%] gap-12">
          <div>
            <span className="heading-serif">Send a Message</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Email CTA */}
            <div className="flex flex-col justify-center">
              <p className="text-lg font-light text-[var(--foreground)] mb-8">
                The best way to reach me is via the contact form or email. I typically respond within one business day.
              </p>
              <a
                href="mailto:Info@assuredjusticefirm.com"
                className="btn-outlined inline-flex items-center gap-2 w-fit"
              >
                <span>Send an Email</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-[var(--primary)] text-xs uppercase tracking-widest mb-3">
                  Email
                </h3>
                <a
                  href="mailto:Info@assuredjusticefirm.com"
                  className="text-[var(--foreground)] font-light hover:text-[var(--primary)] transition-colors duration-150"
                >
                  Info@assuredjusticefirm.com
                </a>
              </div>

              <div>
                <h3 className="text-[var(--primary)] text-xs uppercase tracking-widest mb-3">
                  Phone
                </h3>
                <a
                  href="tel:+16785226273"
                  className="text-[var(--foreground)] font-light hover:text-[var(--primary)] transition-colors duration-150"
                >
                  (678) 522-6273
                </a>
              </div>

              <div>
                <h3 className="text-[var(--primary)] text-xs uppercase tracking-widest mb-3">
                  Office
                </h3>
                <p className="text-[var(--foreground)] font-light">
                  4575 Webb Bridge Road, #2361
                  <br />
                  Alpharetta, GA 30023
                </p>
              </div>

              <div>
                <h3 className="text-[var(--primary)] text-xs uppercase tracking-widest mb-3">
                  Office Hours
                </h3>
                <p className="text-[var(--foreground)] font-light">
                  Monday – Friday: 9:00 AM – 5:00 PM
                  <br />
                  By appointment only
                </p>
              </div>

              <div className="pt-8 border-t border-[var(--border)]">
                <p className="text-sm font-light text-[var(--foreground)] opacity-70">
                  I respond to all inquiries within one business day.
                  Consultations available in person, by phone, or via video conference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
