"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const maxChars = 600;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual submission logic
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > maxChars) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitStatus("idle");
  };

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
            {/* Contact Form */}
            <div>
              {submitStatus === "success" ? (
                <div className="bg-green-50 border border-green-200 p-6 text-center">
                  <p className="text-green-800 font-medium mb-2">Message Sent!</p>
                  <p className="text-green-700 text-sm">
                    Thank you for reaching out. I&apos;ll respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="text-xs text-[var(--muted-foreground)]">
                    <span className="text-red-500">*</span> indicates required fields
                  </p>

                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-light mb-2 text-[var(--foreground)]"
                      >
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border font-light text-sm bg-transparent border-[var(--border-solid)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
                        placeholder="First"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-light mb-2 text-[var(--foreground)]"
                      >
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border font-light text-sm bg-transparent border-[var(--border-solid)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
                        placeholder="Last"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-light mb-2 text-[var(--foreground)]"
                    >
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border font-light text-sm bg-transparent border-[var(--border-solid)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
                      placeholder="(555) 555-5555"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-light mb-2 text-[var(--foreground)]"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border font-light text-sm bg-transparent border-[var(--border-solid)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-light mb-2 text-[var(--foreground)]"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border font-light text-sm resize-none bg-transparent border-[var(--border-solid)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
                      placeholder="Tell us about your situation..."
                    />
                    <p className="text-xs mt-1 text-[var(--muted-foreground)]">
                      {formData.message.length} of {maxChars} max characters
                    </p>
                  </div>

                  {submitStatus === "error" && (
                    <p className="text-red-500 text-sm">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 text-sm font-medium uppercase tracking-wider transition-colors duration-150 bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                </form>
              )}
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
