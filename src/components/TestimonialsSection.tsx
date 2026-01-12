"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    title: "AMAZING!",
    quote:
      "An aggressive trial lawyer who will not shy away from a fight in the courtroom and cares a whole lot about making sure the right thing gets done.",
    author: "Tonya O.",
  },
  {
    title: "DRIVEN AND PASSIONATE!",
    quote:
      "I have worked with this firm since 2008. They work harder than anybody I know and they will genuinely care about achieving the best result in your case.",
    author: "Ryan D.",
  },
  {
    title: "A FIGHTER",
    quote:
      "An aggressive trial lawyer who will not shy away from a fight in the courtroom and cares a whole lot about making sure the right thing gets done.",
    author: "Eric B.",
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
