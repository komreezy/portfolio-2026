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

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length > 10) return digits;
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: "New Contact Form Submission - Assured Justice Firm",
          from_name: `${formData.firstName} ${formData.lastName}`,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          submitted_at: new Date().toLocaleString("en-US", { timeZone: "America/New_York" }) + " EST",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > maxChars) return;
    if (name === "phone") {
      setFormData((prev) => ({ ...prev, phone: formatPhoneNumber(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
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
            <a
              href="tel:+16785226273"
              className="mt-6 inline-flex items-center gap-2 bg-[var(--primary)] text-white px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-[var(--primary-dark)] transition-colors duration-150"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </a>
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
                <div className="bg-[var(--primary)]/5 border border-[var(--primary)]/20 p-6 text-center">
                  <p className="text-[var(--primary)] font-medium mb-2">Message Sent!</p>
                  <p className="text-[var(--foreground)] opacity-80 text-sm">
                    Thank you for reaching out. We&apos;ll respond to you as soon as possible.
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
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border font-light text-sm bg-transparent border-[var(--border-solid)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] disabled:opacity-50"
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
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border font-light text-sm bg-transparent border-[var(--border-solid)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] disabled:opacity-50"
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
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border font-light text-sm bg-transparent border-[var(--border-solid)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] disabled:opacity-50"
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
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border font-light text-sm bg-transparent border-[var(--border-solid)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] disabled:opacity-50"
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
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border font-light text-sm resize-none bg-transparent border-[var(--border-solid)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] disabled:opacity-50"
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
