"use client";

import { useState } from "react";

interface ContactFormProps {
  variant?: "default" | "dark";
}

export default function ContactForm({ variant = "default" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const phoneNumber = "(678) 522-6273";
  const maxChars = 600;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > maxChars) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isDark = variant === "dark";

  return (
    <section className={`py-[var(--section-spacing)] ${isDark ? "bg-[var(--primary-dark)]" : ""}`}>
      <div className="px-[var(--side-padding)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-display text-3xl md:text-4xl font-light mb-4 ${isDark ? "text-[var(--footer-text)]" : "text-[var(--foreground)]"}`}>
              Contact Us About Your Case
            </h2>
            <p className={`text-base font-light ${isDark ? "text-[var(--footer-text)] opacity-80" : "text-[var(--muted-foreground)]"}`}>
              <span className="font-medium">Call or Text - {phoneNumber}</span> - OR - Fill in the form below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <p className={`text-xs ${isDark ? "text-[var(--footer-text)] opacity-60" : "text-[var(--muted-foreground)]"}`}>
              <span className="text-red-500">*</span> indicates required fields
            </p>

            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className={`block text-sm font-light mb-2 ${isDark ? "text-[var(--footer-text)]" : "text-[var(--foreground)]"}`}
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
                  className={`w-full px-4 py-3 border font-light text-sm ${
                    isDark
                      ? "bg-transparent border-[var(--footer-text)] border-opacity-30 text-[var(--footer-text)] placeholder-[var(--footer-text)] placeholder-opacity-50"
                      : "bg-transparent border-[var(--border-solid)] text-[var(--foreground)]"
                  } focus:outline-none focus:border-[var(--primary)]`}
                  placeholder="First"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className={`block text-sm font-light mb-2 ${isDark ? "text-[var(--footer-text)]" : "text-[var(--foreground)]"}`}
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
                  className={`w-full px-4 py-3 border font-light text-sm ${
                    isDark
                      ? "bg-transparent border-[var(--footer-text)] border-opacity-30 text-[var(--footer-text)] placeholder-[var(--footer-text)] placeholder-opacity-50"
                      : "bg-transparent border-[var(--border-solid)] text-[var(--foreground)]"
                  } focus:outline-none focus:border-[var(--primary)]`}
                  placeholder="Last"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className={`block text-sm font-light mb-2 ${isDark ? "text-[var(--footer-text)]" : "text-[var(--foreground)]"}`}
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
                className={`w-full px-4 py-3 border font-light text-sm ${
                  isDark
                    ? "bg-transparent border-[var(--footer-text)] border-opacity-30 text-[var(--footer-text)] placeholder-[var(--footer-text)] placeholder-opacity-50"
                    : "bg-transparent border-[var(--border-solid)] text-[var(--foreground)]"
                } focus:outline-none focus:border-[var(--primary)]`}
                placeholder="(555) 555-5555"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-light mb-2 ${isDark ? "text-[var(--footer-text)]" : "text-[var(--foreground)]"}`}
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
                className={`w-full px-4 py-3 border font-light text-sm ${
                  isDark
                    ? "bg-transparent border-[var(--footer-text)] border-opacity-30 text-[var(--footer-text)] placeholder-[var(--footer-text)] placeholder-opacity-50"
                    : "bg-transparent border-[var(--border-solid)] text-[var(--foreground)]"
                } focus:outline-none focus:border-[var(--primary)]`}
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-light mb-2 ${isDark ? "text-[var(--footer-text)]" : "text-[var(--foreground)]"}`}
              >
                Message <span className="text-red-500">*</span>
              </label>
              <p className={`text-xs mb-2 ${isDark ? "text-[var(--footer-text)] opacity-60" : "text-[var(--muted-foreground)]"}`}>
                Give a brief explanation of your case.
              </p>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border font-light text-sm resize-none ${
                  isDark
                    ? "bg-transparent border-[var(--footer-text)] border-opacity-30 text-[var(--footer-text)] placeholder-[var(--footer-text)] placeholder-opacity-50"
                    : "bg-transparent border-[var(--border-solid)] text-[var(--foreground)]"
                } focus:outline-none focus:border-[var(--primary)]`}
                placeholder="Tell us about your situation..."
              />
              <p className={`text-xs mt-1 ${isDark ? "text-[var(--footer-text)] opacity-60" : "text-[var(--muted-foreground)]"}`}>
                {formData.message.length} of {maxChars} max characters
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className={`px-8 py-3 text-sm font-medium uppercase tracking-wider transition-colors duration-150 ${
                  isDark
                    ? "bg-[var(--footer-text)] text-[var(--primary-dark)] hover:bg-opacity-90"
                    : "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]"
                }`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
