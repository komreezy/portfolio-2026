"use client";

import { useState } from "react";
import Image from "next/image";

interface ContactFormProps {
  variant?: "default" | "dark";
}

export default function ContactForm({ variant = "default" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    category: "General Inquiry",
    message: "",
  });

  const categories = [
    { value: "General Inquiry", label: "General Inquiry" },
    { value: "DUI Defense", label: "DUI Defense" },
    { value: "Car Accident", label: "Car Accident" },
    { value: "Truck Accident", label: "Truck Accident" },
    { value: "Motorcycle Accident", label: "Motorcycle Accident" },
    { value: "Pedestrian Accident", label: "Pedestrian Accident" },
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const phoneNumber = "(678) 522-6273";
  const maxChars = 600;

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
          subject: `New Contact Form Submission - ${formData.category} - Assured Justice Firm`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          category: formData.category,
          message: formData.message,
          submitted_at: new Date().toLocaleString("en-US", { timeZone: "America/New_York" }) + " EST",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ firstName: "", lastName: "", phone: "", email: "", category: "General Inquiry", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > maxChars) return;
    if (name === "phone") {
      setFormData((prev) => ({ ...prev, phone: formatPhoneNumber(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (submitStatus !== "idle") setSubmitStatus("idle");
  };

  const isDark = variant === "dark";

  if (submitStatus === "success") {
    return (
      <section className={`py-[var(--section-spacing)] ${isDark ? "bg-[var(--primary-dark)]" : ""}`}>
        <div className="px-[var(--side-padding)]">
          <div className="max-w-3xl mx-auto">
            <div className={`border p-8 text-center ${isDark ? "bg-[var(--primary-dark)] border-[var(--footer-text)] border-opacity-30" : "bg-[var(--primary)]/5 border-[var(--primary)]/20"}`}>
              <p className={`font-medium mb-2 ${isDark ? "text-[var(--footer-text)]" : "text-[var(--primary)]"}`}>Message Sent!</p>
              <p className={`text-sm ${isDark ? "text-[var(--footer-text)] opacity-80" : "text-[var(--foreground)] opacity-80"}`}>
                Thank you for reaching out. We&apos;ll respond to you as soon as possible.
              </p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className={`mt-4 px-6 py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-150 ${
                  isDark
                    ? "bg-[var(--footer-text)] text-[var(--primary-dark)] hover:bg-opacity-90"
                    : "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]"
                }`}
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-[var(--section-spacing)] ${isDark ? "bg-[var(--primary-dark)]" : ""}`}>
      <div className="px-[var(--side-padding)]">
        <div className="max-w-3xl mx-auto">
          {/* Trust Badge Header */}
          <div className="bg-[#F6F5EF] rounded-sm p-6 md:p-8 mb-12 border border-[var(--border)] max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              {/* Logo */}
              <div className="shrink-0">
                <Image
                  src="/logo-aj.png"
                  alt="Assured Justice"
                  width={120}
                  height={120}
                  className="w-28 h-auto"
                />
              </div>
              {/* Content - all text left aligned */}
              <div className="flex-1">
                <h2 className="font-display text-2xl md:text-3xl font-light mb-3 text-left text-[var(--foreground)]">
                  Contact Us About Your Case
                </h2>
                <p className="text-sm mb-2 text-left text-[var(--muted-foreground)]">Free consultation · Responds within 24 hours · Confidential</p>
                <p className="text-sm font-light text-left text-[var(--muted-foreground)]">
                  <span className="font-medium">Call or Text - {phoneNumber}</span> - OR - Fill in the form below
                </p>
              </div>
            </div>
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
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 border font-light text-sm ${
                    isDark
                      ? "bg-transparent border-[var(--footer-text)] border-opacity-30 text-[var(--footer-text)] placeholder-[var(--footer-text)] placeholder-opacity-50"
                      : "bg-transparent border-[var(--border-solid)] text-[var(--foreground)]"
                  } focus:outline-none focus:border-[var(--primary)] disabled:opacity-50`}
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
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 border font-light text-sm ${
                    isDark
                      ? "bg-transparent border-[var(--footer-text)] border-opacity-30 text-[var(--footer-text)] placeholder-[var(--footer-text)] placeholder-opacity-50"
                      : "bg-transparent border-[var(--border-solid)] text-[var(--foreground)]"
                  } focus:outline-none focus:border-[var(--primary)] disabled:opacity-50`}
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
                disabled={isSubmitting}
                className={`w-full px-4 py-3 border font-light text-sm ${
                  isDark
                    ? "bg-transparent border-[var(--footer-text)] border-opacity-30 text-[var(--footer-text)] placeholder-[var(--footer-text)] placeholder-opacity-50"
                    : "bg-transparent border-[var(--border-solid)] text-[var(--foreground)]"
                } focus:outline-none focus:border-[var(--primary)] disabled:opacity-50`}
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
                disabled={isSubmitting}
                className={`w-full px-4 py-3 border font-light text-sm ${
                  isDark
                    ? "bg-transparent border-[var(--footer-text)] border-opacity-30 text-[var(--footer-text)] placeholder-[var(--footer-text)] placeholder-opacity-50"
                    : "bg-transparent border-[var(--border-solid)] text-[var(--foreground)]"
                } focus:outline-none focus:border-[var(--primary)] disabled:opacity-50`}
                placeholder="you@example.com"
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className={`block text-sm font-light mb-2 ${isDark ? "text-[var(--footer-text)]" : "text-[var(--foreground)]"}`}
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full pl-4 pr-10 py-3 border font-light text-sm appearance-none bg-no-repeat bg-[length:16px] bg-[right_1rem_center] ${
                  isDark
                    ? "bg-transparent border-[var(--footer-text)] border-opacity-30 text-[var(--footer-text)]"
                    : "bg-transparent border-[var(--border-solid)] text-[var(--foreground)]"
                } focus:outline-none focus:border-[var(--primary)] disabled:opacity-50`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`
                }}
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
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
                disabled={isSubmitting}
                className={`w-full px-4 py-3 border font-light text-sm resize-none ${
                  isDark
                    ? "bg-transparent border-[var(--footer-text)] border-opacity-30 text-[var(--footer-text)] placeholder-[var(--footer-text)] placeholder-opacity-50"
                    : "bg-transparent border-[var(--border-solid)] text-[var(--foreground)]"
                } focus:outline-none focus:border-[var(--primary)] disabled:opacity-50`}
                placeholder="Tell us about your situation..."
              />
              <p className={`text-xs mt-1 ${isDark ? "text-[var(--footer-text)] opacity-60" : "text-[var(--muted-foreground)]"}`}>
                {formData.message.length} of {maxChars} max characters
              </p>
            </div>

            {submitStatus === "error" && (
              <p className={`text-sm ${isDark ? "text-red-400" : "text-red-500"}`}>
                Something went wrong. Please try again or call us directly at {phoneNumber}.
              </p>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 text-sm font-medium uppercase tracking-wider transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isDark
                    ? "bg-[var(--footer-text)] text-[var(--primary-dark)] hover:bg-opacity-90"
                    : "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]"
                }`}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
