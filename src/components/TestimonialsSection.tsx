"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    title: "HIGHLY RECOMMENDED!",
    quote:
      "Arash is someone who makes sure to get all facts and analyzes them well. He is responsive, thorough, and genuinely cares about his clients. I highly recommend him for anyone seeking legal representation.",
    author: "Babak K.",
  },
  {
    title: "FOUGHT FOR EVERY DOLLAR!",
    quote:
      "The insurance company offered me a lowball settlement. Arash took my case seriously, investigated thoroughly, and got me the compensation I deserved. His engineering background really made a difference in understanding my accident.",
    author: "Michael R.",
  },
  {
    title: "HONEST & DIRECT!",
    quote:
      "What I appreciated most was Arash's honesty. He gave me straight answers about my case, explained everything in plain language, and always returned my calls. You work with him directly, not a case manager.",
    author: "Sarah M.",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-[var(--section-spacing)] px-[var(--side-padding)] bg-[var(--card)]">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--foreground)] text-center mb-12">
          From Our Clients
        </h2>
      </ScrollReveal>

      {/* Testimonials Carousel */}
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={0.15 * index}>
              <div
                className={`p-6 border-l-2 transition-all duration-300 ${
                  activeIndex === index
                    ? "border-[var(--primary)] bg-white/50"
                    : "border-[var(--border)]"
                }`}
              >
                <h3 className="text-sm font-medium text-[var(--primary)] uppercase tracking-wider mb-4">
                  {testimonial.title}
                </h3>
                <p className="text-sm font-light text-[var(--foreground)] leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-xs font-medium text-[var(--muted-foreground)]">
                  {testimonial.author}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                activeIndex === index ? "bg-[var(--primary)]" : "bg-[var(--border)]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <ScrollReveal delay={0.3}>
        <div className="text-center mt-8">
          <Link
            href="/testimonials"
            className="text-sm font-light text-[var(--primary)] hover:underline inline-flex items-center gap-1"
          >
            Read all reviews
            <span>&rarr;</span>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
