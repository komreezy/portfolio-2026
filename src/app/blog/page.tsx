import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

const blogPosts = [
  {
    title: "What to Do After a Car Accident in Georgia",
    excerpt:
      "The moments after a car accident can be overwhelming. Learn the essential steps you should take to protect yourself, your health, and your legal rights after a collision in Georgia...",
    category: "Car Accidents",
    slug: "what-to-do-after-car-accident-georgia",
    image: null,
  },
  {
    title: "How Insurance Companies Try to Minimize Your Claim",
    excerpt:
      "Insurance adjusters may seem friendly, but their goal is to pay as little as possible. Learn the tactics they use and how to protect yourself from lowball settlement offers...",
    category: "Insurance Claims",
    slug: "insurance-company-tactics",
    image: null,
  },
  {
    title: "Understanding Georgia's Statute of Limitations for Personal Injury",
    excerpt:
      "In Georgia, you generally have two years from the date of your injury to file a personal injury lawsuit. Learn about exceptions and why acting quickly matters...",
    category: "Personal Injury",
    slug: "georgia-statute-of-limitations",
    image: null,
  },
  {
    title: "Types of Damages You Can Recover in a Personal Injury Case",
    excerpt:
      "From medical expenses and lost wages to pain and suffering, there are many types of compensation available. Learn what damages you may be entitled to recover...",
    category: "Personal Injury",
    slug: "types-of-damages-personal-injury",
    image: null,
  },
  {
    title: "When to Hire a Personal Injury Lawyer",
    excerpt:
      "Not every accident requires an attorney, but serious injuries often do. Learn when it makes sense to hire a personal injury lawyer and how they can help maximize your recovery...",
    category: "Personal Injury",
    slug: "when-to-hire-personal-injury-lawyer",
    image: null,
  },
  {
    title: "Common Causes of Truck Accidents in Georgia",
    excerpt:
      "Truck accidents often result in catastrophic injuries due to the size and weight of commercial vehicles. Learn about the most common causes and who may be held liable...",
    category: "Truck Accidents",
    slug: "common-causes-truck-accidents-georgia",
    image: null,
  },
];

export default function Blog() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)] bg-[var(--card)]">
        <div className="max-w-4xl">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-light text-[var(--foreground)] leading-tight mb-4">
              Recent Blog Posts
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h3 className="text-xl font-medium text-[var(--primary)] mb-2">
              Personal Injury Attorney in Georgia
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-[var(--muted-foreground)] font-light">
              Assured Justice Firm
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={0.1 * index}>
              <article className="group">
                {/* Image Placeholder */}
                <div className="aspect-[16/10] bg-[var(--secondary)] opacity-40 mb-4"></div>

                {/* Category */}
                <Link
                  href={`/blog/category/${post.category.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-xs uppercase tracking-wider text-[var(--primary)] hover:underline"
                >
                  {post.category}
                </Link>

                {/* Title */}
                <h2 className="font-display text-xl font-light text-[var(--foreground)] mt-2 mb-3 group-hover:text-[var(--primary)] transition-colors duration-150">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                {/* Excerpt */}
                <p className="text-sm font-light text-[var(--muted-foreground)] leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Read More */}
        <div className="text-center mt-12">
          <ScrollReveal delay={0.3}>
            <Link
              href="/blog/page/2"
              className="text-sm font-light text-[var(--primary)] hover:underline"
            >
              Older Entries &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
