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
            <h1 className="text-4xl md:text-5xl font-light text-[var(--primary)] leading-tight">
              Let&apos;s start a
              <br />
              <span className="font-serif italic">conversation</span>
            </h1>
            <p className="mt-8 text-base font-light text-[var(--foreground)] opacity-80 max-w-lg">
              I&apos;m always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to
              say hello, feel free to reach out.
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
            {/* Contact Form */}
            <div>
              <form className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-light text-[var(--muted-foreground)] uppercase tracking-widest mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input-underline w-full"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-light text-[var(--muted-foreground)] uppercase tracking-widest mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input-underline w-full"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-light text-[var(--muted-foreground)] uppercase tracking-widest mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="input-underline w-full"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-light text-[var(--muted-foreground)] uppercase tracking-widest mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="input-underline w-full resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button type="submit" className="btn-outlined mt-4">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-[var(--primary)] text-xs uppercase tracking-widest mb-3">
                  Email
                </h3>
                <a
                  href="mailto:hello@example.com"
                  className="text-[var(--foreground)] font-light hover:text-[var(--primary)] transition-colors duration-150"
                >
                  hello@example.com
                </a>
              </div>

              <div>
                <h3 className="text-[var(--primary)] text-xs uppercase tracking-widest mb-3">
                  Location
                </h3>
                <p className="text-[var(--foreground)] font-light">
                  San Francisco, California
                </p>
              </div>

              <div>
                <h3 className="text-[var(--primary)] text-xs uppercase tracking-widest mb-3">
                  Connect
                </h3>
                <div className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="text-[var(--foreground)] font-light hover:text-[var(--primary)] transition-colors duration-150"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="text-[var(--foreground)] font-light hover:text-[var(--primary)] transition-colors duration-150"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-[var(--foreground)] font-light hover:text-[var(--primary)] transition-colors duration-150"
                  >
                    Twitter
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-[var(--border)]">
                <p className="text-sm font-light text-[var(--foreground)] opacity-70">
                  I typically respond within 24-48 hours. Looking forward
                  to hearing from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
